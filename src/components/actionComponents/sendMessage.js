import Vue from "vue";

const template = `
  <div class="send-message">
    <div class="input-list">
      <div class="container">
        <span class="label">Channel: </span>
        <v-select placeholder="Enter Name" :options="options" v-model="selection" />
      </div>
      <v-input label="Message Title" placeholder="Message Title" />
      <v-input label="Text" placeholder="Text" />
      <div>
        <p>{{ line1 }}</p>
        <p>{{ line2 }}</p>
      </div>
      <div>
        <p>The following variables are available:</p>
        <ul v-for="variable in variables" :key="variable.key">
          <li>{{ variable.label }}</li>
        </ul>
      </div>
    </div>
  </div>
`;

Vue.component('sendMessage', {
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
      line1: 'It is possible to insert certain variables into the text which get replaced.',
      line2: 'Variables are declared with {{ and }} (e.g.{{ first_name }}).',
      variables: [
        {
          label: '{{year}} (e.g. 2024)',
          key: 'year',
        },
        {
          label: '{{first_name}} (e.g. Gerhard)',
          key: 'first_name',
        },
        {
          label: '{{last_name}} (e.g. Baumann)',
          key: 'last_name',
        },
        {
          label: '{{name}} (e.g. Gerhard Baumann)',
          key: 'name',
        },
        {
          label: '{{points}} (e.g. 15)',
          key: 'points',
        },
        {
          label: '{{age}} (e.g. 40)',
          key: 'age',
        }
      ],
      selection: '',
      expression: '',
      options: [
        {
          value: 'web_devs',
          label: 'Web Devs',
        },
        {
          value: 'designers',
          label: 'Designers',
        },
        {
          value: 'marketing',
          label: 'Marketing',
        }
      ]
    };
  },
})
