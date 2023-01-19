<template>

    <v-row>
      <v-col cols="12" sm="12" lg="6" class="ma-auto">
        <v-img src="./src/assets/test.jpg" class="mt-10 ma-auto rounded-shaped w-50" :class="breakePoint('w-75','w-50')" aspect-ratio="16/9">
        </v-img>
      </v-col>
      <v-col cols="12" sm="12" lg="6" align-self="center">
        <h1 class="text-start text-sm-h3 text-lg-h1 ma-auto"
          :class="breakePoint('w-75', 'w-50')"
        >Hi, I am Adnan, a Full statck developer </h1>
      </v-col>
    </v-row>

</template>

<script>
import {mapMutations} from "vuex";

export default {
  inject:["breakePoint"],
}
</script>

<style scoped>
#place-h{
  opacity: 30%;
  background-color: rgb(18,18,18);
}
</style>