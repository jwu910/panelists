import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), image(), react()],
  build: {
    inlineStylesheets: "auto"
  },
  output: "server",
  adapter: vercel()
});