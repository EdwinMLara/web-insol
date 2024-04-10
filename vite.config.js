import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  bbase: "/", // Ensure the base path is correct; it's usually correct by default
  build: {
    outDir: "dist", // Specify your output directory if you prefer something different than the default 'dist'
    // Any other specific configurations needed for your project
  },
});
