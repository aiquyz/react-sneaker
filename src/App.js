function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} className="mr-10" src="/img/cart.svg" />
            <span>1000 грн</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40 ">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="sneakers d-flex justify-between">
          <div className="card">
            <img src="/img/sneakers/1.png" alt="sneakers" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.png" alt="sneakers" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.png" alt="sneakers" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.png" alt="sneakers" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>5500грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
