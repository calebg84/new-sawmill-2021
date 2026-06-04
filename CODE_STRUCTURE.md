# Heartland Sawmill Website - Code Structure Guide

## Overview

This is a **Next.js 16** website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Material UI (MUI)**. It's a single-page marketing website for a mobile sawmilling business serving Central Illinois. The project was generated using [v0.app](https://v0.app) (Vercel's AI code generator).

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Components (Primary) | Material UI (@mui/material) |
| UI Components (Secondary) | shadcn/ui (Radix-based) |
| Styling | Tailwind CSS v4 + MUI sx prop |
| Fonts | Playfair Display + Lora (Google Fonts) |
| Forms | react-hook-form + zod validation |
| Charts | recharts |
| Icons | lucide-react + @mui/icons-material |
| Analytics | @vercel/analytics |
| Theme | next-themes (dark/light mode) |

---

## Directory Structure

```
heartland-sawmill-website/
├── app/                        # Next.js App Router (pages & layout)
│   ├── globals.css             # Global CSS + Tailwind + CSS variables
│   ├── layout.tsx              # Root layout (fonts, metadata, providers)
│   └── page.tsx                # Homepage (assembles all sections)
│
├── components/                 # React components
│   ├── providers/              # Context providers
│   │   └── ThemeProvider.tsx   # MUI theme wrapper
│   ├── sections/               # Page section components
│   │   ├── Header.tsx          # Navigation bar with mobile drawer
│   │   ├── Hero.tsx            # Hero banner with CTA buttons
│   │   ├── Features.tsx        # 4-column feature highlights
│   │   ├── About.tsx           # About section with image
│   │   ├── CallToAction.tsx    # CTA banner
│   │   └── Footer.tsx          # Footer with links & contact info
│   ├── ui/                     # shadcn/ui primitive components (57 files)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   └── ... (many more)
│   └── theme-provider.tsx      # next-themes wrapper (unused duplicate)
│
├── hooks/                      # Custom React hooks
│   ├── use-mobile.ts           # Detects mobile viewport (<768px)
│   └── use-toast.ts            # Toast notification state management
│
├── lib/                        # Utility libraries
│   ├── theme.ts                # MUI theme config (colors, typography)
│   └── utils.ts                # cn() helper for Tailwind class merging
│
├── public/                     # Static assets
│   ├── icon-*.png              # Favicon variants
│   ├── icon.svg
│   ├── apple-icon.png
│   └── placeholder-*.svg/jpg   # Placeholder images
│
├── styles/                     # Additional styles
│   └── globals.css             # Duplicate of app/globals.css
│
├── next.config.mjs             # Next.js configuration
├── components.json             # shadcn/ui configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies & scripts
```

---

## Key Files Explained

### `app/layout.tsx` - Root Layout
- Sets up Google Fonts (Playfair Display, Lora)
- Defines SEO metadata (title, description, favicons)
- Wraps the app in `ThemeProvider` (MUI)
- Adds Vercel Analytics in production

### `app/page.tsx` - Homepage
- Client component (`"use client"`)
- Assembles the page from section components in order: Header → Hero → Features → About → CallToAction → Footer
- Uses MUI `Box` for the root container with cream background (`#F5F0E6`)

### `lib/theme.ts` - MUI Theme
- Defines the earth-tone rustic vintage color palette:
  - **Primary:** Forest green (`#3D5A3D`)
  - **Secondary:** Antique gold (`#8B6914`)
  - **Background:** Cream (`#F5F0E6`)
  - **Text:** Dark brown (`#2D2418`)
- Configures typography (Playfair Display for headings, Lora for body)
- Customizes MUI component styles (buttons, cards, app bar)

### `app/globals.css` - Global Styles
- Tailwind CSS v4 imports
- CSS custom properties for light/dark themes (shadcn/ui)
- Base layer resets

### `components.json` - shadcn/ui Config
- Configures shadcn/ui with "new-york" style
- Sets up path aliases (`@/components`, `@/lib`, etc.)
- Uses lucide icons

---

## Component Architecture

### Section Components (The Website Content)

All sections use **MUI components** (`Box`, `Container`, `Typography`, `Grid`, `Button`) with inline `sx` styling.

| Component | Purpose |
|-----------|---------|
| `Header` | Sticky navbar with logo, nav links, "Get A Quote" button, mobile hamburger drawer |
| `Hero` | Main banner with headline, description, CTA buttons, and hero image (Unsplash) |
| `Features` | 4-column grid highlighting key services with icons |
| `About` | Split layout: image + description + 3 feature cards |
| `CallToAction` | Dark banner with CTA button and circular logo stamp |
| `Footer` | 4-column footer: logo, quick links, service area, contact info |

### UI Components (shadcn/ui)

The `components/ui/` folder contains 57 pre-built UI primitives from shadcn/ui. These are **not currently used** by the main page sections (which use MUI instead), but are available for future features like forms, dialogs, etc.

### Providers

- `components/providers/ThemeProvider.tsx` - Wraps children in MUI's `ThemeProvider` with the custom theme
- `components/theme-provider.tsx` - A duplicate/unused wrapper for `next-themes`

---

## How to Run

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

---

## Important Notes

1. **Dual UI Libraries:** The codebase has both **Material UI** (actively used for sections) and **shadcn/ui** (available but unused). This is typical of AI-generated code that combines multiple component sources.

2. **Duplicate Files:** 
   - `app/globals.css` and `styles/globals.css` are identical duplicates
   - `components/theme-provider.tsx` and `components/providers/ThemeProvider.tsx` serve similar but different purposes

3. **Placeholder Content:** 
   - Images use Unsplash URLs (external)
   - Phone number `(309) 555-1234` is a placeholder
   - Email `info@heartlandsawmill.com` is a placeholder
   - Navigation links point to `#` (no routing implemented yet)

4. **Single Page Only:** Currently only has one route (`/`). Sections like "Services", "Lumber", "Gallery", "Contact" mentioned in the nav do not have dedicated pages yet.

5. **Client Components:** All section components use `"use client"` directive because they rely on MUI's interactive components (Drawer, buttons, etc.)

6. **TypeScript Build Errors Ignored:** `next.config.mjs` has `ignoreBuildErrors: true`, which suppresses TypeScript errors during build - you may want to fix these before production.

---

## Design System

### Color Palette
```
Forest Green:  #3D5A3D (primary)
Light Green:   #5C7A5C
Dark Green:    #2A3F2A
Antique Gold:  #8B6914 (secondary)
Light Gold:    #A68A3D
Cream:         #F5F0E6 (background)
Dark Brown:    #2D2418 (text)
Medium Brown:  #5C4A3D
Light Brown:   #D4C4A8 (borders/dividers)
```

### Typography
- **Headings:** Playfair Display (serif, weights 600-800)
- **Body:** Lora (serif, weights 400-600)
- **Buttons:** Playfair Display, uppercase, letter-spaced
