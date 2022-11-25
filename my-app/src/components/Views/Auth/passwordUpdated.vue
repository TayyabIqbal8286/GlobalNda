<template>
  <div>
    <section class="main">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-block">
            <div class="left-side">
              <authLeft msg="All Set. Let’s get you logged in."
              btn="Read More" />
            </div>
          </div>

          <div class="col-md-6">
            <div class="right-side">
              <div
                class="
                  mbl-view
                  d-xl-none d-lg-none d-md-none d-sm-block
                  visible
                "
              >
                <h5>GLOBAL NDA</h5>
              </div>

              <div class="content">
                <darkMode />
                <form>
                  <div class="updated">
                    <h4>Password Updated</h4>

                    <div class="icon-updated">
                      <img src="@/assets/images/updated-icon.png" alt="" />
                    </div>
                    <p>Your New Password has been updated</p>

                    <button class="button" @click="login">Next</button>
                  </div>
                </form>
              </div>

              <div
                class="
                  mbl-circle
                  d-xl-none d-lg-none d-md-none d-sm
                  block
                  visible
                "
              >
                <div class="circle1">
                  <img src="@/assets/images/Ellipse 1.png" alt="" />
                </div>
                <div class="circle2">
                  <img src="@/assets/images/Ellipse 2.png" alt="" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuthLeft from './authLeft.vue';
import darkMode from "./darkMode.vue";
export default {
  name: "passwordUpdated",
  components: {
    darkMode,
    AuthLeft,
  },
};
</script>