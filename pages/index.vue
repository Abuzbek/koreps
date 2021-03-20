<template>
  <header>
    <div class="overlay">
      <div class="data">
        {{dates}}
      </div>
    </div>
    <div class="title">
      {{title}}
    </div>
  </header>
</template>
<script>
export default {
  data: () => ({
    date:new Date(),
    title:'ASSALAMU ALAYKUM VA RAHMATUVALLAHI VA BARAKATUHU',
    options: {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    },
  }),
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
header{
  width:100%;
  height: 100vh;
  background: url('../assets/0A4gFe.jpg') no-repeat center center / cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .overlay{
    backdrop-filter: blur(7px);
    background: rgba($color: #282846, $alpha: 0.3);
    padding: 50px 70px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .data{
    font-size: 90px;
    font-weight: 900;
    color: #fed049;
  }
  .title{
    font-size: 30px !important;
    color: white;
    padding: 50px;
  }
}
</style>
