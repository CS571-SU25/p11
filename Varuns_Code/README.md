
# React Project Deployment — GitHub Pages (Vite + HashRouter)

This project is a React application built with Vite and styled using react-bootstrap. It uses `HashRouter` for routing compatibility with GitHub Pages.

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<USERNAME>/<REPO_NAME>.git
cd <REPO_NAME>
```

> Replace `<USERNAME>` and `<REPO_NAME>` with your GitHub username and repo name.

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Vite

Ensure your `vite.config.js` includes:

```js
export default defineConfig({
  base: '/<REPO_NAME>/', // Replace with your repo name
  plugins: [react()],
});
```

---

### 4. Update `package.json`

Ensure the following entries are included:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://<USERNAME>.github.io/<REPO_NAME>/",
"devDependencies": {
  "gh-pages": "^6.0.0"
}
```

Then run:

```bash
npm install --save-dev gh-pages
```

---

### 5. Deploy

```bash
git init
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git add .
git commit -m "Initial commit"
git push -u origin main
npm run deploy
```

---

## ✅ Done!

Your project will be live at:  
`https://<USERNAME>.github.io/<REPO_NAME>/`

Ensure you’ve replaced all `<USERNAME>` and `<REPO_NAME>` placeholders above.
