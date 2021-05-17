<template>
  <q-layout>
    <header-com />

    <q-page-container>
      <router-view />
    </q-page-container>

    <shopping-list />

    <footer-com />
  </q-layout>
</template>

<script>
import HeaderCom from "components/HeaderCom.vue";
import FooterCom from "components/FooterCom.vue";
import ShoppingList from "components/ShoppingList.vue";

export default {
  components: {
    HeaderCom,
    FooterCom,
    ShoppingList,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>