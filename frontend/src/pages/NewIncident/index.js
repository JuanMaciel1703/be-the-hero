import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img id="logo" src={logo} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>                    
                    <Link to="/profile" className="link">
                        <FiArrowLeft size={16} color="#0097e6" />
                        Voltar a Home
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor (em reais)"/>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}