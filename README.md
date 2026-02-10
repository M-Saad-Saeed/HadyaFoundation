# Hadya Foundation UI (React)

## Project info

This is a Vite + React + TypeScript frontend.

## Local development

Use your preferred IDE.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Install dependencies
npm i

# Step 2: Start the dev server
npm run dev

# Step 3: Production build
npm run build
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deploy to Hostinger (static hosting)

This is a Single Page Application (SPA) using `react-router-dom`.

1) Build locally:

```sh
npm run build
```

2) Upload the **contents** of the `dist/` folder to:

```
public_html/
```

3) Ensure SPA routing works:

This repo includes `public/.htaccess`, which is copied into `dist/` at build time.
Upload it alongside `index.html` so URLs like `/donate` work without 404.

4) Hosting in a subfolder (optional)

If hosting under a subpath (e.g. `https://domain.com/hadya/`), set `base` in `vite.config.ts`:

```ts
// vite.config.ts
export default defineConfig({
  base: "/hadya/",
});
```

`BrowserRouter` is configured with `basename={import.meta.env.BASE_URL}` so routes continue to work.
