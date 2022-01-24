<template>
  <div v-if="cartItems.length === 0">
    Корзина пуста!
  </div>
  <div v-else>
    <div v-if="isLoading">Загрузка корзины...</div>
    <div v-else>
      <table border="2" width="100%">
        <thead>
          <tr>
            <th></th>
            <th>Наименование товара</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product of cartItemsInfo" :key="product.id">
            <td>
              <img :src="product.image" :alt="product.title">
            </td>
            <td>
              <router-link :to="{name: 'Product', params: {id: product.id}}">{{ product.title }}</router-link>
            </td>
            <td>{{ product.count }}</td>
            <td>{{ product.price }} р.</td>
            <td>{{ product.price * product.count }} р.</td>
            <td>
              <button @click="removeFromCart(product.id)">X</button>
            </td>
          </tr>
          <tr>
            <td colspan="4">Итого {{ totalCount }} товаров на сумму:</td>
            <td>{{ totalSumm }} р.</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import productsApi from '../api/products';

export default {
  name: 'Cart',
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapGetters('cart', [
      'cartItems',
      'cartItemsInfo',
      'totalSumm',
      'totalCount',
      'updateStatus',
    ]),
  },
  methods: {
    ...mapActions('cart', [
      'removeFromCart',
    ]),
    updateCardItemsInfo() {
      this.isLoading = true;
      productsApi.getItemsInfoForCart(this.cartItems).then(products => {
        this.$store.dispatch('cart/addItemsInfo', products);
        this.$store.dispatch('cart/updateSuccess');
        this.isLoading = false;
      }).catch(err => {
      // фикс для пустого ответа или ошибки
      console.log(err);
      });
    },
  },
  watch: {
    updateStatus() {
      this.updateCardItemsInfo();
    }
  },
  created() {
    const updateFlag = this.$store.getters['cart/updateStatus'];
    if (updateFlag) {
      this.updateCardItemsInfo();
    }
    else {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
