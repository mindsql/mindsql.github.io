import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mindsql.github.io',
  vite: {
    build: {
      // 保留 CSS 源码注释（hallmark 戳记在 tokens.css 首行，压缩会剥掉）
      cssMinify: false,
    },
  },
});
