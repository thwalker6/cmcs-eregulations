import RelatedRules from '../components/RelatedRules.vue';

export default {
  title: 'SupplementalContent/Related Rules',
  component: RelatedRules,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RelatedRules },
  template: '<related-rules v-bind="$props" ></related-rules>',
});

export const Basic = Template.bind({});
Basic.args = {
    "title": "42",
    "part": "433",
    "limit": "5"
};
