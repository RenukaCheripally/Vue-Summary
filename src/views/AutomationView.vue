<template>
  <card>
    <header class="main-header">
      <h1>Create Automated Action</h1>
    </header>
    <content class="content">
      <section class="section main">
        <div class="container name">
          <span class="label">Name:</span>
          <v-input placeholder="Enter Name" />
        </div>
        <v-checkbox :value="true" />
        <div class="validity">
          <v-input label="Valid from" affix="suffix" type="secondary">
            <template v-slot:suffix>
              ✖
            </template>
          </v-input>
          <v-input label="Valid until" affix="suffix" type="secondary">
            <template v-slot:suffix>
              ✖
            </template>
          </v-input>
        </div>
      </section>
      <section class="section">
        <div class="container trigger">
          <span class="label">Trigger: </span>
          <TriggerMain />
        </div>
        <div class="container trigger-frequency">
          <span class="label">Maximum Frequency:</span>
          <div class="frequency">
            <v-checkbox label="Only once" :value="false"/>
            <v-input affix="suffix">
              <template v-slot:suffix>days</template>
            </v-input>
          </div>
        </div>
      </section>
      <section class="section">
        <span class="label section-header">Filter conditions:</span>
        <FilterMain />
      </section>
      <section class="section">
        <span class="label section-header">Actions:</span>
        <ActionsMain />
      </section>
    </content>
    <Footer />
  </card>
</template>
<script>
import Footer from '@/components/Footer'
import TriggerMain from '../components/triggerComponents/TriggerMain.vue';
import FilterMain from '../components/filterComponents/FilterMain.vue';
import ActionsMain from '../components/actionComponents/ActionsMain.vue';
export default {
  name: 'AutomationView',
  components: {
    Footer,
    TriggerMain,
    FilterMain,
    ActionsMain
  },
  data() {
    return {
      name: '',
      validFrom: '',
      validUntil: '',
      days: ''
    }
  }
}
</script>
