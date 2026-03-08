<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">

    <div class="bg-white shadow-lg rounded-xl p-8 w-96">

      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">
        Login
      </h2>

      <form @submit.prevent="handleLogin">

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input"
          required
        />

        <button class="btn">
          Login
        </button>

      </form>

      <p class="text-center mt-4 text-sm text-gray-600">
        New user?
        <router-link
          to="/signup"
          class="text-blue-600 font-semibold hover:underline"
        >
          Create account
        </router-link>
      </p>

    </div>

  </div>
</template>

<script setup>

import { ref } from "vue"
import { login } from "../services/api"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

async function handleLogin() {

  const res = await login({
    email: email.value,
    password: password.value
  })

  if (!res.token) {
    alert("Invalid credentials")
    return
  }

  localStorage.setItem("token", res.token)
  localStorage.setItem("role", res.role)

  if (res.role === "employee") {
    router.push("/employee")
  } else {
    router.push("/employer")
  }

}

</script>

<style>

.input {
  @apply w-full border border-gray-300 p-2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400;
}

.btn {
  @apply w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition;
}

</style>