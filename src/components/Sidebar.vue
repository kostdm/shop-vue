<template>
  <ul>
    <li>
      <router-link to="/products">Список товаров</router-link>
    </li>
    <li>
      <router-link to="/cart">Корзина</router-link>
    </li>
    <li>
      <router-link to="/checkout">Оформить заказ</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped lang="scss">

</style>
