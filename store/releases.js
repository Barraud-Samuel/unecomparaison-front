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
    state.releases = value
    console.log(state.releases);
  },
  ADD_RELEASES(state,value){
    state.releases.releases.push(...value.releases)
    state.releases.currentPage = value.currentPage
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
      console.log(err)
    });
  },
  async fetchNextPagesReleases({commit},page){
    await this.$axios.get('/releases?page='+page)
      .then((res)=>{
        commit('ADD_RELEASES',res.data)
      })
      .catch((err) => {
        throw err;
        console.log(err)
      });
  }
}
