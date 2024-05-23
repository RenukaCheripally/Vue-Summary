import Vue from "vue";

const template = `
  <div>
    <v-input affix="presuffix" v-model="delay">
      <template v-slot:prefix>
        Delay
      </template>
      <template v-slot:suffix>
        Days
      </template>
    </v-input>
    <v-select placeholder="Enter Name" :options="options" affix="prefix" v-model="pointChange">
      <template v-slot:prefix>
        Point change
      </template>
    </v-select>
    <v-input affix="prefix" v-model="activityCode">
      <template v-slot:prefix>
        Activity code
      </template>
    </v-input>
  </div>
`;

Vue.component('afterActivity', {
  template,
  props: {
    value: {
      type: Object,
    }
  },
  created() {
    if (this.value) {
      const { delay, pointChange, activityCode } = this.value;
      this.delay = delay;
      this.pointChange = pointChange;
      this.activityCode = activityCode;
    }
  },
  data() {
    return {
      delay: 0,
      pointChange: '',
      activityCode: '',
      options: [
        {
          value: 'plus',
          label: 'Plus',
        },
      ]
    };
  },
})
