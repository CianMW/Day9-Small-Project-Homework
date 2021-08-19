const makeBoard = () => {
    let boardContainer = document.getElementById("bingo-board")
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
       
        let newNumberNode = document.createElement("div")
            newNumberNode.innerText = bingoNumber
            newNumberNode.id = bingoNumber
            newNumberNode.classList.add("number")
        
        boardContainer.appendChild(newNumberNode)
        
    }
}





window.onload = () => {
    makeBoard()
}