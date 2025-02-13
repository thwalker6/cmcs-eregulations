<template>
    <div class="related-rule-list" v-if="rules.length">
        <related-rule
            v-for="(rule, index) in limitedRules"
            :key="index"
            :title="rule.title"
            :type="rule.type"
            :citation="rule.citation"
            :publication_date="rule.publication_date"
            :document_number="rule.document_number"
            :html_url="rule.html_url"
            :action="rule.action"
        >
        </related-rule>
        <collapse-button
            v-if="showMoreNeeded && rulesCount > 10"
            v-bind:class="{ subcategory: subcategory }"
            :name="innerName"
            state="collapsed"
            class="category-title"
        >
            <template v-slot:expanded>
                <show-more-button
                    buttonText="- Show Less"
                    :count="rules.length"
                ></show-more-button>
            </template>
            <template v-slot:collapsed>
                <show-more-button
                    buttonText="+ Show More"
                    :count="rules.length"
                ></show-more-button>
            </template>
        </collapse-button>
        <collapsible
            :name="innerName"
            state="collapsed"
            class="category-content additional-rules"
        >
            <related-rule
                v-for="(rule, index) in additionalRules"
                :key="index"
                :title="rule.title"
                :type="rule.type"
                :citation="rule.citation"
                :publication_date="rule.publication_date"
                :document_number="rule.document_number"
                :html_url="rule.html_url"
                :action="rule.action"
            >
            </related-rule>
            <collapse-button
                v-if="showMoreNeeded && rulesCount > 0"
                v-bind:class="{ subcategory: subcategory }"
                :name="innerName"
                state="collapsed"
                class="category-title"
            >
                <template v-slot:expanded>
                    <show-more-button
                        buttonText="- Show Less"
                        :count="rules.length"
                    ></show-more-button>
                </template>
                <template v-slot:collapsed>
                    <show-more-button
                        buttonText="+ Show More"
                        :count="rules.length"
                    ></show-more-button>
                </template>
            </collapse-button>
        </collapsible>
    </div>
    <div v-else class="show-more-inactive">
        No {{ title }} found in the Federal Register from 1994 to present.
    </div>
</template>

<script>
import RelatedRule from "./RelatedRule.vue";
import ShowMoreButton from "./ShowMoreButton.vue";
import CollapseButton from "./CollapseButton.vue";
import Collapsible from "./Collapsible.vue";

export default {
    name: "related-rule-list",

    components: {
        RelatedRule,
        ShowMoreButton,
        CollapseButton,
        Collapsible,
    },

    props: {
        rules: Array,
        limit: {
            type: Number,
            default: 5,
        },
        title: {
            type: String,
        },
    },

    computed: {
        limitedRules() {
            return this.rules.slice(0, this.limit);
        },
        additionalRules() {
            return this.rules.slice(this.limit);
        },
        rulesCount() {
            return this.rules.length;
        },
        showMoreNeeded() {
            return this.rulesCount > this.limit;
        }
    },

    data() {
        return {
            limitedList: true,
            innerName: Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, ""),
        };
    },

    methods: {
        showMore() {
            this.limitedList = !this.limitedList;
        },
    },

    filters: {},
};
</script>
