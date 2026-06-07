# Espe Moragues — Portfolio

A premium, modern, and interactive personal portfolio website for **Espe Moragues**, a Creative Art Director based in Valencia. Designed with rich aesthetics, smooth micro-animations, custom interactions, and a clean typography-driven aesthetic.

---

## ✨ Features

- 🖱️ **Custom Fluid Cursor**: Interactive mouse follower with custom states.
- 🎨 **Modern Dark Aesthetics**: Premium dark palette (`#131313`) featuring glassmorphic effects, subtle gradients, and elegant typography.
- 🔄 **Component Micro-Animations**: Smooth entry animations using React-based transition states.
- 📱 **Fully Responsive**: Optimized for everything from mobile phones to high-resolution desktop monitors.
- 📊 **Contentful CMS Integration**: Connects to Contentful via a decoupled service layer to fetch content in real-time. Includes an intelligent 24-hour `localStorage` cache to minimize API calls.
- 🚦 **Native Navigation History**: Custom `window.history` integration (`HistoryService`) so browser Back/Forward buttons smoothly navigate modals and languages without reloading.
- 🌐 **Multi-language (i18n)**: Full support for Spanish (`es`) and English (`en`), each with their own data block and automated CMS fallback routing.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/                 # Static assets and graphics
│   ├── components/
│   │   ├── layout/             # Global layout (Navbar, Footer)
│   │   ├── project-detail/     # Project detail overlay and section layouts
│   │   ├── sections/           # Page sections (Hero, Quote, About, Projects, Experience)
│   │   └── ui/                 # Reusable micro-components (Cursor, Badges, Cards)
│   ├── data/
│   │   └── portfolio.ts        # ⭐ Main data file — edit this to customize the portfolio
│   ├── hooks/                  # Custom React hooks (usePortfolio)
│   ├── locales/                # i18n translation files (es.json, en.json)
│   ├── services/               # Service layer for data fetching
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind v4 config
│   └── main.tsx                # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (version 18+ recommended) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aljanue/espe-portfolio.git
   cd espe-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Environment Variables (CMS)

To connect the application to **Contentful**, create a `.env` file in the root directory and add your credentials:

```env
VITE_CONTENTFUL_SPACE_ID="your-space-id"
VITE_CONTENTFUL_ACCESS_TOKEN="your-delivery-api-token"
VITE_CONTENTFUL_ENVIRONMENT="master"
```

> **Note:** If these variables are not provided, the application will automatically fall back to using the local mock data inside `src/data/portfolio.ts` to prevent crashing.

### Schema Documentation

For a complete guide on how to structure the data in Contentful, please refer to the [CMS_INTEGRATION.md](./CMS_INTEGRATION.md) file.

### Build and Deployment

Generate an optimized production build in the `dist/` folder:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

