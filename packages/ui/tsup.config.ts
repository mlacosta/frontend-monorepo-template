import { defineConfig, Options } from "tsup";
    
export default defineConfig((options: Options) => ({
  banner: {
    js: `"use client"`,
  },
  splitting: true,
  entry: ["./**/*.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  ...options,
}));