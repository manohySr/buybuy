<script setup>
import image from "@/assets/images/image-cake-mobile.jpg";
import CartButton from "./components/button/CartButton.vue";
import AddButton from "./components/button/AddButton.vue";
</script>
<template>
  <div class="container p-5">
    <h1 class="text-3xl font-bold mb-5">Desserts</h1>
    <div class="relative flex flex-col items-center">
      <img :src="image" class="w-full object-cover rounded-lg" alt="cake" />
      <div class="button">
        <AddButton />
        <!-- <CartButton /> -->
      </div>
    </div>
    <div class="mt-10">
      <div class="description flex flex-col">
        <span class="text-rose-500">Cake</span>
        <span class="font-semibold">Red Velvet Cake</span>
        <span class="text-red font-semibold">$4.50</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  position: absolute;
  bottom: -2rem;
  z-index: 1000 !important;
}
</style>
