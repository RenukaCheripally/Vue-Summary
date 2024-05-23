// input.js

import Vue from "vue";

import '../assets/input.css';

Vue.component('v-input', {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    affix: {
      type: String
    }
  },
  template: `
    <div class="v-input">
      <label class="label">{{ label }}</label>
      <div class="input-group" v-bind:class="affix">                           
        <span v-if="['prefix', 'presuffix'].includes(affix)" class="affix"><slot name="prefix"></slot></span>
        <input class="input" v-bind:placeholder="placeholder" type="text" v-model="value" name="input">
        <span v-if="['suffix', 'presuffix'].includes(affix)" class="affix "><slot name="suffix"></slot></span>
      </div>
    </div>
  `
});