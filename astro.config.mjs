// import image from "@astrojs/image";
// import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // image: {
  //   service: {
  //     entrypoint: 'astro/assets/services/sharp',
  //     config: {
  //       limitInputPixels: false,
  //     },
  //   },
  // },
  integrations: [
    // mdx(),
    // image({
    //   logLevel: "debug",
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    react(),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  output: "server",
  adapter: netlify(),
  root: ".",
});
