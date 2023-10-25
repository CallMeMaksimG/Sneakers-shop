import { useContext } from 'react';
import AppContext from '../../context';

const Info = ({ text, description }) => {
    const { setCartOpened } = useContext(AppContext);
    return (
        <div className="cart__cart-info-wrapper">
            <div className="cart__cart-info">
                <p className="cart__cart-info-text">{text}</p>
                <p className="cart__cart-description">{description}</p>
                <button
                    onClick={() => setCartOpened(false)}
                    className="cart__cart-info-btn"
                >
                    Перейти в каталог
                </button>
            </div>
        </div>
    );
};

export default Info;
