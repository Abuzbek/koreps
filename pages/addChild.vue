<template>
  <v-container>
    <form-user @submitHandler="submit"  titleHeading="O'quvchi qo'shamizmi?"/>
  </v-container>
</template>
<script>
import formUser from '../components/form/form.vue'
export default {
  components:{formUser},
  methods:{
    async submit(e){
      try {
        // const category = await this.$fire.database.ref('/users/').push(e)
        const category = await this.$store.dispatch('addUser/addUser', {...e})
        console.log(category);
      } catch (error) {
        console.log(error);
      }
    }
  }
  }
</script>
<style lang="scss" scoped>

</style>
