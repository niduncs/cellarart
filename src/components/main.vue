<template>
  <div>
    <navigation nav-class="main-navigation"></navigation>
    <main class="main-header">
      <header-main header-class="main-header-inner"></header-main>
    </main>
  </div>
</template>

<script>
  import headerMain from './headerMain.vue';
  import navigation from './navigation.vue';

  export default {
    data: () => {
      return {};
    },
    components: {
      headerMain,
      navigation,
    }
  }
</script>