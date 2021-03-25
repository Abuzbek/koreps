<template>
  <div class="update_body" @mousemove="openMenu($event)">
     <div class="loader" v-if="!loading">
      <v-progress-circular
      :size="100"
      :width="7"
      color="#fed049"
      indeterminate
    ></v-progress-circular>
    </div>
  <v-data-table
    v-else
    :headers="headers"
    :items="api"
    :items-per-page="50"
    class="elevation-0"
  >
    <template v-slot:item.price_day="{ item }">
        <v-chip :color="getColor(item.price_day, item.price_month)" dark>
          <span>{{ item.price_day }} {{ item.price_month }}</span>
        </v-chip>
      </template>
  </v-data-table>
  <Drawer :drawer="drawers" :items="items" />
  </div>
</template>
<script>
import Drawer from '../../components/app/Drawer.vue'
export default {
  components:{
    Drawer
  },
  layout:'empty',
  data:()=>({
    loading:false,
    api:[],
    headers: [
      { text: "F.I.SH", align: "start", value: "name" },
      { text: "Yo'nalish", value: "direction" },
      { text: "Tel. raqami", value: "phone_number" },
      { text: "Shartnoma raqami", value: "contract_number" },
      { text: "To'langan sanasi", value: "price_day" },
      { text: "To'lov", value: "price" },
      { text: "Dars vaqtlari", value: "time_class" },
      { text: "O'qituvchilar", value: "teacher" },
    ],
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
    user:[],
    dataNow: new Date()
  }),
  methods:{
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
    },
    openMenu(e){
      if(e.clientX >= 0 && 30 >= e.clientX){
        this.drawers = true
      }
      else{
        this.drawers = false
      }
      console.log(this.drawers);
    }
  }
  ,
  async mounted(){
    const fetchUser = await this.$store.dispatch('addUser/fetchUser')
    this.api = fetchUser
    this.loading = true
  },
  computed:{
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
  }
}
</script>
<style lang="scss">
.update_body{
  min-height: 100vh;
  padding: 15px;
}
.green{
  background: #4CAF50 !important;
}
.orange{
  background: #ff9800 !important;
}
.red{
  background: #F44336 !important ;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th{
  text-align: left !important;
  span{
    color: rgba(0, 0, 0, 0.6);
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
