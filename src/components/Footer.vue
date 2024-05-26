<template>
  <div class="footer">
    <v-button class="delete-button" :clickButton="deleteAutomation" buttonName="Delete" type="danger">
      <img class="image" src="../assets/images/delete.svg" />
    </v-button>
    <v-button class="save-button" :clickButton="saveAutomation" buttonName="Save" type="save">
      <img class="image" src="../assets/images/save.svg" />
    </v-button>
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
.delete-svg {
  color: red;
}

</style>