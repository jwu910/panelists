import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), image(), react()],
  build: {
    inlineStylesheets: "auto"
  },
  output: "server",
  adapter: netlify()
});