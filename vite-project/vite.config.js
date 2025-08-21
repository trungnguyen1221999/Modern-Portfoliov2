import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ⚡ Cho Vercel, giữ base mặc định là "./"
  base: "./",
  build: {
    outDir: "dist", // Vercel sẽ build ra folder này
  },
  server: {
    port: 5173, // cổng khi chạy dev
  },
});
