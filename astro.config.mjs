import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    tailwind(), 
    mdx()
  ],
  markdown: {
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: ['rehype-autolink-headings', 'rehype-slug'],
    shikiConfig: {
      theme: 'slack-dark',
      wrap: true,
    },
  },
});