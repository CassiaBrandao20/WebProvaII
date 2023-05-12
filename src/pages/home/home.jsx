import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../comnponentes/dataContext'

export default function Home() {
    const navigate = useNavigate()
    const { atividades } = useContext(DataContext);

    return (
        <div>
            <div style={{ justifyContent: 'center', display: 'flex', marginBottom: '1rem' }}>
                <button onClick={() => navigate('/atividade')} style={{ marginRight: '1rem' }}>atividade</button>
                <button onClick={() => navigate('/Config')} style={{ marginRight: '1rem' }}>Configuração</button>
                <button onClick={() => navigate('/')}>sair</button>
            </div>
            <div>
                <ul>
                    {atividades.map((atividade, index) => (
                        <li className='lista' key={index}>
                            <span>{atividade.nome} - {atividade.dataLimite}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
