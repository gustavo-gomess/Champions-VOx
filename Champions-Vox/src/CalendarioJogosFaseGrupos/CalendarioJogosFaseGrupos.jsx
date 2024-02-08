import React, { Component } from "react";
import "./CalendarioJogosFaseGrupos.css";

class CalendarioJogosFaseGrupos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placares: {},
    };
  }

  handlePlacarChange(index, time, valor) {
    const { placares } = this.state;
    this.setState({
      placares: {
        ...placares,
        [index]: {
          ...placares[index],
          [time]: valor,
        },
      },
    });
  }

  render() {
    const { grupos } = this.props;
    const { placares } = this.state;

    // Verifica se grupos está definido e não é vazio antes de mapeá-lo
    if (!grupos || grupos.length === 0) {
      return <div>Não há grupos para exibir</div>;
    }

    return (
      <div className="calendario-jogos">
        <h2>Calendário de Jogos da Fase de Grupos</h2>
        {grupos.map((grupo, idxGrupo) => (
          <div className="grupo" key={idxGrupo}>
            <h3>{grupo.nome}</h3>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Time Casa</th>
                  <th>Time Fora</th>
                  <th>Placar Casa</th>
                  <th>Placar Fora</th>
                </tr>
              </thead>
              <tbody>
                {grupo.jogos.map((jogo, idxJogo) => (
                  <tr key={idxJogo}>
                    <td>{jogo.data}</td>
                    <td>{jogo.timeCasa}</td>
                    <td>{jogo.timeFora}</td>
                    <td>
                      <input
                        type="number"
                        value={
                          placares[idxGrupo]?.[idxJogo]?.casa ||
                          jogo.placarCasa ||
                          ""
                        }
                        onChange={(e) =>
                          this.handlePlacarChange(
                            idxGrupo,
                            idxJogo,
                            "casa",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={
                          placares[idxGrupo]?.[idxJogo]?.fora ||
                          jogo.placarFora ||
                          ""
                        }
                        onChange={(e) =>
                          this.handlePlacarChange(
                            idxGrupo,
                            idxJogo,
                            "fora",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
}

export default CalendarioJogosFaseGrupos;
