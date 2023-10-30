import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import './Profile.scss';

function Profile() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:30001/orders');
            setOrders(data);
        }

        fetchData();
    }, []);

    return (
        <main className="profile">
            <section className="profile__nav">
                <Link to="/">
                    <button className="profile__nav-back-btn">
                        <img src="../../../img/icon/back.svg" alt="Назад" />
                    </button>
                </Link>
                <h1 className="main__title">Мои заказы</h1>
            </section>
            <section className="orders">
                {orders.map((order) => {
                    return (
                        <>
                            <h3 className="orders__number">Заказ #{order.id}</h3>
                            <section className="cards">
                                {order.items.map((card) => {
                                    return <Card {...card} />;
                                })}
                            </section>
                        </>
                    );
                })}
            </section>
        </main>
    );
}

export default Profile;
