<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="journal in journals" :key="journal.id">
        <p class="text-center">{{journal.name}}</p>
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
      await this.$store.dispatch('journals/fetchJournals');
      
    }
  },
  mounted(){
    this.fetchJournals()
  }
}
</script>

<style>
.row{
  width: 100%;
}
</style>