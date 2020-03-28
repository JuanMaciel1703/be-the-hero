import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { FiLogIn, FiZap } from 'react-icons/fi';

function Logon(props) {
    return(
        <div className="logon-container">
            <section className="form">
                <img id="logo" src={logo} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>

                    <button type="submit" className="button">
                        <FiLogIn size={18} style={{ marginRight: '10px' }}/>
                        Entrar
                    </button>

                    <Link to="/signup" className="link">
                        <FiZap size={16} color="#fbc531" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>
            <img id="heroes" src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;