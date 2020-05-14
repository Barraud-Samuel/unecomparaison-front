<template>
      <div class="col-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img :src="headlineProps.image" class="card-img-top">
          <div class="card-body">
            <h6 class="card-text text-center">{{headlineProps.title}}</h6>
          </div>
        </div>
      </div>
</template>




<script>
export default {
  props:['headlineProps']
}
</script>

<style scoped>
.card{
  width: 100%!important;
}
</style>