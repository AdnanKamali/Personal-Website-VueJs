<template>
  <v-app :theme="mainTheme">

    <section :class="customClass">

    <WhoAmI/>
    </section>
    <AppBar />
  </v-app>
  <v-app :theme="mainTheme">
    <section :class="customClass">

    <div>
      section 2
    </div>
    </section>
  </v-app>


</template>

<script>
import AppBar from "./components/AppBar.vue";
import WhoAmI from "./pages/WhoAmI.vue";
import {useDisplay} from "vuetify";
import {mapGetters} from "vuex";

export default {
  provide(){
    return {
      breakePoint: this.cssClassResponsive,
    }
  },
  data(){
    return {
    mainTheme: "dark",

    }
  },
  components: {
    WhoAmI,
    AppBar,
  },
  computed:{
    ...mapGetters(["isDesktop"]),
    customClass(){
      return {'ml-16':this.isDesktop, 'mt-16':!this.isDesktop}
    }
  },
   methods:{
     cssClassResponsive(desktop, mobile){
       const isDesktop = useDisplay().lgAndUp.value;
       const style = {};
       style[desktop] = isDesktop
       style[mobile] = !isDesktop
       return style;
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