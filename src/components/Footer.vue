<template>
  <div class="footer">
    <v-button class="delete-button" :clickButton="deleteAutomation" buttonName="Delete" type="danger" />
    <v-button class="save-button" :clickButton="saveAutomation" buttonName="Save" type="save" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getAutomation'])
  },
  methods: {
    ...mapActions(['resetAutomation']),
    saveAutomation() {
      console.log(this.getAutomation);
    },
    deleteAutomation() {
      this.resetAutomation();
    }
  }
}
</script>

<style>
.footer {
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--gray-light);
}
</style>