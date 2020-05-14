export const state = ()=>({
  releases:[]
});

//getters filtere les releases a travers les journaux
export const getters= {
  blueCars: state => (arg)=> {
    return state.releases.filter(release => release.journal.name === arg)
  }
} 

export const mutations = {
  SET_RELEASES(state,value){
    console.log(value);
    console.log("----------------");
    state.releases = value
    console.log(state.releases);
  }
}

export const actions = {
  async fetchReleases({commit}){
    await this.$axios.get('/releases')
    .then((res)=>{
      commit('SET_RELEASES',res.data)
    })
    .catch((err) => {
      throw err;
    });
  }
}