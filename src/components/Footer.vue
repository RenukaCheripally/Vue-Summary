<template>
  <div class="footer">
    <v-button class="delete-button" @click="deleteItem" buttonName="Delete" type="danger" />
    <v-button class="save-button" @click="saveItem" buttonName="Save" type="save" />
  </div>
</template>

<script>
export default {
  methods: {
    deleteItem() {
      // Add your delete logic here
    },
    saveItem() {
      // Add your save logic here
    }
  }
}
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-button,
.save-button {
  position: absolute;
  bottom: 10px;
}

.delete-button {
  left: 10px;
}

.save-button {
  right: 10px;
}
</style>