import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';

const Info = ({ text, description }) => {
    const { setCartOpened } = useContext(AppContext);
    return (
        <div className="cart__cart-info-wrapper">
            <div className="cart__cart-info">
                <p className="cart__cart-info-text">{text}</p>
                <p className="cart__cart-description">{description}</p>
                <Link to="/">
                    <button
                        onClick={() => setCartOpened(false)}
                        className="cart__cart-info-btn"
                    >
                        Перейти в каталог
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Info;
