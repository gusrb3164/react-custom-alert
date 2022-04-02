import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({ target: "es5", sourceMap: true }),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
  output: [
    {
      sourcemap: true,
      file: "dist/index.esm.js",
      format: "es",
    },
    {
      name: "react-custom-alert",
      sourcemap: true,
      file: "dist/index.js",
      format: "umd",
    },
  ],
};
