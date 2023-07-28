import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    assets: true,
  },
  sites: "https://kakashiorio.github.io/",
  base: "/portfolio-website",
});
