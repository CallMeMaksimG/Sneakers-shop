import './Cart.scss';

function Cart() {
    return (
        <div className="overlay" style={{ display: 'none' }}>
            <div className="cart">
                <div className="cart__close">
                    <img
                        className="cart__close-btn"
                        src="./img/close.svg"
                        alt="close"
                    ></img>
                </div>
                <h2>Корзина</h2>
                <div className="cart__items">
                    <div className="cart__item">
                        <img
                            className="cart__item-img"
                            src="./img/sneakers/NB990v3.jpg"
                            alt="New Balance 990v3"
                        ></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn">
                            <img src="./img/delete.svg"></img>
                        </button>
                    </div>
                    <div className="cart__item">
                        <img
                            className="cart__item-img"
                            src="./img/sneakers/NB990v3.jpg"
                            alt="New Balance 990v3"
                        ></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn">
                            <img src="./img/delete.svg"></img>
                        </button>
                    </div>
                    <div className="cart__item">
                        <img
                            className="cart__item-img"
                            src="./img/sneakers/NB990v3.jpg"
                            alt="New Balance 990v3"
                        ></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn">
                            <img src="./img/delete.svg"></img>
                        </button>
                    </div>
                    <div className="cart__item">
                        <img
                            className="cart__item-img"
                            src="./img/sneakers/NB990v3.jpg"
                            alt="New Balance 990v3"
                        ></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn">
                            <img src="./img/delete.svg"></img>
                        </button>
                    </div>
                    <div className="cart__item">
                        <img
                            className="cart__item-img"
                            src="./img/sneakers/NB990v3.jpg"
                            alt="New Balance 990v3"
                        ></img>
                        <div className="cart__item-info">
                            <p>New Balance 990 v3 </p>
                            <span>87 990 руб.</span>
                        </div>
                        <button className="cart__item-delete-btn">
                            <img src="./img/delete.svg"></img>
                        </button>
                    </div>
                </div>
                <div className="cart__bottom">
                    <div className="cart__total-price">
                        <span>Итог</span>
                        <span className="cart__price">89 990 руб.</span>
                    </div>
                    <div className="cart__bottom-btn-wrapper">
                        <button className="cart__bottom-btn">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
