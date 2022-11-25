<template>
  <div id="app">
    <!-- <register />
    <login />
    <forgotPassword />
    <verifyEmail />
    <newPassword />
    <passwordUpdated /> -->
    <main role="main">
      <router-view />
      <!-- <lightbox :items="images"></lightbox> -->
    </main> 
  </div>
</template>

<script>
// import register from "./components/register.vue";
// import login from "./components/login.vue";
// import forgotPassword from "./components/forgotPassword.vue";
// import verifyEmail from './components/verifyEmail.vue';
// import newPassword from './components/newPassword.vue';
// import passwordUpdated from './components/passwordUpdated.vue'

export default {
  name: "App",
  components: {
    // register,
    // login,
    // forgotPassword,
    // verifyEmail,
    // newPassword,
    //passwordUpdated,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
