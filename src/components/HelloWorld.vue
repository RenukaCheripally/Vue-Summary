<template>
  <div>
    <h1>{{ header | capitalize | reverse }}</h1>
    <custom-component :counter="$store.getters.getCount"></custom-component>
    <v-button :clickButton="openAlert" buttonName="success"></v-button>
    <v-button :clickButton="openAlert" buttonName="failure"></v-button>
  </div>
</template>

<script>
import { Alert } from '../mixins/Warning.js';
export default {
  mixins: [Alert],
  data() {
    return  {
      header: 'My Sample App',
      counter: 40,
      message: 'renu'
    }
  }
}
</script>