<template>
  <v-card class="mt-4">
    <v-card-title>
      CONTACT ME
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" lg="6">
          <label for="name">Name</label>
          <v-text-field :rules="[
              nameValidator
          ]" name="name" variant="outlined" placeholder="Adnan Kamali" v-model="payload.name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
          <label for="email" >E-mail</label>
          <v-text-field :rules="[emailValidator]" name="email" variant="outlined" placeholder="email@email.com" v-model="payload.email"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-textarea :rules="[messageValidator]" label="Message" variant="outlined" v-model="payload.message"></v-textarea>
        </v-col>
        <v-col cols="4">
          <v-btn @click="sendMessage" variant="outlined">Submit</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      payload:{
        name: "",
        email: "",
        message: "",
      },
      validator:{
        name: false,
        email: false,
        message: false,
      }
    }
  },
  methods:{
    nameValidator(v){
      if(v.trim().length>4 && v.trim().match(/[^a-z || ^A-Z]/g) === null){
        this.validator.name = true;
        return true;
      }
      else if(v.trim().length<4){
        this.validator.name = false;
        return "Enter more than 4 character";
      }else if(v.trim().match(/[^a-z || ^A-Z]/g) !== null){
        this.validator.name = false;
        return "Enter true name";
      }
      this.validator.name = false;
      return "name not valid";
    },
    emailValidator(e){
      if(e.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        this.validator.email = true;
        return true
      }
      this.validator.email = false;
      return "Email not valid";
    },
    messageValidator(m){
      if(m.trim().length<12){
        this.validator.message = true;
        return "Message is Short";
      }
      this.validator.message = false;
      return true;
    },
    sendMessage(){
      if(this.validator.name && this.validator.email && this.validator.message){
        this.$store.dispatch("sendMessage", this.payload);
      }else{
        // not valid
        this.nameValidator("");
      }
    }
  }
}
</script>