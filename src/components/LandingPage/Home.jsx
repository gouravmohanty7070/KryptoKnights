import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../../images/Home.svg';

const Home = () => {
    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    Starve Your Distractions with, <strong className="brand-name">KryptoKnights</strong>
                                </h1>
                                <h2 className="my-3">
                                    This will help you bring your focus, back into yourself.
                                    Made by students, for the students.
                                </h2>
                                <div className="mt-3">
                                    <NavLink to="/extension" className="btn-explore-now">Explore Now</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Home;