<template>
  <card>
    <header>
      <h1>Create Automated Action</h1>
    </header>
    <content class="content">
      <section class="section main">
        <div class="container">
          <span class="label">Name:</span>
          <v-input placeholder="Enter Name" />
        </div>
        <v-checkbox value="true" />
        <div class="validity">
          <v-input label="Valid from" affix="suffix">
            <template v-slot:suffix>
              ✖
            </template>
          </v-input>
          <v-input label="Valid until" affix="suffix">
            <template v-slot:suffix>
              ✖
            </template>
          </v-input>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="label">Trigger: </span>
          <TriggerMain />
        </div>
        <div class="container">
          <span class="label">Maximum Frequency:</span>
          <div class="frequency-selection">
            <v-checkbox label="Only once" />
            <v-input affix="suffix">
              <template v-slot:suffix>days</template>
            </v-input>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="">
          <span class="label header">Filter conditions:</span>
          <FilterMain />
        </div>
      </section>
      <section class="section">
        <div class="container">
          <span class="label">Actions:</span>
        </div>
      </section>
    </content>
    <Footer />
  </card>
</template>
<script>
import Footer from '@/components/Footer'
import TriggerMain from '../components/triggerComponents/TriggerMain.vue';
import FilterMain from '../components/filterComponents/FilterMain.vue';
export default {
  name: 'AutomationView',
  components: {
    Footer,
    TriggerMain,
    FilterMain
  },
  data() {
    return {
    }
  }
}
</script>
