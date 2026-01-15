# ❌⭕ Jogo da Velha (Tic-Tac-Toe)

Um jogo da velha clássico e interativo desenvolvido em **React**, criado para praticar o gerenciamento de estado (`useState`) e lógica de componentes.

## 💻 Sobre o Projeto

Este projeto foi desenvolvido como um exercício de estudos em desenvolvimento web. O objetivo foi criar a lógica completa do jogo, incluindo a alternância de turnos, verificação de vencedor e, como funcionalidade extra, um **placar de pontuação** persistente durante a sessão.

## 🚀 Funcionalidades

- **Jogabilidade:** Permite que dois jogadores joguem (X e O) no mesmo dispositivo.
- **Verificação de Vitória:** O sistema detecta automaticamente vitórias em linhas, colunas e diagonais.
- **Detecção de Empate:** Avisa quando o tabuleiro enche sem vencedores.
- **Placar (Scoreboard):** Contagem de pontos que se atualiza automaticamente a cada vitória de X ou O.
- **Reiniciar:** Botão para limpar o tabuleiro e começar uma nova rodada mantendo o placar.

## 🛠️ Tecnologias Utilizadas

- **ReactJS** (Hooks: `useState`)
- **JavaScript** (ES6+)
- **CSS3** (Estilização)

## 📦 Como rodar o projeto

Para rodar este projeto localmente em sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório** (ou baixe os arquivos):
   ```bash
   git clone [https://github.com/miojo01/TicTacToe](https://github.com/miojo01/TicTacToe)

2. Entre na pasta do projeto:
    ```bash
    cd nome-do-projeto

3. Instale as dependências:
    ```bash
    npm install

4. Rode o projeto:
    ```bash
    npm run dev

5. Acesse no navegador

## 🧠 Aprendizados
Durante o desenvolvimento deste projeto, pratiquei conceitos importantes do React:

Gerenciamento de Estado: Usando useState para controlar o tabuleiro, a vez do jogador e o placar.

Renderização Condicional: Exibir mensagens de vencedor ou o botão de reiniciar apenas nos momentos certos.

Imutabilidade: A importância de criar cópias dos arrays antes de modificá-los no React.

## Autor
Desenvolvido por Leonardo Batschauer (miojo01).

    