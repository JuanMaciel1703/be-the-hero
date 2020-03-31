import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { MagicSpinner } from 'react-spinners-kit';
import Notification from '../../components/common/Notification';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ 
        show: false, 
        message: null,
        type: 'success'
    })

    async function handleCreateIncident(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post('/incidents', { title, description, value })
            setTitle('');
            setDescription('');
            setValue('');

            setNotification({ 
                show: true, 
                message: 'Caso cadastrado com sucesso.', 
                type: 'success' 
            })
        } catch (error) {
            setNotification({ 
                show: true, 
                message: 'Houve um erro ao cadastrar esse caso.', 
                type: 'error' 
            });
        } finally {
            setLoading(false);
        }
    }

    function handleCloseNotification() {
        setNotification({ show: false, message: null, type: 'success' });
    }

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
                
                <form onSubmit={handleCreateIncident}>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Título do caso"/>
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"></textarea>
                    <input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor (em reais)"/>

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