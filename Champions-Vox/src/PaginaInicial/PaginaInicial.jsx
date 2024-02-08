import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./PaginaInicial.css";

const PaginaInicial = ({ onSubmit }) => {
  const [numParticipantes, setNumParticipantes] = useState("");
  const [participantes, setParticipantes] = useState([]);
  const navigate = useNavigate();

  console.log("Renderizando PaginaInicial...");

  const handleNumParticipantesChange = (event) => {
    const value = parseInt(event.target.value);
    if ([4, 8, 10, 12].includes(value)) {
      setNumParticipantes(value);
    } else {
      setNumParticipantes("");
      alert(
        "Por favor, selecione um número válido de participantes (4, 8, 10 ou 12)."
      );
    }
  };

  const handleParticipanteChange = (index, event) => {
    const newParticipantes = [...participantes];
    newParticipantes[index] = event.target.value;
    setParticipantes(newParticipantes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário submetido...");
    if (numParticipantes && participantes.length === numParticipantes) {
      onSubmit(numParticipantes, participantes);
      console.log("onSubmit chamado com sucesso...");
      navigate("/classificacao"); // Usando navigate para navegação programática
    } else {
      alert(
        "Por favor, selecione o número de participantes e preencha todos os participantes."
      );
    }
  };

  console.log("Fim da renderização de PaginaInicial.");

  return (
    <div className="pagina-inicial">
      <h1>Inicie o seu campeonato</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Participantes:
          <select
            value={numParticipantes}
            onChange={handleNumParticipantesChange}
          >
            <option value="">Selecione</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </label>
        <br />
        {[...Array(numParticipantes)].map((_, index) => (
          <div key={index}>
            <label>
              Participante {index + 1}:
              <input
                type="text"
                value={participantes[index] || ""}
                onChange={(event) => handleParticipanteChange(index, event)}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="submit">Iniciar Campeonato</button>
      </form>
    </div>
  );
};

PaginaInicial.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaginaInicial;
