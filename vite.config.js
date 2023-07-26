import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// import { registerSW } from "virtual:pwa-register";

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location)) {
//   registerSW();
// }
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
export default defineConfig({
  base: "./",
  workboxOptions: {
    maximumFileSizeToCacheInBytes: 5000000, // <---- increasing the file size to cached 5mb
  },
  maximumFileSizeToCacheInBytes: 5000000,
  plugins: [
    react(),
    VitePWA({
      name: "Mahesa Surandana",
      short_name: "Mahesa",
      description: "Media Hebat Aksara Sunda Urang Sadayana",
      icons: [
        {
          src: "favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon",
        },
        {
          src: "logo192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "logo512.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff",
      lang: "id",
    }),
  ],
});
