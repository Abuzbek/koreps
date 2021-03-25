<template>
  <v-container fluid>
    <div class="loader" v-if="!loading">
        <v-progress-circular
        :size="100"
        :width="7"
        color="#fed049"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-data-table
      :headers="headers"
      :items="api"
      sort-by="calories"
      :search="search"
      class="elevation-2"
      v-else
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>KOREPS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.price_day="{ item }">
        <v-chip :color="getColor(item.price_day, item.price_month)" dark>
          <span>{{ item.price_day }} {{ item.price_month }}</span>
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mr-2" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
        <v-icon small @click="seeItem(item)">
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    search: "",
    headers: [
      { text: "F.I.SH", align: "start", value: "name" },
      { text: "Yo'nalish", value: "direction" },
      { text: "Tel. raqami", value: "phone_number" },
      { text: "Shartnoma raqami", value: "contract_number" },
      { text: "To'langan sanasi", value: "price_day" },
      { text: "To'lov", value: "price" },
      { text: "Dars vaqtlari", value: "time_class" },
      { text: "O'qituvchilar", value: "teacher" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    dataNow: new Date(),
    api : [],
    loading:false
  }),
  computed: {
    // api() {
    //   return this.$store.getters["table/api"];
    // },
    getMonth() {
      let getMonthh1 = this.dataNow;
      getMonthh1.setDate(1);
      getMonthh1.setMonth(getMonthh1.getMonth());
      return new Intl.DateTimeFormat("en-EN", { month: "long" }).format(
        new Date(getMonthh1)
      );
    },
    getDay() {
      return new Intl.DateTimeFormat("en-EN", { day: "2-digit" }).format(
        new Date()
      );
    },
    getNextMonth() {
      let getMonthh = this.dataNow;
      getMonthh.setDate(1);
      getMonthh.setMonth(getMonthh.getMonth() + 1);
      return new Intl.DateTimeFormat("en-EN", { month: "long" }).format(
        new Date(getMonthh)
      );
    },
    getPrevMonth() {
      let getMonth2 = this.dataNow;
      getMonth2.setDate(1);
      getMonth2.setMonth(getMonth2.getMonth() - 1);
      return new Intl.DateTimeFormat("en-EN", { month: "long" }).format(
        new Date(getMonth2)
      );
    }
  },
  methods: {
    editItem(item) {
       this.$router.push(`/update/${item.id}`);
    },
    async deleteItem(item) {
      try {
        await this.$store.dispatch("addUser/deleteUser", {...item});
        console.log(item);
        this.loading = false
        const fetchUser = await this.$store.dispatch('addUser/fetchUser')
        this.api = fetchUser

        setTimeout(()=>{this.loading = true},100)
      } catch (error) {
        console.log(error);
      }
    },
    seeItem(item){
      console.log(item.id);
    },
    getColor(dataDay, month) {
      if (
        (dataDay - Number(this.getDay) <= 10 && this.getMonth === month) ||
        (Number(this.getDay) - dataDay >= 20 && this.getNextMonth === month)
      ) {
        return "red";
      } else if (
        (dataDay - Number(this.getDay) <= 20 && this.getMonth === month) ||
        (Number(this.getDay) - dataDay >= 10 && this.getNextMonth === month)
      ) {
        return "orange";
      } else if (
        (dataDay - Number(this.getDay) <= (30 || 31) &&
          this.getMonth === month) ||
        (Number(this.getDay) - dataDay >= 0 && this.getNextMonth === month)
      ) {
        return "green";
      } else {
        return "gray";
      }
    }
  },
  async mounted(){
    const fetchUser = await this.$store.dispatch('addUser/fetchUser')
    this.api = fetchUser
    this.loading = true
  }
};
</script>
<style lang="scss" scoped>
.animation_red {
  color: red !important;
  animation: identifier 2s infinite linear;
}
@keyframes identifier {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.loader{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
