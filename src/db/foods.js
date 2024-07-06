export const categories = [
  {
    id: 1,
    name: "All",
    key: "all",
  },
  {
    id: 2,
    name: "Hot Dishes",
    key: "hot-dishes",
  },
  {
    id: 3,
    name: "Cold Dishes",
    key: "cold-dishes",
  },
  {
    id: 4,
    name: "Soup",
    key: "soup",
  },
];

const [_, hotDishes, coldDishes, soup] = categories;

// export const foods = [
//   {
//     id: 1,
//     image: "/Image-2.png",
//     description: "Spicy seasoned seafood noodles ",
//     price: 2.29,
//     bowl: 20,
//     orderType: "Dine In",
//     category: hotDishes,
//   },
//   {
//     id: 2,
//     image: "/Image-2.png",
//     description: "Salted Pasta with mushroom sauce ",
//     price: 2.69,
//     bowl: 11,
//     orderType: "Dine In",
//     category: hotDishes,
//   },
//   {
//     id: 3,
//     image: "/Image-3.png",
//     description: "Beef dumpling in hot and sour soup ",
//     price: 2.99,
//     bowl: 16,
//     orderType: "Dine In",
//     category: soup,
//   },
//   {
//     id: 4,
//     image: "/Image-5.png",
//     description: "Healthy noodle with spinach leaf ",
//     price: 3.29,
//     bowl: 22,
//     orderType: "To go",
//     category: coldDishes,
//   },
//   {
//     id: 5,
//     image: "/Image-5.png",
//     description: "Hot spicy fried rice with omelet ",
//     price: 3.49,
//     bowl: 13,
//     orderType: "Delivery",
//     category: hotDishes,
//   },
//   {
//     id: 6,
//     image: "/Image-6.png",
//     description: "Spicy instant noodle with special omelette ",
//     price: 3.59,
//     bowl: 17,
//     orderType: "To go",
//     category: hotDishes,
//   },
//   {
//     id: 7,
//     image: "/Image-2.png",
//     description: "Spicy seasoned seafood noodles ",
//     price: 2.29,
//     bowl: 20,
//     orderType: "Dine In",
//     category: hotDishes,
//   },
//   {
//     id: 8,
//     image: "/Image-2.png",
//     description: "Salted Pasta with mushroom sauce ",
//     price: 2.69,
//     bowl: 11,
//     orderType: "Dine In",
//     category: hotDishes,
//   },
//   {
//     id: 9,
//     image: "/Image-3.png",
//     description: "Beef dumpling in hot and sour soup ",
//     price: 2.99,
//     bowl: 16,
//     orderType: "Dine In",
//     category: soup,
//   },
//   {
//     id: 10,
//     image: "/Image-5.png",
//     description: "Healthy noodle with spinach leaf ",
//     price: 3.29,
//     bowl: 22,
//     orderType: "To go",
//     category: coldDishes,
//   },
//   {
//     id: 11,
//     image: "/Image-5.png",
//     description: "Hot spicy fried rice with omelet ",
//     price: 3.49,
//     bowl: 13,
//     orderType: "Delivery",
//     category: hotDishes,
//   },
//   {
//     id: 12,
//     image: "/Image-6.png",
//     description: "Spicy instant noodle with special omelette ",
//     price: 3.59,
//     bowl: 17,
//     orderType: "To go",
//     category: hotDishes,
//   },
// ];

// db/foods.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getDishes = async () => {
  const dishesCollection = collection(db, "dishes");
  const dishesSnapshot = await getDocs(dishesCollection);
  const dishesList = dishesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dishesList;
};
