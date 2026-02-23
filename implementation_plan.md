# Goal Description

Enhancing the portfolio to the 2026 Vision by upgrading the underlying architecture. Based on user feedback, we are migrating the single-page Vanilla HTML/CSS/JS application to a standard **React (Vite) JSX** project with Tailwind CSS rather than Next.js. This component-based architecture will cleanly support the upcoming dynamic integrations (AI chatbot, GitHub data) and modern aesthetics (Bento Box, advanced animations) while sticking to standard React.

## Proposed Changes

We will perform this migration in place inside the existing github repository (`muzammil-13.github.io`).

### Project Scaffolding
- Run the Vite React setup command in the current directory: `npx create-vite@latest . --template react` (or `react-swc`).
- Install dependencies: `npm install`
- Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`, then `npx tailwindcss init -p`
- Move the existing `assets/` directory into the Vite `public/assets/` folder so it serves them correctly.

### Styling & CSS Migration
- #### [MODIFY] [src/index.css](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/index.css)
  Setup Tailwind directives. Port the CSS variables from [style.css](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/style.css) (e.g. `--primary-color`).
- #### [DELETE] [style.css](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/style.css)
  Remove the old stylesheet after migrating styles to Tailwind and `index.css`.

### UI Component Migration
We will break the legacy [index.html](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/index.html) file down into modular React (JSX) components inside a new `src/components/` directory.

- #### [NEW] [src/components/Hero.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Hero.jsx)
- #### [NEW] [src/components/About.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/About.jsx)
- #### [NEW] [src/components/Skills.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Skills.jsx)
- #### [NEW] [src/components/Projects.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Projects.jsx)
- #### [NEW] [src/components/Journey.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Journey.jsx)
- #### [NEW] [src/components/Community.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Community.jsx)
- #### [NEW] [src/components/Contact.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Contact.jsx)
- #### [NEW] [src/components/Navbar.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Navbar.jsx)
- #### [NEW] [src/components/Footer.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/components/Footer.jsx)

### Application Assembly
- #### [MODIFY] [src/App.jsx](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/src/App.jsx)
  Assemble all the `components/*` here to replicate the single-page scroll layout.
- #### [MODIFY] [index.html](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/index.html)
  Vite's root HTML file will replace the legacy one.
- #### [DELETE] [script.js](file:///c:/Users/muzam/Documents/Github/muzammil-13.github.io/script.js)
  Remove the old vanilla JS file. Any dynamic logic (like the dark mode toggle or AOS animations) will be implemented using React state/effects and potentially Framer Motion later.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify there are no Vite build errors in the newly scaffolded project.

### Manual Verification
- Start the development server using `npm run dev` and visually verify that the React port matches the original design, responsiveness, and functionality. After this base is solid, we can begin implementing 2026 aesthetics.
