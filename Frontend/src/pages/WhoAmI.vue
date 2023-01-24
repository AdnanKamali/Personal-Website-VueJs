<template>

  <v-row class="mt-sm-14 mt-lg-8">
    <v-col cols="12" sm="12" lg="6" class="ma-auto">
      <v-img src="./src/assets/night_mode.jpg" class="mt-10 ma-auto rounded-xl w-50" :aspect-ratio="16/13"
             :class="breakePoint('w-100','w-75')">
      </v-img>
    </v-col>
    <v-col cols="12" sm="12" lg="6" align-self="center">
      <h1 class="text-start text-sm-h3 text-lg-h2 ma-auto"
          :class="breakePoint('w-75', 'w-100')"
      >Hi, I am Adnan, a Full statck developer </h1>
      <v-row class="mt-5 mt-lg-16 ma-auto justify-start" :class="breakePoint('w-75', 'w-100')">
        <v-btn target="_blank" href="https://www.instagram.com/adnan.kmali/" class="me-2 mt-2">Instagram</v-btn>
        <v-btn target="_blank" href="https://github.com/AdnanKamali" class="me-2 mt-2">GitHub</v-btn>
      </v-row>
    </v-col>
  </v-row>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  inject: ["breakePoint"],
  computed: {
    ...mapGetters(["isDark"]),
  }
}
</script>

<style scoped>
#place-h {
  opacity: 30%;
  background-color: rgb(18, 18, 18);
}
</style>