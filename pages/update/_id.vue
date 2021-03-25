<template>
  <div>
    <div class="loader" v-if="!loading">
        <v-progress-circular
        :size="100"
        :width="7"
        color="#fed049"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-else>
      <form-user
        @submitHandler="submit"
        :titleHeading="`${nameTitle.name}ni ma'lumotlarini o'zgartiramizmi ?`"
        :values="nameTitle"
      />
    </v-container>
  </div>
</template>
<script>
import formUser from "../../components/form/form.vue";
export default {
  components: { formUser },
  data: () => ({
    id: "",
    category: [],
    nameTitle: {},
    loading:false,
  }),
  methods: {
    async submit(e) {
      try {
        await this.$store.dispatch("addUser/updateUser", {...e,id:this.$route.params.id});
        console.log(e);
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    const fetchUser = await this.$store.dispatch("addUser/fetchUser");
    this.category = fetchUser;
    this.nameTitle = this.category.find(
      n => n.id === this.$route.params.id
    );
    this.loading = true
  }
};
</script>
<style lang="scss" scoped>
.loader{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
