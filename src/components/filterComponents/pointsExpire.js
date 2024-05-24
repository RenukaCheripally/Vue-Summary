import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-input affix="prefix" v-model="localValue.points" @input="updateParent">
      <template v-slot:prefix>
        Points
      </template>
    </v-input>
    <v-input affix="prefix" v-model="localValue.expiryYear" @input="updateParent">
      <template v-slot:prefix>
        Expiry year
      </template>
    </v-input>
  </div>
`;

Vue.component('pointsExpire', {
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
