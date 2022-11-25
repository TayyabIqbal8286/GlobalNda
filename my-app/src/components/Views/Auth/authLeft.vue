<template>
  <div>
    <div class="data">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="" width="100%" height="100%" />
      </div>
      <p class="dummy-text">{{ msg }}</p>
      <p class="dummy-text">{{ msg2 }}</p>
      <div class="read-more">
        <a href="">{{btn}}</a>
      </div>
    </div>
    <div class="circle1">
      <img src="@/assets/images/Ellipse 1.png" alt="" />
    </div>
    <div class="circle2">
      <img src="@/assets/images/Ellipse 2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "authLeft",
  props: {
    msg: String,
    msg2: String,
    btn: String,
  }
};
</script>
