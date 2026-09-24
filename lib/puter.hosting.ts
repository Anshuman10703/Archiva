import puter from "@heyputer/puter.js";
import {
  createHostingSlug,
  fetchBlobFromUrl,
  getImageExtension,
  HOSTING_CONFIG_KEY,
  getHostedUrl,
  imageUrlToPngBlob,
  isHostedUrl,
} from "./utils";

export const getOrCreateHostingConfig =
  async (): Promise<HostingConfig | null> => {
    try {
      const existing = (await puter.kv.get(
        HOSTING_CONFIG_KEY,
      )) as HostingConfig | null;

      if (existing?.subdomain) {
        return {
          subdomain: existing.subdomain,
        };
      }

      const subdomain = createHostingSlug();

      const created = await puter.hosting.create(subdomain, ".");

      const hostingConfig: HostingConfig = {
        subdomain: created.subdomain,
      };

      await puter.kv.set(HOSTING_CONFIG_KEY, hostingConfig);

      return hostingConfig;
    } catch (error) {
      console.error("Could not create hosting configuration:", error);
      return null;
    }
  };

export const uploadImageToHosting = async ({
  hosting,
  url,
  projectId,
  label,
}: StoreHostedImageParams): Promise<HostedAsset | null> => {
  if (!hosting || !url || !projectId) {
    return null;
  }

  if (isHostedUrl(url)) {
    return { url };
  }

  try {
    const resolved =
      label === "rendered"
        ? await imageUrlToPngBlob(url).then((imageBlob) =>
            imageBlob
              ? {
                  blob: imageBlob,
                  contentType: "image/png",
                }
              : null,
          )
        : await fetchBlobFromUrl(url);

    if (!resolved) {
      console.warn(`Could not resolve ${label} image:`, url);
      return null;
    }

    const contentType =
      resolved.contentType || resolved.blob.type || "application/octet-stream";

    const extension = getImageExtension(contentType, url);

    const directory = `projects/${projectId}`;
    const filePath = `${directory}/${label}.${extension}`;

    const uploadFile = new File([resolved.blob], `${label}.${extension}`, {
      type: contentType,
    });

    await puter.fs.mkdir(directory, {
      createMissingParents: true,
    });

    await puter.fs.write(filePath, uploadFile);

    const hostedUrl = getHostedUrl(
      {
        subdomain: hosting.subdomain,
      },
      filePath,
    );

    if (!hostedUrl) {
      console.warn("Could not generate hosted URL:", filePath);
      return null;
    }

    return {
      url: hostedUrl,
    };
  } catch (error) {
    console.error(`Failed to store ${label} image:`, error);
    return null;
  }
};
