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
    <div class="dessert">
      <div class="mt" v-for="dessert in desserts" :key="dessert.name">
        <div class="relative flex flex-col items-center">
          <picture class="w-full">
            <source
              :srcset="dessert.image.desktop"
              media="(min-width: 1440px)"
            />
            <source :srcset="dessert.image.tablet" media="(min-width: 768px)" />
            <img
              :src="dessert.image.mobile"
              class="rounded-lg w-full object-cover"
              alt="cake"
            />
          </picture>
          <div class="button">
            <AddButton
              v-if="!dessert.cartState"
              @click="() => handleClick(dessert)"
            />
            <CartButton
              v-else
              :amount="dessert.amount"
              @increment="() => increment(dessert)"
              @decrement="() => decrement(dessert)"
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
    </div>
    <Cart :numberItem="selectedDesserts.length" :desserts="selectedDesserts" />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
}

.button {
  position: absolute;
  bottom: -2rem;
  z-index: 1000 !important;
}

.mt {
  margin-bottom: 2rem;
}

.dessert {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
}
@media (max-width: 768px) {
  .dessert {
    display: flex;
    flex-direction: column; /* Empile les éléments */
    gap: 16px; /* Espacement vertical entre les éléments */
    padding: 16px;
  }
}
</style>
