import React from 'react';
import "../../styles/Home.css";

const Home = () => {
    return (
        <section className="home">
        <div className="home__hero">
            <h1 className="home__title">Welcome to Buffalo Mistico</h1>
            <p className="home__subtitle">Discover unique fashion and art inspired by prehispanic culture.</p>
        </div>
        <div className="home__info">
            <p className="home__text">
                Explore our products and learn more about our history and the artisans behind our brand.
            </p>
        </div>
        </section>
    );
};

export default Home;