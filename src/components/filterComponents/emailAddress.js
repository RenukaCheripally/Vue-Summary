import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="localValue.selection" @input="updateParent">
      <template v-slot:prefix>
        Selection
      </template>
    </v-select>
    <v-input affix="prefix" v-model="localValue.expression" @input="updateParent">
      <template v-slot:prefix>
        Expression
      </template>
    </v-input>
  </div>
`;

Vue.component('emailAddress', {
  template,
  mixins: [DefaultConditionComponent],
  data() {
    return {
      options: [
        {
          value: 'regex',
          label: 'Contacts with an email address containing regular expression',
        },
      ]
    };
  },
})
