<template>

  <Navbar />

  <div class="p-8 bg-gray-100 min-h-screen">

    <h1 class="text-2xl font-bold mb-6">
      Manager Dashboard
    </h1>

    <div class="bg-white rounded shadow p-6">

      <table class="w-full text-left">

        <thead class="border-b">

          <tr>
            <th class="py-2">Employee</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          <tr
            v-for="l in leaves"
            :key="l._id"
            class="border-b"
          >

            <td class="py-2">
              {{ l.employee.name }}
            </td>

            <td>
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

            <td class="space-x-2">

              <button
                @click="update(l._id,'Approved')"
                class="bg-green-500 text-white px-3 py-1 rounded"
              >
                Approve
              </button>

              <button
                @click="update(l._id,'Rejected')"
                class="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</template>

<script setup>

import { ref, onMounted } from "vue"
import Navbar from "../components/Navbar.vue"
import { getAllLeaves, updateLeave } from "../services/api"

const token = localStorage.getItem("token")

const leaves = ref([])

async function load() {

  leaves.value = await getAllLeaves(token)

}

async function update(id,status){

  await updateLeave(id,status,token)

  load()

}

function statusClass(status){

  if(status==="Approved") return "bg-green-500"
  if(status==="Rejected") return "bg-red-500"
  return "bg-yellow-500"

}

onMounted(load)

</script>