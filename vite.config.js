import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // This proxy works ONLY for local development (npm run dev)
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api/,
            "/macros/s/AKfycbxV3h53nNP5nNk5OArkEUb_LVlL-mAuFjhGrIISlAkV3P2QQ2wbc2Oxi9b9Wk7uY5jE"
          ),
      },
    },
  },
});
