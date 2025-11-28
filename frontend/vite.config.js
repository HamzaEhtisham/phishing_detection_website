import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs"),
          dest: path.resolve(__dirname, "public/workers"),
        },
      ],
    }),
  ],
  envDir: "../backend",
});
