<template>
  <div class="triggers">
    <v-select class="column1" placeholder="Enter Name" :options="options" v-model="selectedTrigger" @input="handleSelect" />
    <component class="column3" :is="components[selectedTrigger]" :value="newTrigger" @update="handleUpdate" />
  </div>
</template>

<script>
import '@/assets/triggers.css'
export default {
  name: 'TriggerMain',
  data() {
    return {
      newTrigger: {},
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
      selectedTrigger: 'select'
    }
  },
  methods: {
    handleUpdate(updatedData) {
      this.newTrigger = updatedData;
    },
    handleSelect() {
      this.newTrigger = {};
    }
  }
}
</script>
