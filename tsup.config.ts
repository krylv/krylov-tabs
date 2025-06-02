import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.ts"],
  format: "esm",
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["node_modules", "assets", "storybook"],
});
