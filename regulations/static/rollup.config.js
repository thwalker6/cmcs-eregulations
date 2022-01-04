import vue from "rollup-plugin-vue";
import vuetify from "rollup-plugin-vuetify";
import scss from "rollup-plugin-scss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

const plugins = [
    replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve(),
    commonjs(),
    alias({
        entries: [
            { find: "vue", replacement: "../../node_modules/vue" },
            { find: "vuetify", replacement: "../../node_modules/vuetify" },
        ],
    }),
    vue({ needMap: false }),
    vuetify(),
    scss({ indentedSyntax: true }),
];

export default [
    {
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
        plugins,
    },
];
