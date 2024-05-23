<template>
  <div>
    <div class="filters-applied" v-if="appliedFilters.length > 0">
      <div v-for="filter in appliedFilters" :key="filter.id">
        <div class="container">
          <span class="label">{{ filter.label }}</span>
          <component :is="components[filter.filter]" :value="filter.value" />
          <v-button
            v-if="components[filter.filter] !== undefined"
            buttonName="Delete"
            type="danger"
            :clickButton="deleteFilter"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <v-select :options="options" v-model="selectedFilter" />
      <component :is="components[selectedFilter]" :value="objects[segment]"></component>
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
      components: {
        segment: 'segment',
        email_address: 'emailAddress',
        after_activity: 'afterActivity'
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
          value: 'segment',
          label: 'Segment',
        },
        {
          value: 'email_address',
          label: 'Email Address'
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
    addFilter() {
      console.log(this.objects)
      this.appliedFilters.push({
        id: this.appliedFilters.length + 1,
        filter: this.selectedFilter,
        label: this.options.find(option => option.value === this.selectedFilter).label,
        value: this.objects[this.selectedFilter]
      })
    },
    deleteFilter() {
      this.appliedFilters.pop();
    }
  }
}
</script>

