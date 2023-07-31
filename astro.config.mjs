import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    assets: true,
  },
  sites: "https://kakashiorion.github.io/portfolio-website",
  // base: "/portfolio-website",
});
