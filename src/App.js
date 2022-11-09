import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
    <Drawer/>

      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="sneakers d-flex justify-between">
          <Card />
          <div className="card">
            <img
              src="/img/sneakers/2.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/sneakers/3.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/img/sneakers/4.png"
              alt="sneakers"
              width={133}
              height={112}
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
