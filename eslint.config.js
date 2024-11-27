import { defineConfig } from '@soybeanjs/eslint-config';
export default defineConfig({
  yaml: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier'
  }
});
