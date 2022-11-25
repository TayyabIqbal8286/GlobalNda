<template>
  <div>
    <section class="main">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-block">
            <div class="left-side">
              <authLeft msg="Lorem Ipsum is simply dummy text of the printing"
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
                <h4>Set New Password</h4>
                <p>
                  Your identity has been Verified! <br />
                  Set your new Password
                </p>
                <form @submit.prevent="submit">
                  <div class="form-group">
                    <div class="form-icon">
                      <!-- <img src="../../assets/images/name-icon.png" alt="" /> -->
                      <i class="fa fa-lock"></i>
                    </div>
                    <input
                      v-if="showPassword"
                      type="text"
                      class="form-control"
                      id="password"
                      placeholder="New Password"
                      autocomplete="off"
                      v-model.trim="$v.details.password.$model"
                      :class="{
                        'is-invalid': $v.details.password.$error,
                        'is-valid': !$v.details.password.$invalid,
                      }"
                    />
                    <input v-else type="password" placeholder="New Password" />
                    <!-- <button class="button" > -->
                    <span class="sh-icon">
                      <i
                        class="fa"
                        @click="toggleShow"
                        :class="{
                          'fa-eye-slash': showPassword,
                          'fa-eye': !showPassword,
                        }"
                      ></i>
                    </span>
                    <!-- </button> -->
                    <!-- <div class="valid-feedback">Your full name is valid</div> -->
                    <div class="invalid-feedback">
                      <span v-if="!$v.details.password.required"
                        >Password is required</span
                      >
                      <span v-if="!$v.details.password.minLength"
                        >Password must have at least
                        {{ $v.details.password.$params.minLength.min }}
                        letters</span
                      >
                      <span v-if="!$v.details.password.maxLength"
                        >Password must have at most
                        {{ $v.details.password.$params.maxLength.max }}
                        letters</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-icon">
                      <!-- <img src="../../assets/images/name-icon.png" alt="" /> -->
                      <i class="fa fa-lock"></i>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                      v-model.trim="$v.details.repeatpassword.$model"
                      :class="{
                        'is-invalid': $v.details.repeatpassword.$error,
                        'is-valid': !$v.details.repeatpassword.$invalid,
                      }"
                    />
                    <!-- <div class="valid-feedback">Your full name is valid</div> -->
                    <div class="invalid-feedback">
                      <span v-if="!$v.details.repeatpassword.required"
                        >Confirm Password is required</span
                      >
                      <span v-if="!$v.details.repeatpassword.sameAsPassword"
                        >Passwords must be identical</span
                      >
                    </div>
                  </div>

                  <!-- <toggle /> -->

                  <button
                    class="button"
                    type="submit"
                    :disabled="submitStatus === 'PENDING'"
                  >
                    Next
                  </button>
                  <p class="typo__p" v-if="submitStatus === 'OK'">
                    Thanks for your submission!
                  </p>
                  <p class="typo__p" v-if="submitStatus === 'ERROR'">
                    Please fill the form correctly.
                  </p>
                  <p class="typo__p" v-if="submitStatus === 'PENDING'">
                    Sending...
                  </p>

                  <router-link to="passwordUpdated" class="text-center"
                    >Password Updated</router-link
                  >
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
import darkMode from "./darkMode.vue";
// import toggle from "./toggle.vue";
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
import AuthLeft from './authLeft.vue';

export default {
  name: "newPassword",
  components: {
    darkMode,
    AuthLeft,
    // toggle,
  },

  data() {
    return {
      showPassword: false,
      password: null,
      details: {
        name: "",
        email: "",
        password: "",
        repeatpassword: "",
      },
      submitStatus: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  validations: {
    details: {
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(15),
      },
      repeatpassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    submit() {
      console.log(this.password);
      console.log(this.repeatpassword);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>