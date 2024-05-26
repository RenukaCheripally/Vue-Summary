// input.js

import Vue from "vue";

import '../assets/input.css';

const template = `
  <div class="v-input">
  <label v-if="label" class="label">{{ label }}</label>
  <div class="input-group" v-bind:class="affix">                           
    <span v-if="['prefix', 'presuffix'].includes(affix)" class="affix prefix"><slot name="prefix"></slot></span>
    <input class="input" v-bind:class="type" v-bind:placeholder="placeholder" type="text" v-model="inputValue" name="input">
    <span v-if="['suffix', 'presuffix'].includes(affix)" class="affix suffix"><slot name="suffix"></slot></span>
  </div>
  </div>
`;

Vue.component('v-input', {
  template,
  props: {
    value: {
      type: String|Number
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    affix: {
      type: String
    },
    type: {
      type: String
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value || '';
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
});