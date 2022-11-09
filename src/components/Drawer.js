import React from 'react'

function Drawer() {
  return (
    <div className="overlay">
    <div className="drawer">
      <h2 className="d-flex justify-between mb-30">
        Корзина <img className="removeBtn cu-p" src="img/btn-remove.svg" />
      </h2>
      <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(img/sneakers/1.png)" }}
            className="cartItemImg"
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5000 грн</b>
          </div>
          <img
            className="removeBtn"
            src="img/btn-remove.svg"
            alt="remove"
          />
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div
            style={{ backgroundImage: "url(img/sneakers/1.png)" }}
            className="cartItemImg"
          ></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>5000 грн</b>
          </div>
          <img
            className="removeBtn"
            src="img/btn-remove.svg"
            alt="remove"
          />
        </div>
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li className="d-flex mb-30">
            <span>Итого:</span>
            <div></div>
            <b>10000 грн</b>
          </li>
          <li className="d-flex mb-30">
            <span>Налог 5%</span>
            <div></div>
            <b>500 грн</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="img/arrow.svg" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Drawer