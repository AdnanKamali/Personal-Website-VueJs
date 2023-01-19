<template>

    <v-row>
      <v-col cols="12" sm="12" lg="6" class="ma-auto">
        <v-img src="./src/assets/test.jpg" class="mt-10 ma-auto rounded-shaped w-50" :class="{'w-50':!isDesktop, 'w-75':isDesktop}" aspect-ratio="16/9">

        </v-img>
      </v-col>
      <v-col cols="12" sm="12" lg="6" align-self="center">
        <h1 class="text-start text-lg-h1 ma-auto"
          :class="cssClassResponsive('w-75','w-50')"
        >Hi, I am Brooke, a project manager </h1>
      </v-col>
    </v-row>

</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed:{
    ...mapGetters(["isDesktop"])
  },
  methods:{
    ...mapMutations(["cssClassResponsive"])
  }
}
</script>

<style scoped>
#place-h{
  opacity: 30%;
  background-color: rgb(18,18,18);
}
</style>