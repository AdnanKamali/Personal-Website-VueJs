<template>
  <v-app :theme="isDark? 'dark': 'myCustomLightTheme'">
    <v-main>
  <v-container>
  <transition name="first" appear>
    <section :class="customClass" class="mb-15">
      <WhoAmI/>
    </section>
  </transition>
  </v-container>
  <v-container>

    <section id="info-sec" :class="customClass"
    v-motion
    :initial="{opacity: 0, y:100}"
    :visibleOnce="{
    y: 0,
    opacity: 1,
    transition: {
      type: 'easeOut',
      stiffness: 250,
      damping: 25,
      mass: 3,
    },
  }"
    >
      <AboutMe/>
      <MySkills/>
    </section>
  </v-container>
    </v-main>

    <AppBar />
  </v-app>


</template>

<script>
import AppBar from "./components/AppBar.vue";
import WhoAmI from "./pages/WhoAmI.vue";
import AboutMe from "./pages/AboutMe.vue";
import MySkills from "./pages/MySkills.vue";
import {useDisplay} from "vuetify";
import {mapGetters} from "vuex";

export default {
  provide(){
    return {
      breakePoint: this.cssClassResponsive,
    }
  },
  components: {
    WhoAmI,
    AppBar,
    AboutMe,
    MySkills,
  },
  computed:{
    ...mapGetters(["isDesktop", "isDark"]),
    customClass(){
      return {'ml-16':this.isDesktop, 'mt-16':!this.isDesktop}
    }
  },
   methods: {
     cssClassResponsive(desktop, mobile) {
       const isDesktop = useDisplay().lgAndUp.value;
       const style = {};
       style[desktop] = isDesktop
       style[mobile] = !isDesktop
       return style;
     },
   }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@500&display=swap');
*{
  font-family: Vazirmatn;
}

.first-enter-from{
  opacity: 0;
  transform: translateY(60px);
}
.first-enter-to{
  opacity: 1;
  transform: translateY(0);
}
.first-enter-active{
  transition: all 0.4s ease-in;
}
</style>