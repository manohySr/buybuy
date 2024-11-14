<script setup>
import decrement from "@/assets/images/icon-decrement-quantity.svg";
import increment from "@/assets/images/icon-increment-quantity.svg";

const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["increment", "decrement"]);

function handleIncrement() {
  emit("increment");
}

function handleDecrement() {
  emit("decrement");
}
</script>
<template>
  <div
    class="w-56 flex items-center justify-between px-5 py-3 rounded-full bg-red"
  >
    <button
      class="flex items-center justify-center p-2 rounded-full hover:border-2 hover:border-white w-8 h-8"
      @click="handleDecrement"
    >
      <img :src="decrement" alt="Decrement Icon" class="text-white" />
    </button>

    <span class="text-white">{{ props.amount }}</span>

    <button
      class="flex items-center justify-center p-2 rounded-full hover:border-2 hover:border-white w-8 h-8"
      @click="handleIncrement"
    >
      <img :src="increment" alt="Increment Icon" class="text-white" />
    </button>
  </div>
</template>
