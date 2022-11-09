import React from 'react'

function Card() {
  return (
    <div className="card">
    <img
      src="/img/sneakers/1.png"
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
  )
}

export default Card