import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCardOpened] = useState(false);

  useEffect(() => {
    fetch("https://636eb042bb9cf402c807d61c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddToCard = (obj) => {
    setCartItems([...cartItems, obj])
  };
  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer items={cartItems} onClose={() => setCardOpened(false)} />
      )}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="sneakers">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              price={item.price}
              imageURL={item.imageURL}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCard(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
