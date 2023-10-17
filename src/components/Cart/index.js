import './Cart.scss';


const totalPrice = (items) => {
    console.log(items)
}
function Cart({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="cart__close" onClick={onClose}>
                    <img
                        className="cart__close-btn"
                        src="./img/icon/close.svg"
                        alt="close"
                    ></img>
                </div>
                <h2>Корзина</h2>
                <div className="cart__items">
                    {items.map((item) => {
                        return(
                        <div className="cart__item">
                            <img
                                className="cart__item-img"
                                src={item.img}
                                alt={item.brand + item.model}
                            ></img>
                            <div className="cart__item-info">
                                <p>{item.model}</p>
                                <span>{item.price} руб.</span>
                            </div>
                            <button className="cart__item-delete-btn">
                                <img src="./img/icon/delete.svg"></img>
                            </button>
                        </div>
                        )
                    })}
                </div>
                <div className="cart__bottom">
                    <div className="cart__total-price">
                        <span>Итог</span>
                        <span className="cart__price">{totalPrice} руб.</span>
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
