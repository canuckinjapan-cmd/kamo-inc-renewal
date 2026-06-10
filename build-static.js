import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// 1. Ensure target directories exist (both local and dist/ for production deployment)
const directories = [
  "./assets",
  "./css",
  "./js",
  "./dist",
  "./dist/assets",
  "./dist/css",
  "./dist/js"
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper to copy files of a directory
function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  const items = fs.readdirSync(src);
  items.forEach((item) => {
    const srcPath = path.join(src, item);
    const dstPath = path.join(dst, item);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, dstPath);
    } else if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(dstPath)) fs.mkdirSync(dstPath, { recursive: true });
      copyDir(srcPath, dstPath);
    }
  });
}

// 2. Clear old assets
console.log("Cleaning assets folder...");
fs.readdirSync("./assets").forEach((file) => {
  const p = path.join("./assets", file);
  if (fs.statSync(p).isFile()) fs.unlinkSync(p);
});

// 3. Copy static asset logos from src/assets to assets
console.log("Copying static assets to local and dist outputs...");
copyDir("./src/assets", "./assets");
copyDir("./assets", "./dist/assets");

// 4. Copy JS files to dist/js
copyDir("./js", "./dist/js");

// 5. Copy root HTML files to dist/
const rootFiles = fs.readdirSync("./");
rootFiles.forEach((file) => {
  if (file.endsWith(".html")) {
    fs.copyFileSync(file, path.join("./dist", file));
  }
});

// 6. Compile Tailwind CSS using CLI to both local and dist outputs
console.log("Compiling Tailwind CSS...");
try {
  // Compile to local css for dev
  execSync("npx -y @tailwindcss/cli -i src/styles.css -o css/styles.css", { stdio: "inherit" });
  // Compile to dist css for production
  execSync("npx -y @tailwindcss/cli -i src/styles.css -o dist/css/styles.css", { stdio: "inherit" });
  console.log("CSS compile succeeded!");
} catch (err) {
  console.error("CSS compile failed:", err);
  process.exit(1);
}

console.log("Static production build completed successfully in ./dist!");
