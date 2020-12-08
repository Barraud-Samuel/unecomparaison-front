<template>
  <div class="mt-5">
    <Journals/>
    <section v-for="releaseByDate in releases.releases" :key="releaseByDate.id">
      <div class="date text-center mt-5">
        <span>{{getHumanDate(releaseByDate._id)}}</span>
        <hr class="mt-0">
        <div class="container">
          <div class="row mt-2" >
            <Headline
            v-for="release in releaseByDate.releases"
            :key="release.id"
            :releaseId="release.id"
            :headlineProps="release"
            />
          </div>
        </div>
      </div>
    </section>
    <no-ssr>
    <infinite-loading
      spinner="spiral"
      @infinite="infiniteScroll"
    ></infinite-loading>
      </no-ssr>
  </div>
</template>

<script>
import moment from 'moment'
import {  mapState,mapActions,mapGetters  } from 'vuex';
import Headline from '@/components/headline'
import Journals from '@/components/journals'

export default {
  components:{
    Headline,
    Journals
  },
  async fetch({store,error}){
    try {
      await store.dispatch('releases/fetchReleases');
    } catch (err) {
      return error({ statusCode: err.response.status, message: err.message })
    }
  },
  computed: {
    ...mapState('releases', ['releases']),
    ...mapGetters('releases',['blueCars']),
    getJournal(){
      return this.$store.getters['releases/blueCars']('Le figaro');
    },
    currentPage() {
      return this.releases.currentPage + 1;
    },
    TotalPages() {
      return this.releases.totalPages;
    },
  },
  methods:{
    getHumanDate(timestamp){
      return moment.unix(timestamp).format("YYYY-MM-DD HH:mm");
    },
    infiniteScroll($state){
      console.log("flmsqkdjfdqmlfjkf")
      setTimeout(() => {
        if (this.currentPage <= this.TotalPages){
          this.$store.dispatch('releases/fetchNextPagesReleases', this.currentPage).then(()=>{
            $state.loaded();
          });
        }else{
          $state.complete();
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  max-width: 100%;
}
.row{
  width: 100%;
}

.date hr{
  margin-top:0;
}
</style>
