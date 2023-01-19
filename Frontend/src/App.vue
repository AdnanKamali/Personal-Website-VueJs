<template>
  <v-app theme="dark">
    <section :class="customClass">
    <WhoAmI/>
    </section>
    <AppBar />
  </v-app>
  <v-app theme="dark">
    <section :class="customClass">

    <div>
      Ali Hasten
    </div>
    </section>
  </v-app>


</template>

<script>
import AppBar from "./components/AppBar.vue";
import WhoAmI from "./pages/WhoAmI.vue";
import {mapGetters} from "vuex";

export default {

  components: {
    WhoAmI,
    AppBar,
  },
  computed:{
    ...mapGetters(["isDesktop"]),
    customClass(){
      return {'ml-16':this.isDesktop, 'mt-16':!this.isDesktop}
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500&display=swap');
*{
  font-family: Vazirmatn;
}
</style>