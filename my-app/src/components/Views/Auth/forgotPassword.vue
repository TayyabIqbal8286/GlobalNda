<template>
  <div>
    <section class="main">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-6 d-none d-md-block">
            <div class="left-side">
              <authLeft msg="Lorem Ipsum is simply dummy text of the printing"
              btn="Read More"/>
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
              <h4>Forgot Password</h4>
              <p>
                Provides your account's email you want to <br />
                reset your password
              </p>
              <form @submit.prevent="submit">
                <div class="form-group">
                  <div class="form-icon">
                    <!-- <img src="../../assets/images/name-icon.png" alt="" /> -->
                    <i class="fa fa-envelope-o"></i>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Email Address"
                    autocomplete="off"
                    v-model.trim="$v.details.email.$model"
                    :class="{
                      'is-invalid': $v.details.email.$error,
                      'is-valid': !$v.details.email.$invalid,
                    }"
                  />
                  <!-- <div class="valid-feedback">Your full name is valid</div> -->
                  <div class="invalid-feedback">
                    <span v-if="!$v.details.email.required"
                      >Email is required</span
                    >
                    <span v-if="!$v.details.email.email"
                      >Email must be valid</span
                    >
                    <!-- <span v-if="!$v.details.email.minLength"
                  >Full name must have at least
                  {{ $v.details.email.$params.minLength.min }} letters</span
                >
                <span v-if="!$v.details.email.maxLength"
                  >Full name must have at most
                  {{ $v.details.email.$params.maxLength.max }} letters</span
                > -->
                  </div>
                </div>

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

                <router-link to="verifyEmail" class="text-center"
                  >Verify Email</router-link
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
import authLeft from "./authLeft.vue"
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

export default {
  components:
   { 
    darkMode,
    authLeft,
    },
  name: "forgotPassword",

  data() {
    return {
      details: {
        name: "",
        email: "",
        password: "",
      },
      submitStatus: null,
    };
  },
  validations: {
    details: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(15),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(15),
      },
    },
  },
  methods: {
    submit() {
      console.log("submitffff!");
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

