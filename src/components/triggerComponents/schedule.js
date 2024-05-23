import Vue from "vue";

const template = `  <div>
<v-input affix="prefix">
  <template v-slot:prefix>
    Time
  </template>
</v-input>
<v-select placeholder="Enter Name" :options="options" affix="prefix">
  <template v-slot:prefix>
    Frequency
  </template>
</v-select>
</div>`;

Vue.component('schedule', {
  template,
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
