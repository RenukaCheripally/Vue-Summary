import Vue from "vue";

const template = `
  <div>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="selection">
      <template v-slot:prefix>
        Selection
      </template>
    </v-select>
    <v-input affix="prefix" v-model="expression" value="expression">
      <template v-slot:prefix>
        Expression
      </template>
    </v-input>
  </div>
`;

Vue.component('emailAddress', {
  template,
  props: {
    value: {
      type: Object,
    }
  },
  created() {
    if (this.value) {
      const { selection, expression } = this.value;
      this.selection = selection;
      this.expression = expression;
    }
  },
  data() {
    return {
      selection: '',
      expression: '',
      options: [
        {
          value: 'regex',
          label: 'Contacts with an email address containing regular expression',
        },
      ]
    };
  },
})
