<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">

    <div class="bg-white shadow-lg rounded-xl p-8 w-96">

      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">
        Create Account
      </h2>

      <form @submit.prevent="handleSignup">

        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="input"
          required
        />

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

        <select v-model="role" class="input">
          <option value="employee">Employee</option>
          <option value="employer">Employer</option>
        </select>

        <button class="btn">
          Sign Up
        </button>

      </form>

      <p class="text-center mt-4 text-sm text-gray-600">
        Already have an account?
        <router-link
          to="/login"
          class="text-blue-600 font-semibold hover:underline"
        >
          Login
        </router-link>
      </p>

    </div>

  </div>
</template>

<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"
import { signup } from "../services/api"

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const role = ref("employee")

async function handleSignup() {

  const res = await signup({
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value
  })

  alert(res.message || "Signup successful")

  router.push("/login")
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