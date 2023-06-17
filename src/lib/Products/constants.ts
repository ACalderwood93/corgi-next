import { IProduct } from "./Interfaces";

export const Products: IProduct[] = [
  {
    name: "Essentials",
    price: 15,
    priceWithoutExcess: 20,
    index: 1,
    display: true,
  },
  {
    name: "Starter",
    price: 18,
    priceWithoutExcess: 24,
    index: 2,
    display: true,
  },
  {
    name: "Advanced",
    price: 21,
    priceWithoutExcess: 28,
    index: 3,
    display: true,
  },
  {
    name: "Complete",
    price: 24,
    priceWithoutExcess: 32,
    index: 4,
    display: true,
  },
  {
    name: "Annual Boiler Service",
    price: 7,
    priceWithoutExcess: 7,
    index: 5,
    display: false,
  },
];
