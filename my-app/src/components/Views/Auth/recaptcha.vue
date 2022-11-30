<template>
  <div class="c-box">
    <vue-recaptcha
      sitekey="6LeHiUAjAAAAABIpJVoxO-OKfeZQ4YaU5kwmNpCF"
    ></vue-recaptcha>
  </div>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
export default {
  name: "recaptcha",
  components: { VueRecaptcha },
};
</script>