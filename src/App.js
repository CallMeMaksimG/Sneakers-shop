function App() {
    return (
        <>
        <div className="grain"></div>
            <div className="wrapper">
                <header className="header">
                    <div className="header__left">
                        <img className="header__logo" src="/img/logo.svg"></img>
                        <div className="header__info">
                            <h3>SNEAKERSHOP</h3>
                            <p>Магазин кроссовок</p>
                        </div>
                    </div>

                    <ul className="header__right">
                        <li>
                            <img src="/img/cart.svg"></img>
                            <span>1205 руб.</span>
                        </li>
                        <li>
                            <img src="/img/account.svg"></img>
                            <span>Профиль</span>
                        </li>
                    </ul>
                </header>
                <main className="main">
                    <h1 className="main__title">Все кроссовки</h1>
                    <div className="cards">
                        <div className="cards__item">
                            <img src="./img/NB990v3.jpg"></img>
                            <p className="cards__item-brand">Brand</p>
                            <p className="cards__item-model">Name Model</p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    12 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                        <div className="cards__item">
                            <img src="./img/NB990v3.jpg"></img>
                            <p className="cards__item-brand">Brand</p>
                            <p className="cards__item-model">Name Model</p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    12 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                        <div className="cards__item">
                            <img src="./img/NB990v3.jpg"></img>
                            <p className="cards__item-brand">Brand</p>
                            <p className="cards__item-model">Name Model</p>
                            <div class="cards__item-bottom">
                                <span className="cards__item-price">
                                    12 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                        <div className="cards__item">
                            <img src="./img/NB990v3.jpg"></img>
                            <p className="cards__item-brand">Brand</p>
                            <p className="cards__item-model">Name Model</p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    12 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            </>
    );
}

export default App;
