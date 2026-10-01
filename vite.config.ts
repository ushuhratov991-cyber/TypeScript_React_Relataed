import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      constants: path.resolve(__dirname, "src/constants"),
      components: path.resolve(__dirname, "src/components"),
      homeworks: path.resolve(__dirname, "src/homeworks"),
      lessons: path.resolve(__dirname, "src/lessons"),
      pages: path.resolve(__dirname, "src/pages"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
});