<template>
  <header :class="headerClass">
    <h1>Dale Duncan</h1>
    <span class="sub-text">Art You Can Live With</span>
  </header>
</template>

<<script>
export default {
  props: {
    headerClass: String,
  }
}
</script>

