<template>
      <div class="col-4">
        <div class="card mx-auto" style="width: 18rem;">
          <a :href="headlineProps.image" target="_blank">
            <img :src="headlineProps.image" class="card-img-top">
          </a>
          <div class="card-body">
            <h6 class="card-text text-center"><a>{{headlineProps.title}}</a></h6>
          </div>
        </div>
      </div>
</template>




<script>
//todo faire un getter pour chopper le journal correspondant
export default {
  props:['headlineProps']
}
</script>

<style scoped>
.card{
  width: 100%!important;
}
</style>