# AGENTS.md — react_projet_final

## Stack
- **React 18 + CRA** (react-scripts 5), **JSX only** (no TypeScript)
- **React Router v6** (`BrowserRouter`, `<Routes>` + `<AnimatePresence>` page transitions)
- **Tailwind CSS v3** (`darkMode: 'class'`, custom colors/fonts), **Flowbite React**, **Framer Motion**
- **react-hot-toast**, **react-icons** (Hi, Fa, Io, Bs, Lu)

## Commands
| Command | Action |
|---------|--------|
| `npm start` / `npm run dev` | Dev server on localhost:3000 |
| `npm run build` | Production build to `build/` |
| `npm test` | Jest watcher (react-scripts test) |

No typecheck, lint, or format commands beyond CRA defaults.

## Architecture
- **Entry**: `src/index.jsx` → `<BrowserRouter><App /></BrowserRouter>`
- **Routing**: `src/App.jsx` wraps `<Routes>` in `<AnimatePresence mode="wait">` with staggered page transitions (`framer-motion` `pageVariants`)
- **Route table**: `/` `/home` → `HomePage`, `/shop` → `Shop`, `/shop/:id` → `ProductDetails`, `/cart` → `Cart`, `/checkout` → `Checkout`, `/about` → `About`, `/contact` → `Contact`, `/auth` → `AuthPage`
- **Global state**: `MyContext`/`MyProvider` in `src/utils/ContextProvider.jsx` — `Mydrises`, `cart`, `addToCart`, `removeFromCart`, `updateQuantity`, `darkMode`, `toggleTheme`
- **Cart** persisted to `localStorage('cart')`; **dark mode** persisted to `localStorage('theme')`
- **Auth** (`src/pages/Auth/AuthPage.jsx`) is a UI-only page (sign in / sign up with form validation, social buttons, no backend)

## Design System
- **Fonts**: DM Serif Display (headings, `.font-display`), Bebas Neue (compressed display, `.font-compressed`), Syne (body, `.font-body`)
- **Colors**: `dark` (#0a0a0a), `dark-secondary` (#141414), `dark-card` (#1a1a1a), `dark-border` (#2a2a2a), `cream` (#f5f0eb), `accent` (#dc2626), `accent-gold` (#c4944f), `muted` (#a3a3a3)
- **Components**: `btn-primary`, `btn-outline`, `card-dark`, `section-padding`, `section-title`, `noise-overlay` (grain texture via CSS `::after`) — all defined in `src/index.css` `@layer components`
- **Tailwind**: Extended in `tailwind.config.js` with custom colors, font families, and keyframe animations (`fade-in`, `slide-up`, `scale-in`, `bounce-gentle`)

## Conventions
- All components are **named exports** (except `App` default)
- Files use **.jsx** extension
- **SCSS** has been removed — all styling via Tailwind utility classes
- Tailwind **dark mode** via `dark:` prefix (class-based, toggled on `<html>`)
- All motion/animation uses **Framer Motion** (`motion.div`, `AnimatePresence`, `useInView`, `useScroll`)
- Products data is hardcoded as state in `ContextProvider.jsx`; prices are strings with `$` prefix
- Product images are imported as JS modules via Webpack

## Gotchas
- No TypeScript — do not add `.ts`/`.tsx` files
- `flowbite-react` requires its plugin in `tailwind.config.js` — already configured
- `/checkout` route exists but is UI-only (no payment processing)
- Auth page is UI-only (no backend, no real authentication)
- `.agents/` dir is untracked local OpenCode configuration
