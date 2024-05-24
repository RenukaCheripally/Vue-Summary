import Vue from 'vue';
import '../assets/button.css'

const template = `
<div>
    <button class="button" v-bind:class="type" v-on:click="click">{{ buttonName }}</button>
</div>
`;

Vue.component('v-button', {
  template,
  props: {
    buttonName: {
      type: String,
      default: 'Guess'
    },
    clickButton: Function,
    type: {
      type: String,
      default: 'save'
    }
  },
  methods: {
    click() {
      this.clickButton();
    }
  }
})