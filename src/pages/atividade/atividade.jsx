import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../comnponentes/dataContext'
import { useContext } from 'react';

export default function Atividade() {

    const { atividades, setAtividades} = useContext(DataContext);
    const navigate = useNavigate()
    //const [atividades, setAtividades] = useState([]);
    const [nome, setNome] = useState('');
    const [dataLimite, setDataLimite] = useState('');
  
    const adicionarAtividade = (event) => {
      event.preventDefault();
      if (nome.trim() === "") {
        alert("O campo nome é obrigatório.");
        return;
      }
      if (dataLimite.trim() === "") {
        alert("O campo data é obrigatório.");
        return;
      }
      const novaAtividade = {
        nome: nome,
        dataLimite: dataLimite
      };
      
      setAtividades([...atividades, novaAtividade]);
      setNome('');
      setDataLimite('');
      alert("Atividade adicionada com sucesso!");
    }
    
  
    const removerAtividade = (index) => {
      const novasAtividades = [...atividades];
      novasAtividades.splice(index, 1);
      setAtividades(novasAtividades);
    }

    return (
        <div>
            <form className='formulario' onSubmit={adicionarAtividade}>
                <label htmlFor="nome">Nome da atividade:</label>
                <input className='inputnome' type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                <label htmlFor="dataLimite">Data limite:</label>
                <input className='inputdata' type="date" id="dataLimite" value={dataLimite} onChange={(event) => setDataLimite(event.target.value)} />
                <button type="submit">Adicionar</button>
                <br></br>
                <button onClick={() => navigate("/home")}>
                clique para ir para a home
            </button>
            </form>
            <ul>
                {atividades.map((atividade, index) => (
                    <li className='lista' key={index}>
                        <span>{atividade.nome} - {atividade.dataLimite}</span>
                        <button onClick={() => removerAtividade(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}