import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-input affix="prefix" @input="updateParent" v-model="localValue.time" type="secondary">
      <template v-slot:prefix>
        Time
      </template>
    </v-input>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" @input="updateParent" v-model="localValue.frequency">
      <template v-slot:prefix>
        Frequency
      </template>
    </v-select>
  </div>
`;

Vue.component('schedule', {
  template,
  mixins: [DefaultConditionComponent],
  data() {
    return {
      options: [
        {
          value: 'daily',
          label: 'Daily',
        },
        {
          value: 'weekly',
          label: 'Weekly',
        },
        {
          value: 'monthly',
          label: 'Monthly',
        },
        {
          value: 'yearly',
          label: 'Yearly',
        },
      ]
    };
  },
})
