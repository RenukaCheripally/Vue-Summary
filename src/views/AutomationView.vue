<template>
  <card>
    <header class="main-header">
      <h1>Create Automated Action</h1>
    </header>
    <content class="content">
      <section class="section main">
        <div class="container name">
          <span class="label">Name:</span>
          <v-input placeholder="Enter Name" v-model="localData.name" @input="updateAutomation({name: localData.name})" />
        </div>
        <v-checkbox v-model="localData.enabled" @input="updateAutomation({enabled: localData.enabled})" />
        <div class="validity">
          <v-input label="Valid from" affix="suffix" type="secondary" v-model="localData.validFrom" @input="updateAutomation({validFrom: localData.validFrom})">
            <template v-slot:suffix>
              ✖
            </template>
          </v-input>
          <v-input label="Valid until" affix="suffix" type="secondary" v-model="localData.validUntil" @input="updateAutomation({validUntil: localData.validUntil})">
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
            <v-checkbox label="Only once" v-model="localData.maximumFrequency.onlyOnce" @input="updateAutomation({maximumFrequency: localData.maximumFrequency})" />
            <v-input affix="suffix" v-model.number="localData.maximumFrequency.days" @input="updateAutomation({maximumFrequency: localData.maximumFrequency})">
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
import { mapGetters, mapActions } from 'vuex';
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
      localData: {
        maximumFrequency: {
          onlyOnce: false,
          days: null
        }
      }
    }
  },
  methods: {
    ...mapActions(['updateAutomation']),
  }
}
</script>
