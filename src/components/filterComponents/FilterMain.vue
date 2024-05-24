<template>
  <div>
    <div class="filters-applied" v-if="appliedFilters.length > 0">
      <div v-for="(filter, filterIndex) in appliedFilters" :key="filter.id">
        <div class="container">
          <span class="label">{{ filter.label }}</span>
          <component :is="components[filter.filter]" :value="filter.value" />
          <v-button
            v-if="components[filter.filter] !== undefined"
            buttonName="Delete"
            type="danger"
            :clickButton="() => deleteFilter(filterIndex)"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <v-select :options="options" v-model="selectedFilter" :value="selectedFilter" />
      <component :is="components[selectedFilter]" :value="newFilter" @update="handleUpdate" />
      <v-button
        v-if="components[selectedFilter] !== undefined"
        :clickButton="addFilter"
        buttonName="Add"
        type="save"
      />
    </div>
  </div>
</template>

<script>
import '@/assets/filters.css'
export default {
  name: 'FilterMain',
  data() {
    return {
      newFilter: {},
      components: {
        segment: 'segment',
        email_address: 'emailAddress',
        after_activity: 'afterActivity',
        last_purchase: 'lastPurchase',
        points_expire: 'pointsExpire'
      },
      selectedFilter: 'add',
      options: [
        {
          value: 'add',
          label: 'Add Condition'
        },
        {
          value: 'activity',
          label: 'Activity',
        },
        {
          value: 'inactivity',
          label: 'Inactivity',
        },
        {
          value: 'birthday',
          label: 'Birthday',
        },
        {
          value: 'points_between',
          label: 'Points Between',
        },
        {
          value: 'last_purchase',
          label: 'Last Purchase',
        },
        {
          value: 'after_registration',
          label: 'After Registration',
        },
        {
          value: 'segment',
          label: 'Segment',
        },
        {
          value: 'favourite_reward',
          label: 'Favourite Reward',
        },
        {
          value: 'email_address',
          label: 'Email Address'
        },
        {
          value: 'points_expire',
          label: 'Points Expire',
        },
        {
          value: 'custom_user_field',
          label: 'Custom User Field',
        },
        {
          value: 'after_activity',
          label: 'After Activity'
        }
      ],
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
      ]
    }
  },
  methods: {
    handleUpdate(updatedData) {
      this.newFilter = updatedData;
    },
    addFilter() {
      this.appliedFilters.push({
        id: this.appliedFilters.length + 1,
        filter: this.selectedFilter,
        label: this.options.find(option => option.value === this.selectedFilter).label,
        value: this.newFilter
      })
      console.log(this.appliedFilters);
      this.resetFilter();
    },
    deleteFilter(filterIndex) {
      this.appliedFilters.splice(filterIndex, 1);
    },
    resetFilter() {
      this.selectedFilter = 'add';
      this.newFilter = {};
    }
  }
}
</script>

