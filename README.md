# Artic Analytica - Company Profile Website

Official company profile website for **Artic Analytica**, a premier data research and strategic consulting firm specializing in socio-political insights, market intelligence, policy advisory, and data-driven solutions.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI & Icons**: [Lucide React](https://lucide.dev/), Radix UI Primitives, `clsx`, `tailwind-merge`
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form & Email**: Resend & Nodemailer

---

## 📂 Project Structure

```text
├── public/              # Static assets (brand logos, images, icons)
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   │   ├── (routes)     # Home, About, Works, Blog, Contact, Who We Are
│   │   ├── layout.tsx   # Root layout with meta configuration
│   │   └── globals.css  # Global styles & Tailwind CSS v4 variables
│   ├── components/
│   │   ├── common/      # Reusable UI components & buttons
│   │   ├── layout/      # Navbar, Footer, and responsive wrappers
│   │   ├── sections/    # Modular landing and page sections
│   │   └── ui/          # UI primitives
│   └── lib/             # Utility functions and constant data
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or newer
- npm, pnpm, or yarn

### Installation

1. Clone repository:
   ```bash
   git clone https://github.com/kalunatechnology/artic-compro.git
   cd artic-compro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if required for contact forms):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test and build the production bundle:

```bash
npm run build
npm run start
```

---

## 📄 License

Copyright © 2026 Artic Analytica & Kaluna Technology. All rights reserved.
