//Gameboard factory

const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];    

    const getBoard = () => board.slice();

    const setCell = (index, playerMark) => {
        if (index >0 && index < 9 && board.index === "") {
            return true;
        }
        return false;
    }

    const resetBoard = () => {
        board.textContent = board;
    }
    return { getBoard, setCell, resetBoard }
})();

//Player Object

const Player = (name, mark) => {
   const getName = () => name;
   const getMark = () => mark;

   return { getName, getMark };
};

//GameController Module

const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let isGameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    const startGame = (player1, player2) => {
        players = [player1, player2];
        currentPlayerIndex = 0;
        isGameActive = true;
        Gameboard.resetBoard();
    };

    const getPlayer = () => players.currentPlayerIndex;

    const playRound = (index) => {
        if (!isGameActive) {
            console.log("Game is not active. Please reset");
            return;
        }

        const currentPlayer = getPlayer();
        const playersMark = Gameboard.setCell(index, currentPlayer.getMark());

        if (!playersMark) {
            console.log("Invalid Move!");
            return;
        }

        if (checkWin(currentPlayer.getMark())) {
            isGameActive = false;
            console.log(`Player ${currentPlayer.getName()} wins!`);
            return;
        }

        if (checkTie()) {
            isGameActive = false;
            console.log("Tie!");
            return;
        }

        switchPlayer();
    }

    const switchPlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        console.log(`Player ${getPlayer().getName()}'s turn (${getPlayer().getMark()})`);
    }

    const checkWin = (marker) => {
        const board = Gameboard.getBoard();
        return winningConditions.some((condition) =>
        condition.every((index) => board.index === marker));
    };

    const checkTie = () => {
        return Gameboard.getBoard().every((cell) => cell !== "");
    };

    const getGameStatus = () => {
        return isGameActive ? "Active" : "Ended";
    }

    return {
        startGame,
        playRound,
        getPlayer,
        getGameStatus
    };
})();