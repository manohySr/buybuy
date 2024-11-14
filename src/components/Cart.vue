<script setup>
import illustration from "@/assets/images/illustration-empty-cart.svg";
import deleteIcon from "@/assets/images/icon-remove-item.svg";
import tree from "@/assets/images/icon-carbon-neutral.svg";
import { computed } from "vue";

const props = defineProps({
  numberItem: {
    type: Number,
    default: 0,
  },
  desserts: {
    type: Object,
  },
});

const totalSum = computed(() => {
  return props.desserts.reduce(
    (sum, dessert) => sum + dessert.price * dessert.amount,
    0,
  );
});

const handleDelete = (dessert) => {
  dessert.amount = 0;
  dessert.cartState = false;
};
</script>
<template>
  <div class="bg-white rounded-lg p-5">
    <h1 class="text-3xl font-bold text-red pb-5">
      Your cart ({{ numberItem }})
    </h1>

    <div v-if="numberItem > 0" class="mt">
      <div
        v-for="dessert in desserts"
        :key="dessert.name"
        class="item flex justify-between p-5 py-3 mb-2"
      >
        <div>
          <h3 class="text-lg font-semibold text-rose-500">
            {{ dessert.name }}
          </h3>
          <div class="price flex">
            <span class="number text-rose-800 font-bold"
              >{{ dessert.amount }}x</span
            >
            <span>@${{ dessert.price }}</span>
            <span class="font-bold text-rose-500"
              >${{ (dessert.price * dessert.amount).toFixed(2) }}</span
            >
          </div>
        </div>
        <button
          class="flex items-center justify-center p-2 rounded-full border-2 border-red w-8 h-8"
          @click="() => handleDelete(dessert)"
        >
          <img :src="deleteIcon" alt="Delete Icon" class="text-red" />
        </button>
      </div>

      <div class="flex justify-between align-center p-5 py-3 mb-2">
        <span class="text-lg font-semibold">Order Total</span>
        <span class="text-2xl font-bold">${{ totalSum }}</span>
      </div>

      <div
        class="flex justify-center align-center gap-1 p-5 py-3 mb-2 bg-rose-50 rounded-lg"
      >
        <img :src="tree" alt="Tree" />
        <span
          >This is a
          <span class="font-semibold text-red">carbon-neutral</span>
          delivery</span
        >
      </div>
      <div class="flex justify-center mt">
        <button
          class="w-56 flex items-center justify-center px-5 py-3 rounded-full bg-red text-white font-semibold"
        >
          Confirm order
        </button>
      </div>
    </div>
    <div v-else>
      <div class="flex justify-center">
        <img :src="illustration" class="image object-cover" />
      </div>
      <h2 class="flex justify-center text-green text-xl">
        Your added items will appear here
      </h2>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 250px;
  height: 250px;
}

.price {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.number {
  margin-right: 1rem;
}

.item {
  border-bottom: 1px solid hsl(14, 25%, 72%);
}

.mt {
  margin-top: 1rem;
}
</style>
