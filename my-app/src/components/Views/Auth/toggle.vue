<template>
  <div id="app">
    <section class="section container">
      <div class="columns is-mobile is-centered has-text-centered">
        <div
          class="
            column
            is-three-quarters-mobile
            is-two-thirds-tablet
            is-half-desktop
            is-one-third-widescreen
            is-one-quarter-fullhd
          "
        >
          <div class="card">
            <div class="card-content">
              <label class="label">Password</label>
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    v-if="showPassword"
                    type="text"
                    class="input"
                    v-model="password"
                  />
                  <input
                    v-else
                    type="password"
                    class="input"
                    v-model="password"
                  />
                </div>
                <div class="control">
                  <button class="button" @click="toggleShow">
                    <span class="icon is-small is-right">
                      <i
                        class="fas"
                        :class="{
                          'fa-eye-slash': showPassword,
                          'fa-eye': !showPassword,
                        }"
                      ></i>
                    </span>
                  </button>
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
export default {
  name: "toggle",
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>