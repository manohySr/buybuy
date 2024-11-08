<script setup>
import decrement from "@/assets/images/icon-decrement-quantity.svg";
import increment from "@/assets/images/icon-increment-quantity.svg";
</script>
<template>
  <div
    class="w-56 flex items-center justify-between px-5 py-3 rounded-full bg-red"
  >
    <button
      class="flex items-center justify-center p-2 rounded-full hover:border-2 hover:border-white w-8 h-8"
    >
      <img :src="decrement" alt="Decrement Icon" class="text-white" />
    </button>

    <span class="text-white">4</span>

    <button
      class="flex items-center justify-center p-2 rounded-full hover:border-2 hover:border-white w-8 h-8"
    >
      <img :src="increment" alt="Increment Icon" class="text-white" />
    </button>
  </div>
</template>
