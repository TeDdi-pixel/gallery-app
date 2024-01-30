import { defineConfig } from "vite";
import compression from "vite-plugin-compression2";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
    compression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
  ],
  optimizeDeps: {
    force: true,
    include: ['react', 'react-dom', 'react-hook-form', 'react-icons', 'react-router-dom'],
    exclude: ['firebase'],
  },
});
