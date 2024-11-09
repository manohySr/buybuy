import dessertsJson from "@/data.json";

export interface Dessert {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export const desserts: Dessert[] = dessertsJson;
