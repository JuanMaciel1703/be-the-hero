import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img id="logo" src={logo} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>                    
                    <Link to="/login" className="link">
                        <FiArrowLeft size={16} color="#0097e6" />
                        Voltar ao Login
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="WhatsApp" type="phone"/>

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" maxLength={2} style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}