<template>
  <div class="container">
    <section class="errors">
      <div class="inner">
        <component :is="errorPage" :error="error" />
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Error',
    layout: 'default', // optional,
    props: {
      error: {
        type: Object,
        default: () => {
        }
      }
    },
    computed: {
      errorPage () {
        if (this.error.statusCode === 404) {
          return () => import('@/components/error/404')
        }
        // catch everything else
        return () => import('@/components/error/500')
      }
    }
  }
</script>

<style scoped>

</style>
