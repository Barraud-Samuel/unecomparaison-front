<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="journal in journals" :key="journal.id">
        <p class="text-center font-weight-bold"><u>{{journal.name}}</u></p>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState,mapActions,mapGetters  } from 'vuex';

export default {
  name:'Journals',
  computed:{
    ...mapState('journals', ['journals']),
  },
  methods:{
    async fetchJournals(){
      try {
        await this.$store.dispatch('journals/fetchJournals');
      } catch (err) {
        return this.$nuxt.error({ statusCode: err.response.status, message: err.message })
      }
    }
  },
  mounted(){
    this.fetchJournals()
  }
}
</script>

<style scoped lang="scss">
.row{
  width: 100%;
}
  p{
    font-size: 22px;
  }
</style>
