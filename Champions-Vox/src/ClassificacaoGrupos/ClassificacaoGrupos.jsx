// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Importe PropTypes
import "./ClassificacaoGrupos.css";

const ClassificacaoGrupos = ({ numParticipantes, participantes }) => {
  // Simulação de dados de classificação por grupos e resultados dos jogos
  const classificacaoCompleta = [
    {
      grupo: "Grupo A",
      times: participantes.slice(0, numParticipantes / 2).map((time) => ({
        nome: time,
        pontos: 0,
      })),
    },
    {
      grupo: "Grupo B",
      times: participantes.slice(numParticipantes / 2).map((time) => ({
        nome: time,
        pontos: 0,
      })),
    },
  ];

  return (
    <div className="classificacao-grupos">
      <h2>Classificação por Grupos</h2>
      {classificacaoCompleta.map((grupo, idx) => (
        <div className="grupo" key={idx}>
          <h3>{grupo.grupo}</h3>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {grupo.times.map((time, idxTime) => (
                <tr key={idxTime}>
                  <td>{time.nome}</td>
                  <td>{time.pontos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// Adicione validação de PropTypes para as props
ClassificacaoGrupos.propTypes = {
  numParticipantes: PropTypes.number.isRequired,
  participantes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ClassificacaoGrupos;
