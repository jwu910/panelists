import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    image({
      logLevel: "debug",
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    ,
    react(),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  output: "server",
  adapter: netlify(),
});
