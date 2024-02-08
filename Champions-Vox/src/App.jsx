import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial/PaginaInicial.jsx";
import ClassificacaoGrupos from "./ClassificacaoGrupos/ClassificacaoGrupos.jsx";
import CalendarioJogosFaseGrupos from "./CalendarioJogosFaseGrupos/CalendarioJogosFaseGrupos.jsx"; // Importe o componente CalendarioJogosFaseGrupos

function App() {
  const [numParticipantes, setNumParticipantes] = useState(null);
  const [participantes, setParticipantes] = useState([]);

  const handleParticipantesSubmit = (numParticipantes, participantes) => {
    setNumParticipantes(numParticipantes);
    setParticipantes(participantes);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<PaginaInicial onSubmit={handleParticipantesSubmit} />}
          />
          <Route
            path="/classificacao"
            element={
              <ClassificacaoGrupos
                numParticipantes={numParticipantes}
                participantes={participantes}
              />
            }
          />
          <Route
            path="/calendario-jogos"
            element={<CalendarioJogosFaseGrupos grupos={participantes} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
