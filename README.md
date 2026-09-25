# 📂 Archiva

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-archiva--topaz.vercel.app-00dfa2?style=for-the-badge&logo=vercel&logoColor=white)](https://archiva-topaz.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Anshuman10703%2FArchiva-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Anshuman10703/Archiva)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

  <p align="center">
    <strong>AI-powered architectural visualization from 2D sketches and floor plans.</strong>
    <br />
    Transform architectural concepts into immersive visualizations with AI.
    <br />
    <br />
    <a href="https://archiva-topaz.vercel.app/"><strong>Explore the Live App »</strong></a>
    <br />
    <br />
    <a href="#-features">Features</a>
    ·
    <a href="#-tech-stack">Tech Stack</a>
    ·
    <a href="#-architecture">Architecture</a>
    ·
    <a href="#-getting-started">Getting Started</a>
    ·
    <a href="#-project-structure">Project Structure</a>
    ·
    <a href="#-contributing">Contributing</a>
  </p>

</div>

---

## 📖 Overview

**Archiva** is an AI-powered architectural visualization platform designed to transform **2D architectural sketches, floor plans, and design concepts into realistic architectural visualizations**.

Instead of manually creating 3D models or spending hours configuring materials, lighting, and environments, users can upload an architectural image and let AI generate a visual representation of the design.

Archiva combines:

- 🤖 AI-powered image generation
- 🏗️ Architectural visualization
- ☁️ Serverless cloud infrastructure
- 🔐 Authentication
- 🖼️ Persistent image hosting
- 📁 Project history
- 🔄 Before/after comparison
- 🌐 Project sharing

🔗 **Live Deployment:** [https://archiva-topaz.vercel.app/](https://archiva-topaz.vercel.app/)

---

## ✨ Features

- 🤖 **AI Architectural Visualization:** Transform 2D sketches and floor plans into AI-generated architectural renders.

- 🏗️ **2D → 3D Visualization:** Convert architectural concepts into realistic visual representations while preserving the original design intent.

- 🖼️ **Persistent Image Hosting:** Source images and generated renders are stored using cloud-based file storage with persistent URLs.

- 📁 **Project History:** Automatically save and manage previously generated architectural visualizations.

- 🔄 **Before & After Comparison:** Compare the original architectural sketch with the AI-generated visualization using an interactive comparison interface.

- 🔐 **User Authentication:** Secure authentication and user-specific cloud resources powered by Puter.

- 🌐 **Project Visibility:** Support for private and public project visibility.

- ☁️ **Serverless Backend:** Project APIs are powered by Puter Workers without requiring a traditional backend server.

- 🗄️ **Persistent Project Metadata:** Project information is stored using Puter KV storage.

- 📤 **Export & Sharing:** Access generated visualizations through persistent hosted URLs for sharing and presentations.

- 📱 **Responsive Interface:** Designed to work across desktop, tablet, and mobile screen sizes.

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)

### Backend & Cloud

- **Cloud Platform:** [Puter](https://puter.com/)
- **Cloud SDK:** Puter.js
- **Serverless APIs:** Puter Workers
- **Database:** Puter KV
- **File Storage:** Puter File System
- **Authentication:** Puter Auth
- **Image Hosting:** Puter Hosting

### AI

- **AI Image Generation:** Claude / Gemini powered workflows
- **Image Processing:** Client-side image conversion and optimization

### Deployment & Tooling

- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** [Git](https://git-scm.com/)
- **Repository:** [GitHub](https://github.com/)
- **Package Manager:** npm

---

## 🏛️ Architecture

```text
                         ┌──────────────────────────┐
                         │       ARCHIVA APP        │
                         │   React + TypeScript     │
                         └────────────┬─────────────┘
                                      │
                ┌─────────────────────┼─────────────────────┐
                │                     │                     │
                ▼                     ▼                     ▼
        ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
        │ Authentication│      │ AI Generation│      │   Projects   │
        └──────┬───────┘      └──────┬───────┘      └──────┬───────┘
               │                     │                     │
               └─────────────────────┼─────────────────────┘
                                     │
                              ┌──────▼──────┐
                              │    PUTER    │
                              └──────┬──────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
       ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
       │ Puter Workers│      │   Puter KV   │      │  Puter File  │
       │              │      │              │      │    System    │
       └──────┬───────┘      └──────┬───────┘      └──────┬───────┘
              │                     │                     │
              ▼                     ▼                     ▼
        REST API Routes       Project Metadata       Images / Assets
```

---

## 🚀 Getting Started

Follow these steps to set up and run the repository locally.

### Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/) (`v18.x` or higher)
- Package manager: `npm`, `yarn`, or `pnpm`
- A [Puter](https://puter.com/) account for authentication, storage, and Workers

### Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/Anshuman10703/Archiva.git
   cd Archiva
```

2. **Install dependencies:**

```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
```

3. **Configure Environment Variables:**
   Create a `.env.local` or `.env` file in the root directory if any custom variables or API keys are required (e.g. Puter app credentials, AI provider keys):

```env
   # Example:
   # VITE_PUTER_APP_ID=your-app-id
```

4. **Run the local development server:**

```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
```

5. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal).

---

## 📁 Project Structure

```plaintext
Archiva/
├── public/              # Static media, icons, and favicon assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components (Modals, Cards, Buttons, Inputs)
│   ├── pages/            # Application routes and views
│   ├── styles/           # Tailwind CSS and global stylesheets
│   ├── hooks/             # Custom React hooks
│   └── utils/             # Utility helpers and shared constants
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## 🚢 Deployment

The project is continuously integrated and deployed using **Vercel**.

To deploy your own fork:

1. Fork or push this repository to your GitHub account.
2. Sign in to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the `Archiva` repository.
4. Set the project preset to **Vite** and configure any required environment variables (Puter credentials, AI keys).
5. Click **Deploy**.

---

## 🤝 Contributing

Contributions make the open-source community an incredible place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request against the `main` branch.

---

## 👤 Author

**Anshuman Singh**
B.Tech Computer Science Engineer
Frontend / Full-Stack Developer

- GitHub: [@Anshuman10703](https://github.com/Anshuman10703)
- Repository: [Anshuman10703/Archiva](https://github.com/Anshuman10703/Archiva)
- Live Project: [archiva-topaz.vercel.app](https://archiva-topaz.vercel.app/)
