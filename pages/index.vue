<template>
  <div class="mt-5">
    <Journals/>
    <section v-for="releaseByDate in releases" :key="releaseByDate.id">
      <div class="date text-center mt-5">
        <span>{{getHumanDate(releaseByDate._id)}}</span>
        <hr class="mt-0">
        <div class="container">
          <div class="row mt-2" >
            <Headline 
            v-for="release in releaseByDate.releases" 
            :key="release.id"
            :headlineProps="release"
            />
          </div>
        </div>
      </div>
    </section>
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
    await store.dispatch('releases/fetchReleases');
  },
  computed: {
    ...mapState('releases', ['releases']),
    ...mapGetters('releases',['blueCars']),
    getJournal(){
      return this.$store.getters['releases/blueCars']('Le figaro');
    }
  },
  methods:{
    getHumanDate(timestamp){
      return moment.unix(timestamp).format("YYYY-MM-DD HH:mm");
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
}
.row{
  width: 100%;
}

.date hr{
  margin-top:0;
}
</style>
