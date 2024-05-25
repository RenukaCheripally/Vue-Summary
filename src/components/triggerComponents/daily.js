import Vue from "vue";
import { DefaultConditionComponent } from '../../mixins/conditionComponent.js';

const template = `
  <div>
    <v-input affix="prefix" @input="updateParent" v-model="localValue.time">
      <template v-slot:prefix>
        Time
      </template>
    </v-input>
  </div>
`;

Vue.component('daily', {
  template,
  mixins: [DefaultConditionComponent],
})
