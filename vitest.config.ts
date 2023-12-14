import Vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vitest/config";
import { NSMockViews } from "./__tests__/NSMockViews";

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => NSMockViews.map((nsView) => nsView.toLowerCase()).includes(tag.toLowerCase())
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src")
    },
    extensions: [".mjs", ".js", ".ts", ".json", ".vue"]
  },
  test: {
    globals: true,
    name: "jsdom",
    environment: "jsdom",
    setupFiles: ["__tests__/setup.ts"]
  }
});
