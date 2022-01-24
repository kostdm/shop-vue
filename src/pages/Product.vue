<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div>{{ productInfo.id }}</div>
    <div>{{ productInfo.title }}</div>
    <div>{{ productInfo.price }}</div>
    <div>
      <img :src="productInfo.image" :alt="productInfo.title">
    </div>
  </div>
</template>

<script>
import productsApi from '../api/products';

export default {
  name: 'Product',
  data() {
    return {
      productInfo: null,
      isLoading: true,
    };
  },
  created() {
    this.$data.isLoading = true;
    productsApi.getOne(parseInt(this.$route.params.id)).then((product) => {
      if (product.title) {
        this.$data.productInfo = product;
        this.$data.isLoading = false;
      } else {
        this.$router.push({ name: 'Error404' });  
      }
    }).catch(() => {
      this.$router.push({ name: 'Error404' });
    });
  }
}
</script>

<style scoped lang="scss">

</style>
