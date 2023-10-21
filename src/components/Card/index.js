import { useState } from 'react';
import './Card.scss';

function Card({ id, brand, model, img, price, onAddFavorite, onAddCart, onAddToFavorite }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onAddCart({ id, brand, model, img, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onAddToFavorite({ id, brand, model, img, price });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="cards__item">
            <div className="card__item-favorit" onClick={onAddFavorite}>
                <img onClick={onClickFavorite} src={!isFavorite ? './img/icon/heart-unliked.svg' : './img/icon/heart-like.svg'}></img>
            </div>
            <img src={img}></img>
            <p className="cards__item-brand">{brand}</p>
            <p className="cards__item-model">{model}</p>
            <div className="cards__item-bottom">
                <span className="cards__item-price">{price} руб.</span>
                <button
                    className={
                        !isAdded ? 'cards__item-btn' : 'cards__item-btn--active'
                    }
                    onClick={onClickPlus}
                >
                    <img
                        src={
                            !isAdded
                                ? './img/icon/plus.svg'
                                : './img/icon/check.svg'
                        }
                    ></img>
                </button>
            </div>
        </div>
    );
}

export default Card;
