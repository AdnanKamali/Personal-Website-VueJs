<template>
  <v-app theme="dark">
    <AppBar />

  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500&display=swap');
*{
  font-family: Vazirmatn;
}
</style>