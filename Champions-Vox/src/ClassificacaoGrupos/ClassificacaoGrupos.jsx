import React from "react";
import { Link } from "react-router-dom";
import "./ClassificacaoGrupos.css";

const ClassificacaoGrupos = ({ numParticipantes, participantes }) => {
  console.log("Renderizando ClassificacaoGrupos...");

  // Simulação de partidas
  const partidas = [
    { timeCasa: "Time 1", timeFora: "Time 2", placarCasa: 2, placarFora: 1 },
    { timeCasa: "Time 3", timeFora: "Time 1", placarCasa: 0, placarFora: 2 },
    // Adicione mais partidas conforme necessário
  ];

  // Calcula a classificação dos grupos
  const classificacaoCompleta = [
    {
      grupo: "Grupo A",
      times: participantes.slice(0, numParticipantes / 2).map((time, idx) => ({
        nome: time,
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        saldoGols: 0,
      })),
    },
    {
      grupo: "Grupo B",
      times: participantes.slice(numParticipantes / 2).map((time, idx) => ({
        nome: time,
        pontos: 0,
        vitorias: 0,
        derrotas: 0,
        saldoGols: 0,
      })),
    },
  ];

  // Atualiza a classificação com base nas partidas simuladas
  partidas.forEach(({ timeCasa, timeFora, placarCasa, placarFora }) => {
    const timeCasaObj = classificacaoCompleta
      .flatMap((grupo) => grupo.times)
      .find((time) => time.nome === timeCasa);
    const timeForaObj = classificacaoCompleta
      .flatMap((grupo) => grupo.times)
      .find((time) => time.nome === timeFora);

    if (timeCasaObj && timeForaObj) {
      // Atualiza pontos
      if (placarCasa > placarFora) {
        timeCasaObj.pontos += 3;
        timeCasaObj.vitorias++;
        timeForaObj.derrotas++;
      } else if (placarCasa < placarFora) {
        timeForaObj.pontos += 3;
        timeForaObj.vitorias++;
        timeCasaObj.derrotas++;
      } else {
        timeCasaObj.pontos++;
        timeForaObj.pontos++;
      }

      // Atualiza saldo de gols
      timeCasaObj.saldoGols += placarCasa - placarFora;
      timeForaObj.saldoGols += placarFora - placarCasa;
    }
  });

  console.log("Fim da renderização de ClassificacaoGrupos.");

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
                <th>Vitórias</th>
                <th>Derrotas</th>
                <th>Saldo de Gols</th>
              </tr>
            </thead>
            <tbody>
              {grupo.times.map((time, idxTime) => (
                <tr key={idxTime}>
                  <td>{time.nome}</td>
                  <td>{time.pontos || 0}</td>
                  <td>{time.vitorias}</td>
                  <td>{time.derrotas}</td>
                  <td>{time.saldoGols}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {/* Adicione o botão para navegar para a página CalendarioJogosFaseGrupos */}
      <Link to="/calendario-jogos" className="link-button">
        Ver Calendário de Jogos
      </Link>
    </div>
  );
};

export default ClassificacaoGrupos;
