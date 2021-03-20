<template>
  <v-app dark >
    <Drawer :drawer="drawers" :items="items" />
    <v-app-bar fixed app color="#282846" style="color:#fed049;">
      <v-app-bar-nav-icon style="color:#fed049;" @click.stop="drawers = !drawers" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div>{{ dates }}</div>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>
    <v-btn
      class="mx-2 fixed_btn"
      fab
      color="#007580"
      tag="nuxt-link"
      to="/addChild"
    >
      <v-icon style="color:#d8ebe4;">
        mdi-account-plus
      </v-icon>
    </v-btn>
  </v-app>
</template>
<script>
import Drawer from "../components/app/Drawer.vue";
export default {
  components: {
   Drawer
  },
  data() {
    return {
      date: new Date(),
      drawers: false,
      items: [
        {
          icon: "mdi-home",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Data Table",
          to: "/table"
        },
        {
          icon: "mdi-plus",
          title: "Add Child",
          to: "/addChild"
        },
        {
          icon: "mdi-printer",
          title: "Data Print",
          to: "/update"
        }
      ],
      options: {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      },
      title: "KOREPS"
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  computed: {
    dates() {
      return new Intl.DateTimeFormat("en-EN", this.options).format(
        new Date(this.date)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.fixed_btn {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
