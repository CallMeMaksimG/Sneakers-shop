import { useContext, useState } from 'react';
import AppContext from '../../context';
import './Cart.scss';
import Info from '../Info.jsx/Info';

function Cart({ onClose, cartItems = [], setCartItems, onRemove }) {
    const { setCartOpened } = useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = useState(false);

    const onClickOrder = () => {
        setIsOrderComplete(true);
        setCartItems([]);
    };

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

                {cartItems.length > 0 ? (
                    <div className="cart__items-wrapper">
                        <div className="cart__items">
                            {cartItems.map((item) => {
                                return (
                                    <div key={item.id} className="cart__item">
                                        <img
                                            className="cart__item-img"
                                            src={item.img}
                                            alt={item.brand + item.model}
                                        ></img>
                                        <div className="cart__item-info">
                                            <p>{item.brand}</p>
                                            <p>{item.model}</p>
                                            <span>{item.price} руб.</span>
                                        </div>
                                        <button
                                            className="cart__item-delete-btn"
                                            onClick={() =>
                                                onRemove(item.id, cartItems)
                                            }
                                        >
                                            <img src="./img/icon/delete.svg"></img>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__total-price">
                                <span>Итог</span>
                                <span className="cart__price">
                                    {cartItems.reduce((acc, curentValue) => {
                                        return acc + curentValue.price;
                                    }, 0)}{' '}
                                    руб.
                                </span>
                            </div>
                            <div className="cart__bottom-btn-wrapper">
                                <button
                                    onClick={onClickOrder}
                                    className="cart__bottom-btn"
                                >
                                    Оформить заказ
                                </button>
                            </div>
                        </div>{' '}
                    </div>
                ) : (
                    <Info text={isOrderComplete ? 'Заказ успешно оформлен!' : 'Ваша корзина пуста'}/>
                )}
            </div>
        </div>
    );
}

export default Cart;
