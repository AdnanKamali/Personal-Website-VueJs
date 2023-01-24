<template>
<!--Desktop navigation-->

  <v-card v-if="isDesktop" >

      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              :prepend-avatar="profileImage"
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
             :href="item.href"
          />
          <v-list-item
              :title="isDark?'Dark Mode':'Light Mode'"
              :prepend-icon="isDark?'dark_mode':'light_mode'"

              @click="changeTheme"
          />
        </v-list>
      </v-navigation-drawer>

  </v-card>



<!-- mobile nav -->

  <v-app-bar  v-if="!isDesktop" elevation="0" :color="isDark?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)'" class=" justify-end">
    <v-avatar class="ml-3">
      <v-img :src="profileImage"> </v-img>
    </v-avatar>
    <v-app-bar-title class="d-flex justify-start"> I'm Adnan </v-app-bar-title>
    <v-app-bar-nav-icon :icon="!drawer?'menu':'close'" @click.stop="drawer = !drawer" />
  </v-app-bar>
  <v-navigation-drawer v-if="!isDesktop" location="right" v-model="drawer" style="top:0;" class="fill-height pt-16">
    <v-list>
      <v-list-item
        :prepend-avatar="profileImage"
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
        :href="item.href"
      />
      <v-list-item
          :title="isDark?'Dark Mode':'Light Mode'"
          :append-icon="isDark?'dark_mode':'light_mode'"
          value="dark"
          @click="changeTheme"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {

  data() {
    return {
      drawer: false,
      profileImage: "./src/assets/profile.jpg",
      items: [
        { title: "My Background", icon: "person", href: "#AboutMe" },
        { title: "Skills", icon: "category", href:"#MySkills" },
        { title: "Contact Me", icon: "contacts", href: "#ContactMe" },
      ],
    };
  },
  computed:{
    ...mapGetters(["isDesktop", "isDark"]),
  },
  methods:{
    ...mapMutations(["changeTheme"])
  }
};
</script>
