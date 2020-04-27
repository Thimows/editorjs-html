import babel from "rollup-plugin-babel";

export default {
  input: "src/app.js",
  output: [
    {
      file: "build/edjsHTML.js",
      format: "umd",
      name: "edjsHTML",
    },
    {
      file: "build/edjsHTML.node.js",
      name: 'edjsHTML',
      format: "cjs",
    },
    {
      file: "build/edjsHTML.browser.js",
      name: "edjsHTML",
      format: "iife",
    } 
  ],
  plugins: [babel()],
};
