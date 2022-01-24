<template>
  <button v-if="!inCart" class="add" @click="addToCart(id)">Добавить</button>
  <button v-else class="remove" @click="removeFromCart(id)">Убрать</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BuyButton',
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters('cart', [
      'alreadyInCart'
    ]),
    inCart() {
      return this.alreadyInCart(this.id);
    }
  },
  methods: {
    ...mapActions('cart', [
      'addToCart',
      'removeFromCart'
    ]),
  },
}
</script>

<style scoped lang="scss">
@mixin btn($color) {
  font-size: 12px;
  display: block;
  width: 100%;
  margin: 10px 0px;
  padding: 10px 20px;
  background-color: $color;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
}
.add {
  @include btn(rgb(40, 89, 196));
}
.remove {
  @include btn(rgb(40, 196, 105));
}
</style>
