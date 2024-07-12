import { foods } from "./foods";

const orders = [
  {
    id: 1,
    image: "../../../public/eren-jaegar.svg",
    name: "Eren Jaegar",
    menu: [foods[0]],
    price: 125,
    status: "completed",
  },
  {
    id: 2,
    image: "../../../public/reiner-braunn.svg",
    name: "Reiner Braunn",
    menu: [foods[1]],
    price: 145,
    status: "preparing",
  },
  {
    id: 3,
    image: "../../../public/levi-ackerman.svg",
    name: "Levi Ackermann",
    menu: [foods[2]],
    price: 105,
    status: "pending",
  },
  {
    id: 4,
    image: "../../../public/historia-reiss.svg",
    name: "Historia Reiss",
    menu: [foods[3]],
    price: 45,
    status: "completed",
  },
  {
    id: 5,
    image: "../../../public/hanji-zoe.svg",
    name: "Hanji Zoe",
    menu: [foods[4]],
    price: 245,
    status: "completed",
  },
];

export { orders };
