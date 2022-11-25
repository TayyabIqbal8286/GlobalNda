import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// const guest = (to, from, next) => {
//     if (!localStorage.getItem("authToken")) {
//       localStorage.removeItem("authToken");
//       return next(next);
//     } else {
//       return next("/");
//     }
//   };

const auth = (to, from, next) => {
  if (localStorage.getItem("users")) {
    console.localStorage.getItem('users')
    return next();
  } else {
    localStorage.removeItem("users");
    return next("/login");
  }
};

const routes = [
  {
    path: '/',
    name: 'register',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/register.vue')
  },

  {
    path: '/login',
    name: 'login',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/login.vue')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    // beforeEnter: auth,
    component: () => import('../components/Views/Auth/forgotPassword.vue')
  },
  {
    path: '/verifyEmail',
    name: 'verifyEmail',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/verifyEmail.vue')
  },
  {
    path: '/newPassword',
    name: 'newPassword',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/newPassword.vue')
  },
  {
    path: '/passwordUpdated',
    name: 'passwordUpdated',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/passwordUpdated.vue')
  },
  {
    path: '/home',
    name: 'home',
    // beforeEnter: guest,
    component: () => import('../components/home.vue')
  },
  {
    path: '/darkMode',
    name: 'darkMode',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/darkMode.vue')
  },
  {
    path: '/toggle',
    name: 'toggle',
    // beforeEnter: guest,
    component: () => import('../components/Views/Auth/toggle.vue')
  },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;