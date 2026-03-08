<template>
  <div class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">

    <h1 class="text-lg font-bold">
      Leave Management System
    </h1>

    <div class="flex items-center gap-4">

      <span class="text-sm capitalize">
        {{ role }}
      </span>

      <button
        @click="logout"
        class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </div>

  </div>
</template>

<script setup>

import { useRouter } from "vue-router"

const router = useRouter()

const role = localStorage.getItem("role")

function logout() {

  localStorage.removeItem("token")
  localStorage.removeItem("role")

  router.push("/login")

}

</script>