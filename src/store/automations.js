import Vue from 'vue';
import Vuex from 'vuex';
import merge from 'lodash/merge';
Vue.config.devtools = true;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    initalAutomation: {
      name: '',
      enabled: false,
      validFrom: '',
      validUntil: '',
      selectedTrigger: 'select',
      triggerDetails: {},
      maximumFrequency: {},
      appliedFilters: [],
      appliedActions: []
    },
    newAutomation: {
      name: 'designers feature',
      enabled: true,
      validFrom: '6th aug 2024',
      validUntil: '6th aug 2028',
      selectedTrigger: 'scheduled_time',
      triggerDetails: {
        time: '9:00pm',
        frequency: 'daily'
      },
      maximumFrequency: {
        onlyOnce: true,
        days: 10
      },
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
    },
    resetAutomation({ commit }) {
      commit('resetAutomation');
    }
  },
  mutations: {
    setAutomation(state, delta) {
      state.newAutomation = merge({}, state.newAutomation, delta);
    },
    resetAutomation(state) {
      state.newAutomation = state.initalAutomation;
    },
  },
  getters: {
    getAutomation(state) {
      return state.newAutomation;
    },
    getInitialAutomation(state) {
      return state.initalAutomation;
    },
    getAutomationName(state) {
      return state.newAutomation.name;
    },
    getAutomationSelectedTrigger(state) {
      return state.newAutomation.selectedTrigger !== '' ? state.newAutomation.selectedTrigger : 'select';
    },
    getAutomationTriggerDetails(state) {
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