import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wosdom-guides/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
        ref: true,
        titleProp: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@guides": fileURLToPath(new URL("./guides", import.meta.url)),
    },
  },
});
