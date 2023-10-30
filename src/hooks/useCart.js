import { useContext } from 'react';
import AppContext from '../context';

export const useCart = () => {
    const { cartItems, setCartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((acc, curentValue) => {
        return acc + curentValue.price;
    }, 0);

    return { cartItems, setCartItems, totalPrice };
};
