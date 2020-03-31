import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { FiLogIn, FiZap } from 'react-icons/fi';

import api from '../../services/api';
import AppContext from '../../contexts/AppContext';
import { MagicSpinner } from 'react-spinners-kit';
import Notification from '../../components/common/Notification';

function Logon(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: null, type: ''});
    const context = useContext(AppContext);
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        setLoading(true);
       
        try {
            const response = await api.post('login', { email, password });            
            context.user = response.data;
            await localStorage.setItem('@be-the-hero/user', JSON.stringify(response.data));
            history.push('/profile');
        } catch (error) {
            setNotification({
                show: true,
                message: 'Houve um erro ao realizar o login',
                type: 'error'
            })
        } finally {
            setLoading(false);
        }
    }

    function handleCloseNotification() {
        setNotification({ show: false, message: null, type: 'success' });
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img id="logo" src={logo} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" className="button">
                        { loading ? 
                            <MagicSpinner size={40} color="#fff" loading={loading}/> 
                            :
                            <span>
                                <FiLogIn size={18} style={{ marginRight: '10px' }}/>
                                Entrar
                            </span>
                        }
                    </button>

                    <Link to="/signup" className="link">
                        <FiZap size={16} color="#fbc531" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img id="heroes" src={heroesImg} alt="Heroes"/>
            <Notification
                show={notification.show} 
                message={notification.message}
                type={notification.type}
                onClose={handleCloseNotification}
            />
        </div>
    );
}

export default Logon;