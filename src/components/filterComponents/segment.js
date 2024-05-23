import Vue from "vue";

const template = `  <div>
<v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="status">
  <template v-slot:prefix>
    Status
  </template>
</v-select>
</div>`;

Vue.component('segment', {
  template,
  props: {
    value: {
      type: Object,
    },
  },
  created() {
    if (this.value) {
      const { status } = this.value;
      this.status = status;
    }
  },
  data() {
    return {
      status: '',
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
