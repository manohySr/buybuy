<script setup>
import illustration from "@/assets/images/illustration-empty-cart.svg";

const props = defineProps({
  numberItem: {
    type: String,
    default: 0,
  },
  desserts: {
    type: Object,
  },
});
</script>
<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-3xl font-bold text-rose-800">
      Your cart ({{ props.numberItem }})
    </h1>
    <!-- <div class="flex justify-center"> -->
    <!--   <img :src="illustration" class="image object-cover" /> -->
    <!-- </div> -->
    <!-- <h2 class="flex justify-center text-green text-xl"> -->
    <!--   Your added items will appear here -->
    <!-- </h2> -->
    <div>
      {{ desserts }}
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 250px;
  height: 250px;
}
</style>
