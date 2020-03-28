import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';



import './style.css';
import logo from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Olá, APAD</span>

                <Link className="button" to="/incident/new">
                    Cadastrar novo caso
                </Link>

                <button type="button">
                    <FiPower size={18} color="#0097e6" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit expedita quo vitae ullam obcaecati, molestias veritatis quam dolorem. Dolore ratione quam sint saepe? Odit odio consequatur quidem dolores reprehenderit!</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}