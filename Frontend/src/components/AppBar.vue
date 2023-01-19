<template>
<!--Desktop navigation-->
  <v-card v-if="isDesktop" class="position-fixed h-100">
    <v-layout class="position-fixed w-25 h-100">
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Adnan Kamali"
              subtitle="adnankamali1246@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
                <v-list-item
                  v-for="item in items"
                  :key="item.icon"
                  :title="item.title"
                  :prepend-icon="item.icon"
                  :value="item.value"
                />
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

<!-- mobile nav -->

  <v-app-bar  v-if="!isDesktop" elevation="0" color="transparent" class=" justify-end">
    <v-avatar class="ml-3">
      <v-img src="https://randomuser.me/api/portraits/women/85.jpg"> </v-img>
    </v-avatar>
    <v-app-bar-title class="d-flex justify-start"> I'm Adnan </v-app-bar-title>
    <v-app-bar-nav-icon :icon="!drawer?'menu':'close'" @click.stop="drawer = !drawer" />
  </v-app-bar>
  <v-navigation-drawer v-if="!isDesktop" location="right" color="black" v-model="drawer" style="top:0;" class="fill-height pt-16">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Adnan Kamali"
        subtitle="adnankamali1246@gmail.com"
      ></v-list-item>
      <v-divider />
      <v-list-item
        v-for="item in items"
        :key="item.icon"
        :title="item.title"
        :append-icon="item.icon"
        :value="item.value"
      />

    </v-list>
  </v-navigation-drawer>
</template>

<script>

import {mapGetters} from "vuex";

export default {

  data() {
    return {
      drawer: false,
      items: [
        { title: "من کی هستم", value: "Dsh", icon: "person" },
        { title: "مهارت ها", value: "St", icon: "category" },
        { title: "ارتباط با من", value: "As", icon: "contacts" },
      ],
    };
  },
  computed:{
    ...mapGetters(["isDesktop"]),
  },

};
</script>
