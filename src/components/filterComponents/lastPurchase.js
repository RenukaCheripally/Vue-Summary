import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-input affix="prefix" v-model="localValue.lastPurchase" @input="updateParent">
      <template v-slot:prefix>
        Last Purchase
      </template>
    </v-input>
  </div>
`;

Vue.component('lastPurchase', {
  mixins: [DefaultConditionComponent],
  template,
})
