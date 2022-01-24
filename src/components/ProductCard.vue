<template>
  <div class="card">
    <div>
      <router-link :to="{name: 'Product', params: {id}}">{{ title }}</router-link>
    </div>
    <div>
      <img :src="image" :alt="title">
    </div>
    <div>{{ price }}</div>
    <div>
      <BuyButton :id="id" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BuyButton from './BuyButton';

export default {
  name: 'ProductCard',
  props: {
    title: String,
    price: Number,
    image: String,
    id: Number,
  },
  methods: {
    ...mapActions('cart', [
      'addToCart'
    ]),
  },
  components: {
    BuyButton,
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 5px;
}

.btn {
  display: block;
  width: 100%;
  margin: 10px 0px;
  padding: 10px 20px;
  background-color: rgb(44, 55, 151);
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
}
</style>
