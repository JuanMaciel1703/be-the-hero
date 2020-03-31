import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { MagicSpinner } from "react-spinners-kit";
import Notification from '../../components/common/Notification';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ 
        show: false, 
        message: null,
        type: 'success'
    })

    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true)
        
        const data = { name, email, password, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);

            setNotification({
                show: true,
                message: 'ONG cadastrada com sucesso!',
                type: 'success' 
            })

            setName('');
            setEmail('');
            setPassword('');
            setWhatsApp('');
            setCity('');
            setUf('');
        } catch (error) {
            setNotification({
                show: true,
                message: 'Houve um erro ao tentar criar a ONG.',
                type: 'error' 
            })
        } finally {
            setLoading(false);
        }
    }


    function handleCloseNotification() {
        setNotification({ show: false, message: null, type: 'success' });
    }

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
                
                <form onSubmit={handleRegister}> 
                    <input placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required
                    />
                   
                    <input placeholder="Email" type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required
                    />

                    <input placeholder="Senha" type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
                    />
                   
                    <input placeholder="WhatsApp" type="phone"
                        value={whatsapp}
                        onChange={e => setWhatsApp(e.target.value)} 
                        required
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}  
                            required
                        />
                        <input placeholder="UF" maxLength={2} style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)} 
                            required
                        />
                    </div>

                    <button className="button" type="submit">
                        { loading ? <MagicSpinner size={40} color="#fff" loading={loading}/> : "Cadastrar"}
                    </button>
                </form>
            </div>
            <Notification 
                show={notification.show} 
                message={notification.message}
                type={notification.type}
                onClose={handleCloseNotification}
            />
        </div>
    )
}