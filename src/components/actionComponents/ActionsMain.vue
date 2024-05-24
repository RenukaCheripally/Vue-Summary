<template>
  <div>
    <section class="actions-applied" v-if="appliedActions.length > 0">
      <div v-for="filter in appliedActions" :key="filter.id">
        <div class="applied-action-container">
          <header class="action-header">
            <span class="label">{{ filter.label }}</span>
            <v-button
              v-if="components[filter.filter] !== undefined"
              buttonName="Delete"
              type="danger"
              :clickButton="deleteFilter"
            />
          </header>
          <div class="action-content">
            <component :is="components[filter.filter]" :value="filter.value" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <v-select :options="options" v-model="selectedFilter" />
      <div v-if="!['add', undefined].includes(selectedFilter) && components[selectedFilter] !== undefined" class="applied-action-container">
        <header class="action-header">
          <span class="label">{{ selectedFilter }}</span>
          <v-button
            v-if="components[selectedFilter] !== undefined"
            :clickButton="addFilter"
            buttonName="Add"
            type="save"
          />
        </header>
        <div class="action-content">
          <component :is="components[selectedFilter]" :value="objects[segment]"></component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/actions.css'
export default {
  name: 'ActionsMain',
  data() {
    return {
      components: {
        send_message: 'sendMessage',
      },
      objects: {
        segment: {
          status: '',
        }
      },
      selectedFilter: 'add',
      options: [
        {
          value: 'add',
          label: 'Add Condition'
        },
        {
          value: 'send_message',
          label: 'Send message',
        },
        {
          value: 'award_points',
          label: 'Award points',
        },
        {
          value: 'set_status',
          label: 'Set status',
        },
        {
          value: 'request_user_rating',
          label: 'Request user rating',
        },
        {
          value: 'free_redemption',
          label: 'Free Redemption',
        },
      ],
      appliedActions: [
        {
          id: 1,
          filter: 'send_message',
          label: 'Send Message',
          value: {
            delay: '10',
            pointChange: 'plus',
            activityCode: 'MANUAL_BOOKING'
          }
        }
      ]
    }
  },
  methods: {
    addFilter() {
      console.log(this.objects)
      this.appliedActions.push({
        id: this.appliedActions.length + 1,
        filter: this.selectedFilter,
        label: this.options.find(option => option.value === this.selectedFilter).label,
        value: this.objects[this.selectedFilter]
      })
    },
    deleteFilter() {
      this.appliedActions.pop();
    }
  }
}
</script>

