<script setup>
import CartButton from "@/components/button/CartButton.vue";
import AddButton from "@/components/button/AddButton.vue";
import { desserts as _desserts } from "./data";
import { computed, reactive } from "vue";
import Cart from "@/components/Cart.vue";

function computeReplaceImage(items) {
  const updatedItems = items.map((item) => {
    // Iterate over each image key and replace './assets/' with ''
    const updatedImages = Object.fromEntries(
      Object.entries(item.image).map(([key, value]) => [
        key,
        value.replace("./assets/", ""),
      ]),
    );

    return {
      ...item,
      image: updatedImages,
      amount: 0,
      cartState: false,
    };
  });

  return updatedItems;
}

const desserts = reactive(computeReplaceImage(_desserts));

const selectedDesserts = computed(() =>
  desserts.filter((dessert) => dessert.amount > 0),
);

const increment = (dessert) => {
  dessert.amount++;
};

const decrement = (dessert) => {
  if (dessert.amount == 1) {
    dessert.cartState = false;
  }
  dessert.amount--;
};

const handleClick = (dessert) => {
  increment(dessert);
  dessert.cartState = true;
};
</script>
<template>
  <div class="container bg-rose-50 p-5">
    <h1 class="text-3xl font-bold mb-5">Desserts</h1>
    <div class="dessert" v-for="dessert in desserts" :key="dessert.name">
      <div class="relative flex flex-col items-center">
        <img
          :src="dessert.image.mobile"
          class="w-full object-cover rounded-lg"
          alt="cake"
        />
        <div class="button">
          <AddButton
            v-if="!dessert.cartState"
            @click="() => handleClick(dessert)"
          />
          <CartButton
            v-else
            :amount="dessert.amount"
            :increment="() => increment(dessert)"
            :decrement="() => decrement(dessert)"
          />
        </div>
      </div>
      <div class="mt-10">
        <div class="description flex flex-col">
          <span class="text-rose-500">{{ dessert.category }}</span>
          <span class="font-semibold">{{ dessert.name }}</span>
          <span class="text-red font-semibold">${{ dessert.price }}</span>
        </div>
      </div>
    </div>

    <Cart numberItem="5" :desserts="selectedDesserts" />
  </div>
</template>

<style scoped>
.button {
  position: absolute;
  bottom: -2rem;
  z-index: 1000 !important;
}

.dessert {
  margin-bottom: 2rem;
}
</style>
