<template>
  <div v-if="cartEmpty">
    корзина пуста выберите товары!
  </div>
  <div v-else>
    <h1>Оформление заказа</h1>
    <div>
      <div>
        <label for="field-name">Имя</label>
        <input type="text" id="field-name">
      </div>
      <div>
        <label for="field-tel">Телефон</label>
        <input type="tel" id="field-tel">
      </div>
      <div>
        <label for="field-mail">Почта</label>
        <input type="email" id="field-mail">
      </div>
      <div>
        <label for="field-city">Город</label>
        <select id="field-city">
          <option value="1" selected>Москва</option>
          <option value="2">Екатеринбург</option>
          <option value="3">Санкт-Петербург</option>
        </select>
      </div>
      <div>
        <label for="field-address">Адрес</label>
        <input type="text" id="field-address">
      </div>
      <div>
        <label for="field-agree">Согласен на обработку персональных данных</label>
        <input type="checkbox" id="field-agree" v-model="agreeStatus">
      </div>
    </div>
    <button :disabled="!agreeStatus">Оформить</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Checkout',
  data() {
    return {
      agreeStatus: false,
    };
  },
  computed: {
    ...mapGetters('cart', [
        'cartItems',
    ]),
    cartEmpty() {
      return this.cartItems.length === 0;
    },
  }
}
</script>

<style scoped lang="scss">

</style>
