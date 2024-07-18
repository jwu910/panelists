import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
// import mdx from "astro/mdx";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    // mdx(),
    react(),
    icon({
      include: {
        // Only include following icons in bundle
        mdi: ["microsoft-internet-explorer", "github"],
      },
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  output: "server",
  adapter: netlify(),
  root: ".",
});
