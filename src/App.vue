<template>
  <div class="grid">
    <div>logo</div>
    <div>
      <h1>Shop</h1>
    </div>
    <div>cart</div>
    <div>
      <Sidebar/>
    </div>
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}
</style>

<style scoped lang="scss">
.grid {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: auto;
}
.page {
  grid-column: 2/4;
}
</style>
