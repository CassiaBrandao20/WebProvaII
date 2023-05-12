import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Config(){

    const navigate = useNavigate()

    return(
        <div>
            <h2>Configuração</h2>
            <button onClick={() => navigate("/home")}>
                clique para ir para a home
            </button>
        </div>
    )
}