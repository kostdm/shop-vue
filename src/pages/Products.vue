<template>
  <div v-if="loadingStatus">
    Loading...
  </div>
  <div v-else-if="!loadingStatus" class="list">
    <ProductCard v-for="product of allProducts"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
      :id="product.id"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '../components/ProductCard';

export default {
  name: 'Products',
  computed: {
    ...mapGetters('products', [
      'allProducts',
      'loadingStatus',
    ]),
  },
  created() {
    this.$store.dispatch('products/loadProducts');
  },
  components: {
    ProductCard,
  }
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>