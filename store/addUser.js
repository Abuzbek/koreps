export const actions = {
   async updateUser({commit,dispatch}, payload){
    try {
      await this.$fire.database.ref('/users/').child(payload.id).update({...payload})
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  },
   async deleteUser({commit,dispatch}, payload){
    try {
      await this.$fire.database.ref('/users/').child(payload.id).remove()
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchUser(){
    try {
      const categories = (await this.$fire.database.ref('/users/').once('value')).val() || {}
      let cats = []
      return Object.keys(categories).map(key=>({...categories[key],id:key}))

    } catch (error) {
      console.log(error);
    }
  },
  async addUser({commit,dispatch}, payload){
    try {
      const category = await this.$fire.database.ref('/users/').push(payload)
      return({id: category.key, ...payload});
    } catch (error) {
      console.log(error);
    }
  }
}
