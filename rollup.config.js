import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-import-css";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({ plugins: "tsconfig.json", useTsconfigDeclarationDir: true }),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    css(),
  ],
  output: [
    {
      file: "dist/index.esm.js",
      format: "es",
    },
    {
      name: "react-custom-alert",
      file: "dist/index.js",
      format: "umd",
    },
  ],
};
