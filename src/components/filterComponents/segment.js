import Vue from "vue";
Vue.config.devtools = true;
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="localValue.status" @input="updateParent">
      <template v-slot:prefix>
        Status
      </template>
    </v-select>
  </div>
`;

Vue.component('segment', {
  template,
  mixins: [DefaultConditionComponent],
  data() {
    return {
      options: [
        {
          value: 'tester',
          label: 'Tester',
        },
        {
          value: 'developer',
          label: 'Developer',
        },
      ]
    };
  },
})
