import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  cacheDir: "/tmp/aisha-portfolio-vite-cache",
  plugins: [react()],
});
