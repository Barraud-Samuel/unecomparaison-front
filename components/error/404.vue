<template>
  <div class="error-404">
    <h2>Oops</h2>
    <p>La page que vous recherchez n'est pas disponible. Elle a peut-être été effacée ou elle n\'a jamais existé.</p>
    <nuxt-link to="/">
      Retour à l'accueil
    </nuxt-link>
    <!--{{error}}-->
  </div>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
