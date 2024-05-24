<template>
  <div class="v-select" v-bind:class="affix">                           
    <span v-if="affix==='prefix'" class="affix"><slot name="prefix"></slot></span>
    <select class="select" v-model="selectedValue" v-on:change="handleChange">
      <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
    <span v-if="affix==='suffix'" class="affix "><slot name="suffix"></slot></span>
  </div>
</template>

<script>
import '@/assets/select.css';
export default {
  name: 'v-select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String|undefined,
      required: true,
    },
    affix: {
      type: String
    },
    onSelect: Function,
  },
  created() {
    if (this.value) {
      this.selectedValue = this.value;
    }
  },
  data() {
    return {
      selectedValue: '',
    }
  },
  methods: {
    handleChange(event) {
      // this.$emit('input', event.target.value);
      this.$emit('input', event.target.value);
    },
  }
}
</script>
