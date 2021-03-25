<template>
  <v-card color="#f5f5f5">
    <v-col>
      <v-card-title class="text-center">{{ titleHeading }}</v-card-title>
      <v-row>
        <v-col cols="12" md="11" class="ma-auto">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                label="F.I.SH"
                style="color:#282846;"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="direction"
                label="Yo'nalish"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phone_number"
                label="Tel.raqam"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="contract_number"
                label="Shartnoma raqami"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model.number="price"
                label="To'lov"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="time_class"
                label="Dars vaqtlari"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="teacher"
                label="O'qituvchi"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="price_day"
                label="To'lov kuni"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-autocomplete
                v-model="value"
                :items="items"
                outlined
                dense
                chips
                small-chips
                label="O'qigan yoki o'qiyotgan oyi"
                multiple
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-btn color="#fed049" block @click.prevent="submit">
                Jo'natish
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>
<script>
export default {
  props: {
    titleHeading: {
      type: String,
      default: `O'quvchi qoshamizmi?`
    },
    values: {
      type: Object
    }
  },
  data: () => ({
    value: [],
    items: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    name: "",
    direction: "",
    phone_number: "",
    contract_number: "",
    price_day: "",
    price: "",
    time_class: "",
    teacher: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.[a-z].[a-z]+/.test(v) || "E-mail must be valid"
    ]
  }),
  computed: {
    price_month() {
      return this.value[this.value.length - 1];
    }
  },
  methods: {
    submit() {
      this.$emit("submitHandler", {
        name: this.name,
        direction: this.direction,
        phone_number: this.phone_number,
        contract_number: this.contract_number,
        price_day: this.price_day,
        price_month: this.price_month,
        price: this.price,
        all_month: this.value,
        time_class: this.time_class,
        teacher: this.teacher
      });
      this.name = "";
      this.direction = "";
      this.phone_number = "";
      this.contract_number = "";
      this.price_day = "";
      this.price = "";
      this.time_class = "";
      this.teacher = "";
      this.value = [];
    }
  },
  mounted() {
    if (this.values) {
      this.name = this.values.name;
      this.direction = this.values.direction;
      this.phone_number = this.values.phone_number;
      this.contract_number = this.values.contract_number;
      this.price_day = this.values.price_day;
      this.price = this.values.price;
      this.time_class = this.values.time_class;
      this.teacher = this.values.teacher;
      this.value = this.values.all_month;
    }
  }
};
</script>
<style lang="scss" scoped>
.text-center {
  text-align: center !important;
  display: flex;
  justify-content: center;
}
</style>
