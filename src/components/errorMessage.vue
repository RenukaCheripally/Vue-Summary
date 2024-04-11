<template>
  <p>{{ message }}</p>
</template>

<script>
import {commonLogic} from './compositionBaseLogic.js'
export default {
  setup() {
    return commonLogic();
  }
}
</script>