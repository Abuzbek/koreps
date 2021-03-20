<template>
  <v-container>
    <form-user @submitHandler="submit" titleHeading="O'quvchi qo'shamizmi?"/>
  </v-container>
</template>
<script>
import formUser from '../components/form/form.vue'
export default {
  components:{formUser},
  methods:{
    submit(e){
      console.log(e);
    }
  }
  }
</script>
<style lang="scss" scoped>

</style>
