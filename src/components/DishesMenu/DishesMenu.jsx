import "./DishesMenu.scss";
import { useEffect } from "react";

const DishesMenu = ({
  dishes,
  setFilteredDishes,
  filterParameters,
  setFilterParameters,
  filteredDishes,
}) => {
  function filterDishesByOrderType(orderType) {
    const newFilterParameters = {
      ...filterParameters,
      orderType: orderType,
    };
    setFilterParameters(newFilterParameters);
  }

  useEffect(() => {
    const filteredDishes = dishes.filter((dish) => {
      const isOrderTypeMatch =
        filterParameters.orderType === "All" ||
        dish.orderType === filterParameters.orderType;

      const isCategoryMatch =
        filterParameters.category === "all" ||
        dish.category.key === filterParameters.category;

      const isSearchQueryMatch = dish.description
        .toLowerCase()
        .includes(filterParameters.searchQuery.toLowerCase());

      return isOrderTypeMatch && isCategoryMatch && isSearchQueryMatch;
    });

    setFilteredDishes(filteredDishes);
  }, [dishes, filterParameters]);

  return (
    <div>
      <div className="dishes-menu-top">
        <h2 className="dishes-menu-title">Choose Dishes </h2>

        <select
          className="order-type"
          value={filterParameters.orderType}
          onChange={(e) => {
            const selectedFilter = e.target.value;
            filterDishesByOrderType(selectedFilter);
            console.log(selectedFilter);
          }}
        >
          <option value="All">All</option>
          <option value="Dine In">Dine In</option>
          <option value="To go">To go</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>

      <div className="dishes-menu">
        {filteredDishes.map((foods) => {
          const { id, image, description, price, bowl } = foods;
          return (
            <div className="food-card" key={id}>
              <img className="food-image" src={image} />
              <p className="food-description"> {description}</p>
              <p className="food-price">{price}</p>
              <p className="food-bowl">{bowl} Bowls available</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DishesMenu;
