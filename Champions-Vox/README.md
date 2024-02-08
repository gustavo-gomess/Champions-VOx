## Documentação do Projeto

### Introdução

Este projeto é uma aplicação web desenvolvida com React, utilizando o Vite como ambiente de desenvolvimento. O sistema é responsável por gerenciar um conjunto de participantes e exibir informações relevantes sobre eles, incluindo uma página inicial, classificação dos grupos e um calendário de jogos da fase de grupos.

### Componentes Principais

- **App**: O componente `App` é o componente principal da aplicação. Ele configura o roteamento utilizando o `react-router-dom` e mantém o estado dos participantes. Este componente é responsável por renderizar os outros componentes com base nas rotas especificadas.

- **PaginaInicial**: O componente `PaginaInicial` é responsável por exibir um formulário para inserir o número de participantes e suas informações.

- **ClassificacaoGrupos**: O componente `ClassificacaoGrupos` exibe a classificação dos grupos com base nos participantes inseridos.

- **CalendarioJogosFaseGrupos**: O componente `CalendarioJogosFaseGrupos` mostra o calendário de jogos da fase de grupos com base nos participantes inseridos.

### Funcionamento

O componente `App` configura o roteamento utilizando o `BrowserRouter` do `react-router-dom`. Ele possui três rotas principais:

1. **Rota "/":** Esta rota exibe a página inicial onde o usuário pode inserir o número de participantes e suas informações. O componente `PaginaInicial` é renderizado e recebe a função `handleParticipantesSubmit` como prop para lidar com o envio do formulário.

2. **Rota "/classificacao":** Esta rota exibe a classificação dos grupos com base nos participantes inseridos. O componente `ClassificacaoGrupos` é renderizado e recebe o número de participantes e a lista de participantes como props.

3. **Rota "/calendario-jogos":** Esta rota exibe o calendário de jogos da fase de grupos com base nos participantes inseridos. O componente `CalendarioJogosFaseGrupos` é renderizado e recebe a lista de participantes como props.

### Inicialização

Para iniciar o aplicativo, execute o arquivo `main.jsx` com um ambiente de desenvolvimento React configurado. Certifique-se de ter todas as dependências instaladas e configuradas corretamente.

```bash
npm start
```

### Observações

- Este projeto utiliza a API de renderização de Raiz Concorrente do React, disponível a partir da versão 18.
- Certifique-se de seguir as boas práticas de desenvolvimento e manutenção de código ao contribuir para este projeto.
- Para mais informações sobre como executar e desenvolver o projeto, consulte o arquivo `README.md` na raiz do projeto.

---

Esse README documenta os principais componentes, funcionalidades e o processo de inicialização do projeto. Adicione ou modifique as informações conforme necessário para atender às necessidades do seu projeto.

## Componente PaginaInicial

O componente `PaginaInicial` é responsável por exibir um formulário para iniciar o campeonato. Ele permite que o usuário selecione o número de participantes e insira seus nomes. Abaixo está uma descrição detalhada do componente:

### Funcionalidades

- **Seleção de Número de Participantes**: O usuário pode selecionar o número de participantes entre as opções de 4, 8, 10 ou 12.

- **Inserção de Nomes dos Participantes**: O usuário pode inserir o nome de cada participante nos campos de entrada fornecidos.

- **Validação de Entrada**: O componente valida se o número de participantes selecionado é válido (4, 8, 10 ou 12) e se todos os campos de entrada estão preenchidos antes de permitir o envio do formulário.

- **Navegação Programática**: Após o envio do formulário com sucesso, o componente utiliza a função `useNavigate` do `react-router-dom` para navegar para a página de classificação dos grupos.

### Props

- **onSubmit**: Uma função de retorno de chamada que é acionada quando o formulário é submetido com sucesso. Esta função recebe dois parâmetros: o número de participantes selecionados e um array com os nomes dos participantes.

### Estilos

O componente utiliza estilos CSS para estilização. Aqui estão algumas características dos estilos aplicados:

- **Estilo Geral**: O formulário é estilizado para ter uma aparência atraente e responsiva.
- **Cores e Fontes**: São utilizadas cores de fundo, bordas e texto para melhorar a legibilidade e a estética.
- **Responsividade**: Os estilos são ajustados para garantir uma boa experiência de usuário em dispositivos móveis e telas menores.

### Requisitos de Propriedades

O componente espera receber a propriedade `onSubmit`, que deve ser uma função de retorno de chamada.

### Observações

- Este componente faz uso extensivo de hooks do React, como `useState` e `useNavigate`, para gerenciar o estado e a navegação.
- Os estilos são definidos inline no próprio arquivo CSS do componente para facilitar a manutenção e o isolamento dos estilos.

### Estrutura do Componente

```jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./PaginaInicial.css";

const PaginaInicial = ({ onSubmit }) => {
  // Definição do estado local
  const [numParticipantes, setNumParticipantes] = useState("");
  const [participantes, setParticipantes] = useState([]);
  const navigate = useNavigate();

  // Handlers de eventos
  const handleNumParticipantesChange = (event) => {
    // Lógica para validar e atualizar o número de participantes
  };

  const handleParticipanteChange = (index, event) => {
    // Lógica para atualizar o nome do participante
  };

  const handleSubmit = (event) => {
    // Lógica para submeter o formulário
  };

  // Retorno JSX do componente
  return <div className="pagina-inicial">{/* Conteúdo do formulário */}</div>;
};

// Definição das propriedades esperadas
PaginaInicial.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaginaInicial;
```

### Estilo CSS

```css
/* Estilos do componente PaginaInicial */

/* Reset CSS */
/* ... */

/* Estilo da PaginaInicial */
/* ... */

/* Media queries para responsividade */
/* ... */
```

Esse é um guia detalhado sobre o componente `PaginaInicial`, incluindo funcionalidades, props, estilos e estrutura do componente. Certifique-se de personalizar conforme necessário para atender aos requisitos do seu projeto.

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

---

/_ CalendarioJogosFaseGrupos.css _/
.calendario-jogos {
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: "Roboto", sans-serif;
background-color: #1e1e1e;
color: #fff;
border-radius: 10px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
border: 4px solid #007bff;
padding: 20px;
margin-top: 20px;
}

.grupo {
margin-bottom: 20px;
}

h2 {
font-size: 24px;
margin-bottom: 10px;
}

h3 {
font-size: 20px;
margin-bottom: 10px;
}

table {
width: 100%;
border-collapse: collapse;
}

th,
td {
padding: 15px;
text-align: center;
border: 1px solid #ddd;
}

th {
background-color: #f2f2f2;
color: #000;
font-size: 18px;
}

input[type="number"] {
width: 50px;
padding: 5px;
border: 1px solid #ddd;
border-radius: 5px;
text-align: center;
}

input[type="number"]:focus {
outline: none;
border-color: #007bff;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}

## Componente CalendarioJogosFaseGrupos

O componente `CalendarioJogosFaseGrupos` é responsável por exibir o calendário de jogos da fase de grupos, permitindo que o usuário insira os placares dos jogos. Abaixo está uma descrição detalhada do componente:

### Funcionalidades

- **Exibição do Calendário de Jogos**: O componente exibe o calendário de jogos da fase de grupos, agrupando-os por grupos e mostrando a data, os times envolvidos e os placares.

- **Atualização dos Placares**: O usuário pode inserir os placares dos jogos utilizando campos de entrada numérica.

### Estrutura do Componente

```jsx
import React, { Component } from "react";
import "./CalendarioJogosFaseGrupos.css";

class CalendarioJogosFaseGrupos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placares: {},
    };
  }

  handlePlacarChange(indexGrupo, indexJogo, tipo, valor) {
    // Lógica para atualizar os placares no estado
  }

  render() {
    const { grupos } = this.props;
    const { placares } = this.state;

    // Lógica para renderizar o calendário de jogos
    // ...

    return (
      <div className="calendario-jogos">
        {/* Conteúdo do calendário de jogos */}
      </div>
    );
  }
}

export default CalendarioJogosFaseGrupos;
```

### Estilo CSS

```css
/* Estilos do componente CalendarioJogosFaseGrupos */

/* Reset CSS */
/* ... */

/* Estilo do CalendarioJogosFaseGrupos */
/* ... */
```

### Observações

- Este componente utiliza a classe `Component` do React para definir um componente de classe.
- Os placares são armazenados no estado local do componente para rastrear as mudanças dos placares dos jogos.
- Os estilos são definidos no arquivo `CalendarioJogosFaseGrupos.css` para garantir uma boa separação de preocupações.

---

Este é um guia detalhado sobre o componente `CalendarioJogosFaseGrupos`, incluindo funcionalidades, estrutura e estilos. Certifique-se de personalizar conforme necessário para atender aos requisitos do seu projeto.
