import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.frag", "**/*.vert"],
  build: {
    rollupOptions: {
      external: ["*.frag", "*.vert"],
    },
  },
});
