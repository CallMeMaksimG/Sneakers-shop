import './Card.scss';

function Card({brand, model, img, price}) {
    return (
        <div className="cards__item">
                            <div className="card__item-favorit">
                                <img src="./img/heart-unliked.svg"></img>
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
                                <button className="cards__item-btn btn" onClick={() => console.log({img, brand, model, price})}>
                                    <img src="./img/plus.svg"></img>
                                </button>
                            </div>
                        </div>
    );
}

export default Card;
