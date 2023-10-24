import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
import './Card.scss';

function Card({
    id,
    brand,
    model,
    img,
    price,
    onAddFavorite,
    onAddCart,
    onAddToFavorite,
    favorited = false,
    loading = false,
}) {
    const { cartItems,favorites, isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onAddCart({ id, brand, model, img, price });
    };

    const onClickFavorite = () => {
        onAddToFavorite({ id, brand, model, img, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <>
            <div className="cards__item">
                {loading ? (
                    <ContentLoader
                        speed={2}
                        width={'100%'}
                        height={'100%'}
                        viewBox="0 0 160 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect
                            x="5"
                            y="5"
                            rx="10"
                            ry="10"
                            width="150"
                            height="150"
                        />
                        <rect
                            x="5"
                            y="165"
                            rx="5"
                            ry="5"
                            width="100"
                            height="15"
                        />
                        <rect
                            x="5"
                            y="185"
                            rx="5"
                            ry="5"
                            width="150"
                            height="15"
                        />
                        <rect
                            x="5"
                            y="245"
                            rx="5"
                            ry="5"
                            width="84"
                            height="20"
                        />
                        <rect
                            x="118"
                            y="233"
                            rx="5"
                            ry="5"
                            width="32"
                            height="32"
                        />
                    </ContentLoader>
                ) : (
                    <>
                        <div
                            className="card__item-favorit"
                            onClick={onAddFavorite}
                        >
                            <img
                                onClick={onClickFavorite}
                                src={
                                    isItemAdded(favorites, id)
                                        ? './img/icon/heart-like.svg'
                                        : './img/icon/heart-unliked.svg'
                                }
                            ></img>
                        </div>
                        <img src={img}></img>
                        <p className="cards__item-brand">{brand}</p>
                        <p className="cards__item-model">{model}</p>
                        <div className="cards__item-bottom">
                            <span className="cards__item-price">
                                {price} руб.
                            </span>
                            <button
                                className={
                                    isItemAdded(cartItems, id)
                                        ? 'cards__item-btn--active'
                                        : 'cards__item-btn'
                                }
                                onClick={onClickPlus}
                            >
                                <img
                                    src={
                                        isItemAdded(cartItems, id)
                                            ? './img/icon/check.svg'
                                            : './img/icon/plus.svg'
                                    }
                                ></img>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Card;
