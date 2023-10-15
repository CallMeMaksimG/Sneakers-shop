import './Card.scss';

function Card() {
    return (
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
    );
}

export default Card;
