import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

// console.log("Current directory:", __dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), Inspect()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        // eslint-disable-next-line no-undef
        main: resolve(__dirname, 'index.html'),
        // eslint-disable-next-line no-undef
        [`001001-variables`]: resolve(__dirname, '001001-variables/index.html'),
        // eslint-disable-next-line no-undef
        [`002001-type-conversion-and-coercion`]: resolve(__dirname, '002001-type-conversion-and-coercion/index.html'),
        // eslint-disable-next-line no-undef
        [`002002-truthy-and-falsy-values`]: resolve(__dirname, '002002-truthy-and-falsy-values/index.html'),
        // eslint-disable-next-line no-undef
        [`002003-equality-operators-==vs===`]: resolve(__dirname, '002003-equality-operators-==vs===/index.html'),
        // eslint-disable-next-line no-undef
        [`002004-logical-operators`]: resolve(__dirname, '002004-logical-operators/index.html'),
        // eslint-disable-next-line no-undef
        [`002005-the-switch-statement`]: resolve(__dirname, '002005-the-switch-statement/index.html'),
        // eslint-disable-next-line no-undef
        [`002006-the-conditional-(ternary)-operator`]: resolve(__dirname, '002006-the-conditional-(ternary)-operator/index.html'),
        // eslint-disable-next-line no-undef
        [`003001-activating-strict-mode`]: resolve(__dirname, '003001-activating-strict-mode/index.html'),
        // eslint-disable-next-line no-undef
        [`003002-function-example`]: resolve(__dirname, '003002-function-example/index.html'),
        // eslint-disable-next-line no-undef
        [`003003-function-declarations-vs-expressions`]: resolve(__dirname, '003003-function-declarations-vs-expressions/index.html'),
        // eslint-disable-next-line no-undef
        [`003004-arrow-functions`]: resolve(__dirname, '003004-arrow-functions/index.html'),
        // eslint-disable-next-line no-undef
        [`003005-functions-calling-other-functions`]: resolve(__dirname, '003005-functions-calling-other-functions/index.html'),
        // eslint-disable-next-line no-undef
        [`004001-array-example`]: resolve(__dirname, '004001-array-example/index.html'),
        // eslint-disable-next-line no-undef
        [`004002-basic-array-operations`]: resolve(__dirname, '004002-basic-array-operations/index.html'),
        // eslint-disable-next-line no-undef
        [`005001-dot-vs-bracket-notation`]: resolve(__dirname, '005001-dot-vs-bracket-notation/index.html'),
        // eslint-disable-next-line no-undef
        [`005002-object-methods`]: resolve(__dirname, '005002-object-methods/index.html'),
        // eslint-disable-next-line no-undef
        [`005003-for-loop`]: resolve(__dirname, '005003-for-loop/index.html'),
        // eslint-disable-next-line no-undef
        [`005004-loopingarrays-breaking-and-continuing`]: resolve(__dirname, '005004-loopingarrays-breaking-and-continuing/index.html'),
        // eslint-disable-next-line no-undef
        [`005005-loops-in-loops`]: resolve(__dirname, '005005-loops-in-loops/index.html'),
        // eslint-disable-next-line no-undef
        [`005006-while-loop`]: resolve(__dirname, '005006-while-loop/index.html'),
        // eslint-disable-next-line no-undef
        [`006001-selecting-elements`]: resolve(__dirname, '006001-selecting-elements/index.html'),
      },
    },
  },
});
