import Vue from 'vue';
import '@/assets/select.css';

// Define the select dropdown component
Vue.component('v-select', {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    affix: {
      type: String
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value);
    },
  },
  template: `
    <div class="v-select" v-bind:class="affix">                           
      <span v-if="affix==='prefix'" class="affix"><slot name="prefix"></slot></span>
      <select class="select" v-model="value" @change="handleChange">
        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
      </select>
      <span v-if="affix==='suffix'" class="affix "><slot name="suffix"></slot></span>
    </div>
  `,
});