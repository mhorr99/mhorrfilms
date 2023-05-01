import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://mhorrfilms.benjami.in",
    integrations: [svelte(), mdx()],
});
