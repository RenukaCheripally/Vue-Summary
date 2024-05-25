import Vue from 'vue';
import '@/assets/checkbox.css'

// Define the v-checkbox component
Vue.component('v-checkbox', {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trueText: {
      type: String,
      default: 'Enabled'
    },
    falseText: {
      type: String,
      default: 'Enable'
    },
    label: {
      type: String
    }
  },
  computed: {
    checkboxValue: {
      get() {
        return this.value || '';
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  template: `
    <div class="v-checkbox">
      <input class="checkbox" type="checkbox" v-model="checkboxValue">
      <label class="label">{{ label ? label : ( value ? trueText : falseText )}}</label>
    </div>
  `
});