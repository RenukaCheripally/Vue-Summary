import Vue from "vue";

const template = `
  <div class="card">
    <slot></slot>
  </div>
`;

Vue.component('Card', {
  template
});