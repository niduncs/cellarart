<template>
  <nav :class="navClass">
    <ul class="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/pages/about">About the Artist</router-link></li>
      <li><router-link to="/pages/gallery">Gallery</router-link></li>
      <li><router-link to="/pages/exhibits">Exhibits</router-link></li>
      <li><router-link to="/pages/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      navClass: String,
    }
  }
</script>