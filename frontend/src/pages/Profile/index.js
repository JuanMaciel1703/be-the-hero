import React, { useContext, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash, FiMapPin } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';
import logo from '../../assets/logo.svg';
import AppContext from '../../contexts/AppContext';
import Loading from '../../components/common/Loading';
import Notification from '../../components/common/Notification';

export default function Profile() {
    const RESULTS_PER_PAGE = 6
    
    const context = useContext(AppContext);
    const { user } = context;
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [notification, setNotification] = useState({ show: false, message: null, type: 'success' })
    const [pagination, setPagination] = useState({ page: 1, limit: RESULTS_PER_PAGE, total: 0 });    

    async function getIncidents(page = pagination.page) {
        setLoading(true);
    
        try {
            const response = await api.get(`/profile?page=${page}&limit=${pagination.limit}`);
            const tempArray = incidents;

            response.data.map(incident => {
                tempArray.push(incident)
            })
            setPagination({...pagination, page: page, total: response.headers['x-total-count']})
            setIncidents(tempArray)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    async function deleteIncident(incident) {
        if (!window.confirm(`Deseja realmente deletar o caso "${incident.title}"?`)) {
            return null;
        }

        setDeleteLoading(true);

        try {
            await api.delete(`/incidents/${incident.id}`);
            const newIncidentsArray = incidents.filter((originIncident, index) => {
                if (originIncident.id != incident.id) {
                    return originIncident;
                }
            })
            setIncidents(newIncidentsArray);
            setPagination({ ...pagination, total: pagination.total - 1 })
            setNotification({ 
                show: true, 
                message: 'Caso removido com sucesso.', 
                type: 'success' 
            })
        } catch (error) {
            setNotification({ 
                show: true, 
                message: 'Houve um erro ao deletar esse caso.', 
                type: 'error' 
            })
        } finally {
            setDeleteLoading(false);
        }
    }

    function handleCloseNotification() {
        setNotification({ show: false, message: null, type: 'success' });
    }

    useEffect(() => {
        getIncidents()
    }, [])

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Olá, {user.name}</span>
                <span className="muted-info">
                    <FiMapPin size={14} style={{ marginRight: '5px' }}/> 
                    {`${user.city} | ${user.uf}`}
                </span>

                <Link className="button" to="/incident/new" style={{ maxWidth: 300, margin: '0 1em', marginLeft: 'auto' }}>
                    Cadastrar novo caso
                </Link>

                <Link className="logout-button" to="/logout">
                    <FiPower size={18} color="#0097e6" />
                </Link>
            </header>

            <h1>
                Casos cadastrados 
                <span className="muted-info" style={{ fontSize: '18px' }}>
                    <strong> Total de casos: {pagination.total}</strong>
                </span>
            </h1>
            
            <InfiniteScroll
                dataLength={incidents.length}
                next={() => {
                    const nextPage = pagination.page + 1;
                    getIncidents(nextPage)
                }}
                hasMore={(incidents.length < pagination.total)}
                loader={
                    <Loading loading={loading}/>
                }
                style={{ overflowX: 'hidden' }}
            >
            <ul>
                { incidents.length > 0 &&
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>

                            <strong>Valor:</strong>
                            <p>R$ {incident.value.toFixed(2)}</p>

                            <button 
                                type="button" 
                                onClick={() => deleteIncident(incident)}
                                disabled={deleteLoading}
                            >
                                { !deleteLoading ? 
                                    <FiTrash size={20} color="#a8a8b3" />
                                    :
                                    <Loading loading={deleteLoading}/>
                                }
                            </button>
                        </li>
                    ))
                } 
            </ul>
            </InfiniteScroll>
            { incidents.length == 0 && <Loading loading={loading}/> }
            
            <Notification 
                show={notification.show} 
                message={notification.message}
                type={notification.type}
                onClose={handleCloseNotification}
            /> 
        </div>
    );
}