<script setup>
import image from "@/assets/images/image-cake-desktop.jpg";
</script>
<template>
  <div class="container">
    <img :src="image" alt="cake" />
    <button>Add to Cart</button>
  </div>
  <div class="description">
    <span>Cake</span>
    <span>Red Velvet Cake</span>
    <span>$4.50</span>
  </div>
</template>
