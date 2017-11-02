<template>
  <div class="page-content">
    <header-main header-class="layout-header"></header-main>
    <main class="layout-content-wrapper">
      <navigation nav-class="layout-navigation"></navigation>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import headerMain from './headerMain.vue';
  import navigation from './navigation.vue';

  export default {
    data() {
      return {
        page: this.$route.meta.pageName,
      }
    },
    watch: {
      '$route' (to, from) {
        this.setPageClass(from.meta.pageName, to.meta.pageName);
      }
    },
    components: {
      headerMain,
      navigation,
    },
    methods: {
      setPageClass: function(from, to) {
        document.getElementsByClassName(from)[0].className = to;
      }
    },
    mounted() {
      this.setPageClass("page-content", this.page);
    }
  }
</script>