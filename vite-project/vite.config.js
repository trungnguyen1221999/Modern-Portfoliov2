import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // <-- dùng ./ để build tĩnh chạy được trên Vercel hoặc GH Pages
});
