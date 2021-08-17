<template>
  <v-navigation-drawer v-model="drawer" fixed app color="#fed049">
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        style="color:#282846 !important;"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="installPWA" exact style="color:#282846 !important;">
        <v-list-item-action>
          <v-icon>mdi-file-download</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Install'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    installable: false,
    deferredPrompt: null
  }),
  props: {
    drawer: {
      type: Boolean
    },
    items: {
      type: Array
    }
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", e => {
      console.log(e);
      e.preventDefault();
      this.deferredPrompt = e;
    });

    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async installPWA() {
      console.log(this.deferredPrompt);
      this.deferredPrompt.prompt();
    }
  }
};
</script>
