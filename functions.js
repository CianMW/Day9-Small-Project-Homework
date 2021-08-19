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

const chooseANumber = ()  => {
    let randomNumber = Math.round(Math.random()*76 +1)
    if (document.getElementById(randomNumber).classList.contains("marked") ) {
        chooseANumber()
    } else {
        markANumber(randomNumber)
    }
}

const markANumber = (num) => {
    document.getElementById(num).classList.add("marked")
}



window.onload = () => {
    makeBoard()
}