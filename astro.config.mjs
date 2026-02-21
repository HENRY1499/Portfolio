// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import path from "path";
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  server: {
    host: true, // 👈 ESTO ES LA CLAVE
  },
  vite: {
    resolve: {
      alias: {
        "@layouts": path.resolve("./src/layouts"),
      },
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        mdir: ["*"],
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
