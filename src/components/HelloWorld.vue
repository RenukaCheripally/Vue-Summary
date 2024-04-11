<template>
  <div>
    <h1>{{ header | capitalize | reverse }}</h1>
    <h2>{{ getCounter }}</h2>
    <custom-component :counter="$store.getters.getCount">
      <template v-slot:header>
        <h1 class="header">My APP</h1>
      </template>
      <template v-slot:footer="{message1}">
        <h2 class="header">{{ message1 }}</h2>
      </template>
    </custom-component>
    <v-button :clickButton="openAlert" buttonName="success"></v-button>
    <v-button :clickButton="openAlert" buttonName="failure"></v-button>
  </div>
</template>

<script>
import { Alert } from '../mixins/Warning.js';
import {mapGetters} from 'vuex';
export default {
  mixins: [Alert],
  computed:{
    ...mapGetters(['getCount', 'getCounter'])
  },
  data() {
    return  {
      header: 'My Sample App',
      counter: 40,
      message: 'renu'
    }
  }
}
</script>