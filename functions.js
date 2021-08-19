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
    document.getElementsByClassName(num).classList.add("marked")
}

const makeUserBoard = () => {
    
    let userBoard = document.getElementById("user-board")
    for (let bingoNumber = 1; bingoNumber <= 24; bingoNumber++) {
    let randomNumber = Math.round(Math.random()*76 +1)
        let userNumberNode = document.createElement("div")
            userNumberNode.innerText = randomNumber
            userNumberNode.classList.add(randomNumber) 
            userNumberNode.classList.add("user-number")
        
        userBoard.appendChild(userNumberNode)
    }
}

window.onload = () => {
    makeBoard() ; 
    makeUserBoard()
}