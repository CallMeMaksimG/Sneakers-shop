import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import AppContext from '../../context';
import './Profile.scss';

function Profile() {
    const { onAddToFavorite, onAddToCart } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            async function fetchData() {
                const { data } = await axios.get(
                    'http://localhost:30001/orders'
                );
                setOrders(data);
                setIsLoading(false);
            }
        } catch (error) {
            alert('Ошибка при запросе заказов');
            console.error(error);
        }
        async function fetchData() {
            const { data } = await axios.get('http://localhost:30001/orders');
            setOrders(data);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    return (
        <main className="profile">
            <section className="profile__nav">
                <Link to="/">
                    <button className="profile__nav-back-btn">
                        <img src={process.env.PUBLIC_URL + "/img/icon/back.svg"} alt="Назад" />
                    </button>
                </Link>
                <h1 className="main__title">Мои заказы</h1>
            </section>

            {orders.length > 0 ? (<section className="orders">
                {orders.map((order, index) => {
                    return (
                        <div key={index} className="orders__order">
                            <h3 className="order__number">
                                Заказ #{order.id}
                            </h3>
                            <section className="cards">
                                {isLoading
                                    ? [...Array(8)]
                                    : order.items.map((card, index) => {
                                          return (
                                              <Card
                                                  key={index}
                                                  loading={isLoading}
                                                  {...card}
                                              />
                                          );
                                      })}
                            </section>
                        </div>
                    );
                })}
            </section>) : (
                <h1 className="orders__empty">Вы еще не сделали ни одного заказа</h1>
            )}
            
        </main>
    );
}

export default Profile;
