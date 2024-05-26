<template>
  <div class="triggers">
    <v-select class="column1" placeholder="Enter Name" :options="options" v-model="selectedTrigger" @input="handleSelect" />
    <component class="column3" :is="components[selectedTrigger]" :value="newTrigger" @update="handleUpdate" />
  </div>
</template>

<script>
import '@/assets/triggers.css'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'TriggerMain',
  data() {
    return {
      components: {
        scheduled_time: 'schedule',
        daily: 'daily'
      },
      options: [
        {
          value: 'select',
          label: 'Select'
        },
        {
          value: 'daily',
          label: 'Daily'
        },
        {
          value: 'scheduled_time',
          label: 'Scheduled (time)',
          component: 'schedule'
        },
        {
          value: 'points',
          label: 'Points changed'
        },
        {
          value: 'manual_booking',
          label: 'Manual Booking'
        },
        {
          value: 'rewards_redeemed',
          label: 'Rewards Redeemed'
        },
        {
          value: 'sweepstake',
          label: 'Participated in sweepstake'
        },
        {
          value: 'check_in',
          label: 'Check-in'
        },
        {
          value: 'purchase_redeemed',
          label: 'Purchase Redeemed'
        },
        {
          value: 'coupon_redeemed',
          label: 'Coupon Redeemed'
        }
      ],
    }
  },
  created() {
    this.newTrigger = this.getAutomationTriggerDetails;
  },
  computed: {
    ...mapGetters(['getAutomationTriggerDetails', 'getAutomationSelectedTrigger']),
    selectedTrigger: {
      get() {
        return this.getAutomationSelectedTrigger;
      },
      set(newValue) {
        this.updateAutomation({selectedTrigger: newValue})
      }
    },
    newTrigger: {
      get() {
        return this.getAutomationTriggerDetails;
      },
      set(newValue) {
        this.updateAutomation({triggerDetails: newValue})
      }
    }
  },
  methods: {
    ...mapActions(['updateAutomation']),
    // methods
    handleUpdate(updatedData) {
      // update store
      this.updateAutomation({triggerDetails: updatedData});
      // assign data
      this.newTrigger = updatedData;
    },
    handleSelect(value) {
      // update store
      this.updateAutomation({selectedTrigger: value});
      // refresh trigger details on change of selection
      this.newTrigger = {};
    }
  }
}
</script>
