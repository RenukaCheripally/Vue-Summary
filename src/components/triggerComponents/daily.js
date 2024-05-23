import Vue from "vue";

const template = `  <div>
<v-input affix="prefix">
  <template v-slot:prefix>
    Time
  </template>
</v-input>
</div>`;

Vue.component('daily', {
  template
})
