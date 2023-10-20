import { useState } from 'react';
import './Cart.scss';

function Cart({ onClose, items = [], onRemove }) {
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
                {items.length > 0 ? (<div className="cart__items-wrapper"><div className="cart__items">
                    {items.map((item) => {
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
                                    onClick={() => onRemove(item.id, items)}
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
                            {items.reduce((acc, curentValue) => {
                                return acc + curentValue.price;
                            }, 0)}{ ' ' }руб.
                        </span>
                    </div>
                    <div className="cart__bottom-btn-wrapper">
                        <button className="cart__bottom-btn">
                            Оформить заказ
                        </button>
                    </div>
                </div> </div>) : <div className='cart__cart-empty-wrapper'><div className="cart__cart-empty">
                    <p className="cart__cart-empty-text">Ваша корзина пуста</p>
                    <button className="cart__cart-empty-btn">Перейти в каталог</button>
                </div></div>}
                
                
            </div>
            </div>
        
    )
                        }

export default Cart;
