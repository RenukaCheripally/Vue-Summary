<template>
  <div class="frequency-selection">
    <v-select placeholder="Enter Name" :options="options" v-model="selectedTrigger" />
    <component :is="components[selectedTrigger]"></component>
  </div>
</template>

<script>
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
      selectedTrigger: 'select'
    }
  }
}
</script>
