import { useState } from 'react';
import axios from 'axios';

import { useCart } from '../../hooks/useCart';
import Info from '../Info.jsx/Info';
import './Cart.scss';

function Cart({ onClose, items = [], onRemove, opened }) {
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { cartItems, setCartItems, totalPrice } = useCart();

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('http://localhost:30001/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            cartItems.forEach((item) => {
                axios.delete('http://localhost:30001/cart/' + item.id);
            });
        } catch (error) {
            alert('Не удалось создать заказ');
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <div className={`overlay ${opened ? `overlay--open` : ''}`}>
            <div className="cart">
                <div className="cart__close" onClick={onClose}>
                    <img
                        className="cart__close-btn"
                        src="./img/icon/close.svg"
                        alt="close"
                    ></img>
                </div>
                <h2>Корзина</h2>

                {items.length > 0 ? (
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
                                                onRemove(item.id, items)
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
                                    {totalPrice} руб.
                                </span>
                            </div>
                            <div className="cart__bottom-btn-wrapper">
                                <button
                                    disabled={isLoading}
                                    onClick={onClickOrder}
                                    className="cart__bottom-btn"
                                >
                                    Оформить заказ
                                </button>
                            </div>
                        </div>{' '}
                    </div>
                ) : (
                    <Info
                        description={
                            isOrderComplete
                                ? `Номер заказа - #${orderId}. В ближайшее время с Вами свяжутся для подтверждения заказа`
                                : ''
                        }
                        text={
                            isOrderComplete
                                ? 'Заказ успешно оформлен!'
                                : 'Ваша корзина пуста'
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Cart;
