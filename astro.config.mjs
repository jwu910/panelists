import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
// import mdx from "astro/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    // mdx(),
    react(),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  output: "server",
  adapter: netlify(),
  root: ".",
});
