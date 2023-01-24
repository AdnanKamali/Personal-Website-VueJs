<template>
  <v-card :class="breakePoint('w-100', 'w-100')" class="ma-auto">
    <v-card-title>
      ― MY BACKGROUND
    </v-card-title>
    <v-card-text class="text-h6" style="line-height: 2">
      I entered the field of programming with Python, and my web programming started with Flask. After a while, I
      started programming mobile devices with Dart and the Flutter framework, and according to my circumstances, I
      changed my field and started learning Vue.
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  inject: ["breakePoint"],
}

</script>