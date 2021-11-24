import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

const plugins = [
    replace({
        "process.env.ES_BUILD": JSON.stringify("false"),
        "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    vue({ needMap: false }),
    nodeResolve(),
    commonjs(),
];

export default [
    {
        // ...
        input: "components/RelatedRules.vue",
        output: {
            format: "esm",
            file: "regulations/js/RelatedRules.js",
        },
        plugins,
    },
    {
        input: "components/CollapseButton.vue",
        output: {
            format: "esm",
            file: "regulations/js/CollapseButton.js",
        },
        plugins,
    },
    {
        input: "components/Collapsible.vue",
        output: {
            format: "esm",
            file: "regulations/js/Collapsible.js",
        },
        plugins,
    },
    {
        input: "components/SupplementalContent.vue",
        output: {
            format: "esm",
            file: "regulations/js/SupplementalContent.js",
        },
        plugins,
    },
    {
        input: "components/tooltips/CopyBtn.vue",
        output: {
            format: "esm",
            file: "regulations/js/CopyBtn.js",
        },
        plugins,
    },
    {
        input: "components/TableComponent.vue",
        output: {
            format: "esm",
            file: "regulations/js/TableComponent.js",
        },
        plugins,
    },
    {
        input: "regulations/js/main.js",
        output: {
            file: "regulations/js/main.build.js",
            format: "iife",
        },
    },
];
