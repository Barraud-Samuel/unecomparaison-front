<template>
  <div class="col-4">
    <div class="">
      <div class="card mx-auto" style="width: 18rem;">
        <a @click.prevent="showModal = true">
          <img :src="headlineProps.image" class="card-img-top">
        </a>
        <div class="card-body">
          <h6 class="card-text text-center"><a>{{headlineProps.title}}</a></h6>
        </div>
      </div>
    </div>
    <div class="modalC" v-show="showModal" :id="releaseId">
      <div class="modalC_bg"  @click.prevent="showModal = false"></div>
      <div class="modalC_content">
        <img :src="headlineProps.image" alt="">
      </div>
    </div>
  </div>
</template>




<script>
//todo faire un getter pour chopper le journal correspondant
export default {
  props:['headlineProps','releaseId'],
  data(){
    return{
      showModal:false
    }
  }
}
</script>

<style scoped lang="scss">
.card{
  width: 100%!important;
  a{
    cursor: pointer;
  }
}

  .modalC_bg{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    left: 0;
    top: 0;
    z-index: 1;
  }

  .modalC_content{
    position: fixed;
    width: 100%;
    max-width: 80%;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%,-50%);
    img{
      display: block;
      width: 100%;
    }
  }

</style>
