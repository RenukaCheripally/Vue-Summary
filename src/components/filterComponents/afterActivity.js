import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-input affix="presuffix" v-model="localValue.delay" @input="updateParent">
      <template v-slot:prefix>
        Delay
      </template>
      <template v-slot:suffix>
        Days
      </template>
    </v-input>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="localValue.pointChange" @input="updateParent">
      <template v-slot:prefix>
        Point change
      </template>
    </v-select>
    <v-input affix="prefix" v-model="localValue.activityCode" @input="updateParent">
      <template v-slot:prefix>
        Activity code
      </template>
    </v-input>
  </div>
`;

Vue.component('afterActivity', {
  mixins: [DefaultConditionComponent],
  template,
  data() {
    return {
      options: [
        {
          value: 'plus',
          label: 'Plus',
        },
        {
          value: 'minus',
          label: 'Minus',
        },
      ]
    };
  },
})
