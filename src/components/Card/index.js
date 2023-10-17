import { useState } from 'react';
import './Card.scss';

function Card({brand, model, img, price, onAddFavorite}) {

    const [isAdded, setIsAdded] = useState(false);

    const onAddCart = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className="cards__item">
                            <div className="card__item-favorit" onClick={onAddFavorite}>
                                <img src="./img/icon/heart-unliked.svg"></img>
                            </div>
                            <img src={img}></img>
                            <p className="cards__item-brand">{brand}</p>
                            <p className="cards__item-model">
                                {model}
                            </p>
                            <div className="cards__item-bottom">
                                <span className="cards__item-price">
                                    {price} руб.
                                </span>
                                <button className={!isAdded ? "cards__item-btn" : "cards__item-btn--active"} onClick={onAddCart}>
                                    <img src={!isAdded ? "./img/icon/plus.svg" : "./img/icon/check.svg"}></img>
                                </button>
                            </div>
                        </div>
    );
}

export default Card;
