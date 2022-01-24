<template>
  <div>
    <button>-</button>
    <input type="number" :value="count">
    <button>+</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BuyButton',
  props: {
    id: Number,
    count: Number,
  },
}
</script>

<style scoped lang="scss">

</style>
