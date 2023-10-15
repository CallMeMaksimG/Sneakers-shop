function App() {
    return (
        <>
            <div className="overlay">
                <div className="cart">
                    <h2>Корзина</h2>
                    <div className="cart__item">
                        <img className="cart__item-img" src='./img/sneakers/NB990v3.jpg' alt="New Balance 990v3"></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn"><img src="./img/delete.svg"></img></button>
                    </div>
                    <div className="cart__item">
                        <img className="cart__item-img" src='./img/sneakers/NB990v3.jpg' alt="New Balance 990v3"></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn"><img src="./img/delete.svg"></img></button>
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__total-price">
                            <span>Итог</span>
                            <span className="cart__price">89 990 руб.</span>
                        </div>
                        <div className="cart__bottom-btn-wrapper"><button className="cart__bottom-btn">Оформить заказ</button></div>
                    </div>
                </div>
            </div>
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
                    <div className="main__top">
                        <h1 className="main__title">Все кроссовки</h1>
                        <div className="search">
                            <img src="./img/search.svg" alt="search" />
                            <input
                                className="search__input"
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                    <div className="cards">
                        <div className="cards__item">
                            <div className="card__item-favorit">
                                <img src="./img/heart-unliked.svg"></img>
                            </div>
                            <img src="./img/sneakers/NB990v3.jpg"></img>
                            <p className="cards__item-brand">New Balance</p>
                            <p className="cards__item-model">
                                990 v3 x JJJJound
                            </p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    87 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="card__item-favorit">
                                <img src="./img/heart-unliked.svg"></img>
                            </div>
                            <img src="./img/sneakers/NB990v5.jpg"></img>
                            <p className="cards__item-brand">New Balance</p>
                            <p className="cards__item-model">
                                990 v5 x Aimé Leon Dore
                            </p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    119 990 руб.
                                </span>
                                <button className="cards__item-btn btn">
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
                        <div className="cards__item">
                            <div className="card__item-favorit">
                                <img src="./img/heart-unliked.svg"></img>
                            </div>
                            <img src="./img/sneakers/NB990v3.jpg"></img>
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
                            <div className="card__item-favorit">
                                <img src="./img/heart-unliked.svg"></img>
                            </div>
                            <img src="./img/sneakers/NB990v3.jpg"></img>
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
