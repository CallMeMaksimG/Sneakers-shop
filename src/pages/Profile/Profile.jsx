import { Link } from 'react-router-dom';
import './Profile.scss';

function Profile() {
    return (
        <main className="profile">
            <section className="profile__nav">
                <Link to="/">
                    <button className="profile__nav-back-btn">
                        <img src="../../../img/icon/back.svg" alt="Назад" />
                    </button>
                </Link>
                <h1 className="profile__nav-title">Профиль</h1>
            </section>
        </main>
    );
}

export default Profile;
