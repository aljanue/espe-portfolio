# Espe Moragues — Portfolio

A premium, modern, and interactive personal portfolio website for **Espe Moragues**, a Creative Art Director based in Valencia. Designed with rich aesthetics, smooth micro-animations, custom interactions, and a clean typography-driven aesthetic.

---

## ✨ Features

- 🖱️ **Custom Fluid Cursor**: Interactive mouse follower with custom states.
- 🎨 **Modern Dark Aesthetics**: Premium dark palette (`#131313`) featuring glassmorphic effects, subtle gradients, and elegant typography.
- 🔄 **Component Micro-Animations**: Smooth entry animations using React-based transition states.
- 📱 **Fully Responsive**: Optimized for everything from mobile phones to high-resolution desktop monitors.
- 📊 **Dynamic Data-Driven Architecture**: Easily modifiable portfolio data layer decoupled from the layout components.

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
│   ├── assets/          # Static assets and graphics
│   ├── components/      # UI components grouped by function
│   │   ├── layout/      # Global layout (Navbar, Footer)
│   │   ├── sections/    # Page sections (Hero, Quote, About, Projects, Experience)
│   │   └── ui/          # Reusable micro-components (Cursor, Badges, Cards)
│   ├── data/            # Local data models and portfolio content (portfolio.ts)
│   ├── hooks/           # Custom React hooks (usePortfolio)
│   ├── services/        # Service layers for data fetching/handling
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and Tailwind v4 configuration
│   └── main.tsx         # React entry point
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

### Build and Deployment

To generate a optimized production build in the `dist` folder:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📝 Customizing Portfolio Data

All the copy, projects, experiences, and social links are centralized in a single configuration file. To update the content of the portfolio, modify the object inside:

📍 `src/data/portfolio.ts`

```typescript
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Espe Moragues",
    subheadline: "Creative Art Director based in Valencia...",
    // ...
  },
  projects: [
    // Add or modify projects here
  ],
  experiences: [
    // Add or modify career experiences here
  ]
};
```
