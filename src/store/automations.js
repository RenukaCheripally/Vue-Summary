import Vue, { del } from 'vue';
import Vuex from 'vuex';
import merge from 'lodash/merge';
Vue.config.devtools = true;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    newAutomation: {
      name: '',
      enabled: false,
      validFrom: '',
      validUntil: '',
      selectedTrigger: '',
      triggerDetails: {},
      maximumFrequency: {},
      appliedFilters: [
        {
          id: 1,
          filter: 'segment',
          label: 'Segment',
          value: {
            status: 'tester'
          }
        },
        {
          id: 2,
          filter: 'after_activity',
          label: 'After Activity',
          value: {
            delay: '10',
            pointChange: 'plus',
            activityCode: 'MANUAL_BOOKING'
          }
        },
        {
          id: 3,
          filter: 'email_address',
          label: 'Email Address',
          value: {
            selection: 'regex',
            expression: '*@helloagain.com'
          }
        }
      ],
      appliedActions: [
        {
          id: 1,
          action: 'send_message',
          label: 'Send Message',
          value: {
            text: 'Please make sure to attend',
            title: 'Review Meeting',
            channel: 'web_devs',
          }
        }
      ]
    },
  },
  actions: {
    updateAutomation({ commit }, value) {
      commit('setAutomation', value);
    }
  },
  mutations: {
    setAutomation(state, delta) {
      state.newAutomation = merge({}, state.newAutomation, delta);
    },
  },
  getters: {
    getAutomation(state) {
      return state.newAutomation;
    },
    getAutomationTrigger(state) {
      return state.newAutomation.triggerDetails;
    },
    getAutomationFilters(state) {
      return state.newAutomation.appliedFilters;
    },
    getAutomationActions(state) {
      return state.newAutomation.appliedActions;
    },
  }
})

export default store;