<template>
  <div class="filters">
    <div class="filters-applied" v-if="getAutomationFilters.length > 0">
      <div v-for="(filter, filterIndex) in getAutomationFilters" :key="filter.id">
        <div class="container">
          <span class="label">{{ filter.label }}</span>
          <component :is="components[filter.filter]" :value="filter.value" />
          <v-button v-if="components[filter.filter] !== undefined" buttonName="Delete" type="delete"
            :clickButton="() => deleteFilter(filterIndex)" />
        </div>
      </div>
    </div>
    <div class="container">
      <v-select type="secondary" class="filter-condition" :options="options" v-model="selectedFilter"
        :value="selectedFilter" @input="handleSelect" />
      <component :is="components[selectedFilter]" :value="newFilter" @update="handleUpdate" />
      <v-button v-if="components[selectedFilter] !== undefined" :clickButton="addFilter" buttonName="Add" type="save" />
    </div>
  </div>
</template>

<script>
import '@/assets/filters.css';
import { mapGetters, mapActions } from 'vuex';
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
      ]
    }
  },
  computed: {
    ...mapGetters(['getAutomationFilters']),
  },
  methods: {
    ...mapActions(['updateAutomation']),
    // methods
    handleUpdate(updatedData) {
      this.newFilter = updatedData;
    },
    handleSelect() {
      this.newFilter = {};
    },
    addFilter() {
      // get existing filters
      const appliedFilters = this.getAutomationFilters;
      // add new filter
      appliedFilters.push({
        id: this.getAutomationFilters.length + 1,
        filter: this.selectedFilter,
        label: this.options.find(option => option.value === this.selectedFilter).label,
        value: this.newFilter
      });
      // update filters
      this.updateAutomation({ appliedFilters });
      // reset
      this.resetFilter();
    },
    deleteFilter(filterIndex) {
      // get existing filters
      const appliedFilters = this.getAutomationFilters;
      // delete filter based on index
      appliedFilters.splice(filterIndex, 1);
      // update filters
      this.updateAutomation({ appliedFilters });
    },
    resetFilter() {
      // reset selected filter
      this.selectedFilter = 'add';
      // reset filter
      this.newFilter = {};
    }
  }
}
</script>
