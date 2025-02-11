
//Gameboard factory
const Gameboard = (function() {
    const container = document.querySelector(".container");
    let board;
    const rows = 3;
    const cols = 3;

    function newBoard() {
        board = [];

        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < cols; j++) {
                board[i].push("");
            }
        }
        render();
    }

    function setBoard(row, col, currentPlayer) {
        board[row][col] = currentPlayer;

        render();
    }
    function getBoard() {
        return board;
    }
    
    function render() {
        container.replaceChildren();

        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');

            row.classList.add("row");
            container.appendChild(row);

            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                cell.classList.add("cell");

                cell.setAttribute("data-row", `${i}`);
                cell.setAttribute("data-col", `${i}`);

                cell.textContent = board[i][j];
                row.appendChild(cell);
            }
        }
    }
    return {
        newBoard,
        setBoard,
        getBoard
    };
})();

const Cell = (function)