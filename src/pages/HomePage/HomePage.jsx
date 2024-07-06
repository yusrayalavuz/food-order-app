import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";
import { useAuth } from "@/components/AuthProvider";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
import Header from "@/components/Header/Header";

import { useState, useEffect } from "react";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import OrderPayment from "@/components/OrderPayment/OrderPayment";
import { getDishes } from "../../db/foods";

function HomePage() {
  const { fireStoreUser } = useAuth();

  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [filterParameters, setFilterParameters] = useState({
    orderType: "All",
    category: "all",
    searchQuery: "",
  });
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      const dishesData = await getDishes();
      setDishes(dishesData);
      setFilteredDishes(dishesData);
      setIsLoading(false);
    };

    fetchDishes();
  }, []);

  if (!fireStoreUser) return <p>Loading...</p>;
  if (isLoading) return <p>Loading dishes...</p>;

  const handleFoodCardClick = (food) => {
    const existingOrderIndex = orders.findIndex(
      (order) => order.id === food.id
    );

    if (existingOrderIndex === -1) {
      setOrders([...orders, { ...food, quantity: 1 }]);
    } else {
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex].quantity += 1;

      setOrders(updatedOrders);
    }
    setIsOrderOpen(true);
  };

  const handleDeleteItem = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleUpdateQuantity = (id, quantity) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, quantity } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div>
      <Sidebar />
      <div className={`main-root ${isOrderOpen ? "shrink" : ""}`}>
        <div>
          <Header
            userName={fireStoreUser.displayName}
            dishes={dishes}
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
            setFilteredDishes={setFilteredDishes}
          />
          <CategoryTabs
            dishes={dishes}
            setFilteredDishes={setFilteredDishes}
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
          />
          <DishesMenu
            dishes={dishes}
            filterParameters={filterParameters}
            setFilterParameters={setFilterParameters}
            filteredDishes={filteredDishes}
            setFilteredDishes={setFilteredDishes}
            onFoodCardClick={handleFoodCardClick}
          />
        </div>
      </div>
      <OrderPayment
        orders={orders}
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        onDeleteItem={handleDeleteItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

export default HomePage;
