import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // or 'jsdom',
    setupFiles: "vitest.setup.ts",
  },
});
