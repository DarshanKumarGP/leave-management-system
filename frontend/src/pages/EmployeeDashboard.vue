<template>

  <Navbar />

  <div class="p-8 bg-gray-100 min-h-screen">

    <h1 class="text-2xl font-bold mb-6">
      Employee Dashboard
    </h1>

    <div class="grid md:grid-cols-2 gap-8">

      <!-- Leave Form -->

      <div class="bg-white p-6 rounded shadow">

        <h2 class="text-lg font-semibold mb-4">
          Apply for Leave
        </h2>

        <form @submit.prevent="apply">

          <input v-model="leaveType" placeholder="Leave Type" class="input"/>

          <input v-model="startDate" type="date" class="input"/>

          <input v-model="endDate" type="date" class="input"/>

          <input v-model="reason" placeholder="Reason" class="input"/>

          <button class="btn">
            Submit Leave Request
          </button>

        </form>

      </div>


      <!-- Leave Status Table -->

      <div class="bg-white p-6 rounded shadow">

        <h2 class="text-lg font-semibold mb-4">
          My Leave Requests
        </h2>

        <table class="w-full text-left">

          <thead class="border-b">

            <tr>
              <th class="py-2">Leave Type</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr
              v-for="l in leaves"
              :key="l._id"
              class="border-b"
            >
              <td class="py-2">
                {{ l.leaveType }}
              </td>

              <td>
                <span
                  :class="statusClass(l.status)"
                  class="px-2 py-1 rounded text-white text-sm"
                >
                  {{ l.status }}
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</template>

<script setup>

import { ref, onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import { applyLeave, getMyLeaves } from "../services/api"

const token = localStorage.getItem("token")

const leaveType = ref("")
const startDate = ref("")
const endDate = ref("")
const reason = ref("")
const leaves = ref([])

async function load() {

  leaves.value = await getMyLeaves(token)

}

async function apply() {

  await applyLeave(
    {
      leaveType: leaveType.value,
      startDate: startDate.value,
      endDate: endDate.value,
      reason: reason.value
    },
    token
  )

  leaveType.value = ""
  reason.value = ""

  load()

}

function statusClass(status) {

  if (status === "Approved") return "bg-green-500"
  if (status === "Rejected") return "bg-red-500"
  return "bg-yellow-500"

}

onMounted(load)

</script>

<style>

.input{
@apply w-full border p-2 mb-3 rounded
}

.btn{
@apply bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700
}

</style>