export const state = ()=>({
  journals:[]
});

/* export const getters = {

} */

export const mutations = {
  SET_JOURNALS(state,value){
    state.journals = value
  }
}

export const actions = {
  async fetchJournals({commit}){
    console.log('journal');
    
    await this.$axios.get('/journals')
    .then((res)=>{
      console.log(res);
      
      commit('SET_JOURNALS',res.data)
    })
    .catch((err)=>{
      throw err;
    })
  }
}