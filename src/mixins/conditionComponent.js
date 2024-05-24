export const DefaultConditionComponent = {
  data() {
    return {
      localValue: {},
    };
  },
  props: {
    value: {
      type: Object,
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.localValue = { ...newValue };
      },
      immediate: true,
    },
  },
  methods: {
    updateParent() {
      this.$emit('update', this.localValue);
    }
  },
}