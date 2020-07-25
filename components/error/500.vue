<template>
  <div class="error-500">
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
