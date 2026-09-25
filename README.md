# 📂 Archiva

<div align="center">

### AI-Powered Project Archive & Visualization Platform

**Upload your projects. Preserve your work. Visualize your ideas.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Archiva-00dfa2?style=for-the-badge&logo=vercel&logoColor=white)](https://archiva-topaz.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Anshuman10703/Archiva)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## ✨ Overview

**Archiva** is a modern project archiving and visualization platform designed to help developers preserve, organize, and showcase their work.

Instead of letting projects disappear across different GitHub repositories, local folders, cloud drives, and screenshots, Archiva provides a centralized space where projects can be uploaded and transformed into visually organized project archives.

The platform focuses on making project documentation and presentation **simple, visual, and developer-friendly**.

---

## 🚀 Live Demo

🌐 **[Visit Archiva](https://archiva-topaz.vercel.app/)**

---

## ✨ Features

- 📤 **Project Upload**
  - Upload project files through a simple interface.
  - Track upload progress with visual feedback.

- 🖼️ **Project Images**
  - Upload and associate visual assets with projects.
  - Handle image storage and rendering through the hosting layer.

- 📁 **Project Organization**
  - Keep projects organized in a centralized archive.
  - Make previously completed projects easier to discover and revisit.

- 🔐 **Authentication**
  - Secure user authentication using Puter authentication.

- ☁️ **Cloud-Based Storage**
  - Store project assets using Puter's cloud infrastructure.

- 🎨 **Modern UI**
  - Responsive interface built with React.
  - Clean component-based architecture.
  - Designed around a minimal developer-focused experience.

- ⚡ **Fast & Modern Stack**
  - Built with React and TypeScript.
  - Optimized for modern web development and deployment.

---

## 🛠️ Tech Stack

### Frontend

- **React**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **Lucide React**

### Backend / Cloud

- **Puter.js**
- **Puter Authentication**
- **Puter Hosting / Storage**

### Development

- **Vite**
- **ESLint**
- **Git & GitHub**

### Deployment

- **Vercel**

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│           Archiva            │
│        React Frontend        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        React Router          │
│       Application Flow       │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐ ┌───────────────┐
│    Puter     │ │   Project     │
│     Auth     │ │    Upload     │
└──────────────┘ └───────┬───────┘
                          │
                          ▼
                  ┌───────────────┐
                  │ Puter Hosting │
                  │    Storage    │
                  └───────────────┘
```

---

## 🚀 Getting Started

Follow these steps to set up and run the repository locally.

### Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/) (`v18.x` or higher)
- Package manager: `npm`, `yarn`, or `pnpm`

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
   Create a `.env.local` or `.env` file in the root directory if any custom variables or API keys are required:

```env
   # Example:
   # NEXT_PUBLIC_API_URL=https://api.example.com
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
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal).

---

## 📁 Project Structure

```plaintext
Archiva/
├── public/              # Static media, icons, and favicon assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components (Modals, Cards, Buttons, Inputs)
│   ├── pages/ or app/   # Application routes and views
│   ├── styles/          # Tailwind CSS and global stylesheets
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility helpers and shared constants
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## 🚢 Deployment

The project is continuously integrated and deployed using **Vercel**.

To deploy your own fork:

1. Fork or push this repository to your GitHub account.
2. Sign in to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import the `Archiva` repository.
4. Set the project preset (e.g. Vite / React) and configure any environment variables.
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
