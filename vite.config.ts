import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@features": path.resolve(__dirname, "./src/features"),
      // "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
