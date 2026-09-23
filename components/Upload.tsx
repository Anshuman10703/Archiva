import { CheckCircle2, ImageIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
import { useOutletContext } from "react-router";

import {
  PROGRESS_INTERVAL_MS,
  PROGRESS_STEP,
  REDIRECT_DELAY_MS,
} from "../lib/constants";

interface UploadProps {
  onComplete: (base64Data: string) => void;
}

const Upload = ({ onComplete }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  const { isSignedIn } = useOutletContext<AuthState>();

  const processFile = (selectedFile: File) => {
    // Don't allow uploads when signed out.
    if (!isSignedIn) return;

    setFile(selectedFile);
    setProgress(0);

    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result as string;

      let currentProgress = 0;

      const progressInterval = setInterval(() => {
        currentProgress += PROGRESS_STEP;

        if (currentProgress >= 100) {
          currentProgress = 100;

          clearInterval(progressInterval);
          setProgress(currentProgress);

          setTimeout(() => {
            onComplete(base64Data);
          }, REDIRECT_DELAY_MS);

          return;
        }

        setProgress(currentProgress);
      }, PROGRESS_INTERVAL_MS);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSignedIn) return;

    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    processFile(selectedFile);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!isSignedIn) return;

    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!isSignedIn) return;

    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragging(false);

    if (!isSignedIn) return;

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) return;

    processFile(droppedFile);
  };

  return (
    <div className="upload">
      {!file ? (
        <div
          className={`dropzone ${isDragging ? "is-dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="drop-input"
            accept=".jpg,.jpeg,.png"
            disabled={!isSignedIn}
            onChange={handleChange}
          />

          <div className="drop-content">
            <div className="drop-icon">
              <UploadIcon size={20} />
            </div>

            <p>
              {isSignedIn
                ? "Click to upload or just drag and drop the file"
                : "Sign in or Sign up with Puter to upload"}
            </p>

            <p className="help">Maximum file size is 50 MB</p>
          </div>
        </div>
      ) : (
        <div className="upload-status">
          <div className="status-content">
            <div className="status-icon">
              {progress === 100 ? (
                <CheckCircle2 className="check" />
              ) : (
                <ImageIcon className="image" />
              )}
            </div>

            <h3>{file.name}</h3>

            <div className="progress">
              <div className="bar" style={{ width: `${progress}%` }} />

              <p className="status-text">
                {progress < 100 ? "Analyzing floor plan..." : "Redirecting.."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
