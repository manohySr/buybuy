<script setup>
import cart from "@/assets/images/icon-add-to-cart.svg";
</script>
<template>
  <button
    class="bg-white w-56 flex items-center gap-2 justify-center text-black px-5 border-2 border-rose-300 rounded-full"
    style="padding-top: 0.9rem; padding-bottom: 0.9rem"
  >
    <img :src="cart" alt="Cart Icon" />
    Add to Cart
  </button>
</template>
