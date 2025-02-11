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
