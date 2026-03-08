import { createRouter, createWebHistory } from "vue-router"

import Signup from "../pages/Signup.vue"
import Login from "../pages/Login.vue"
import EmployeeDashboard from "../pages/EmployeeDashboard.vue"
import EmployerDashboard from "../pages/EmployerDashboard.vue"

const routes = [
  { path: "/", redirect: "/signup" },   // CHANGE THIS
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/employee", component: EmployeeDashboard },
  { path: "/employer", component: EmployerDashboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})