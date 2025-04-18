// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // any request to /api/... will be sent to http://localhost:5000/api/...
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        // rewrite is optional here since we're keeping the /api prefix
        // rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
