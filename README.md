<div align="center">
  
# 📊 Frontend Technical Assessment  
### A Scalable Frontend System Using React, TypeScript & RTK Query

</div>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/vite.svg" width="50" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/tailwindcss.svg" width="50" />
</p>

This application is a frontend implementation for the Technical Test of a Frontend Developer position at PT. Adi Data Informatika.

## 🚀 Key Features

- 📊 Modern and responsive dashboard interface
- 🔐 Secure authentication and protected routes
- 👥 User management system
- 🎨 Clean UI with reusable component architecture
- ⚡ Fast performance with Vite and React 19
- 📱 Fully responsive across desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Library**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **State Management**: Redux Toolkit + React Redux
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Code Quality**: ESLint

## 📋 Prerequisites

Before running App locally, make sure you have installed:

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Git**
- **Modern Browser** (Chrome, Edge, Firefox)

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/radenmasabdul/test-app.git
cd test-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=YOUR_API_BASE_URL
```

### 4. Start Development Server
```bash
npm run dev
```

The application will run at http://localhost:5173

## 📁 Project Structure

```bash
test-app/
├── public/                      # Public static assets
├── src/
│   ├── app/                     # Core app configuration
│   │   ├── App.tsx              # Main application component
│   │   ├── Providers.tsx        # App providers
│   │   ├── RootLayout.tsx       # Global layout wrapper
│   ├── assets/                  # Images and branding assets
│   ├── components/              # Reusable UI components
│   │   ├── global/              # Global components
│   │   ├── layout/              # Layout components
│   │   └── ui/                  # Shared UI elements
│   ├── features/                # Feature-based modules
│   │   ├── auth/                # Authentication module
│   │   ├── dashboard/           # Dashboard module
│   │   └── users/               # Users module
│   ├── lib/                     # Utilities and helpers
│   │   ├── axios.ts             # Axios instance config
│   │   └── utils.ts             # Shared utility functions
│   ├── pages/                   # Application pages
│   ├── routes/                  # Route definitions
│   │   ├── AppRouter.tsx        # Main router
│   │   └── ProtectedRoute.tsx   # Protected routes
│   ├── store/                   # Redux store setup
│   ├── styles/                  # Global styles
│   └── main.tsx                 # Application entry point
├── .env                         # Local environment variables
├── .env.example                 # Environment example file
├── .gitignore                   # Ignored files for Git
├── components.json              # UI components config
├── eslint.config.js             # ESLint configuration
├── index.html                   # Main HTML template
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
├── tsconfig.json                # Base TypeScript config
├── tsconfig.app.json            # App TypeScript config
├── tsconfig.node.json           # Node TypeScript config
├── vite.config.ts               # Vite configuration
└── README.md                    # Project documentation
```

## 🌍 Live Demo

[Test App Live Demo](https://test-app-mu-lyart.vercel.app)

## 👨‍💻 Author

**radenmasabdul**
- GitHub: [@radenmasabdul](https://github.com/radenmasabdul)
