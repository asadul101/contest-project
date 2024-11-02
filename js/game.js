// ============================= DOMs
// === start DOMs
let start            = document.querySelector(".start")
// === error DOM
let errorParent      = document.querySelector(".errorParent")
// === playerOne DOM
let playerOne        = document.querySelector(".playerOne")
let playerOneInput   = document.querySelector(".playerOneInput")
// === player two DOM
let playerTwo        = document.querySelector(".playerTwo")
let playerTwoInput   = document.querySelector(".playerTwoInput")
let playerTwoShow    = document.querySelector(".pTwoshow")
// === player three DOM
let playerThree      = document.querySelector(".playerThree")
let playerThreeInput = document.querySelector(".playerThreeInput")
let playerThreeShow  = document.querySelector(".pThreeshow")

// === other doms
let events           = document.querySelectorAll(".event")
let chances          = document.querySelectorAll(".chance")
let winnerPlayer     = document.querySelector(".winner")
let winner           = document.querySelector(".winnerDiv")

// ======================== start function
start.addEventListener('click' , ()=>{
    start.style     = "display:none"
    playerOne.style = "display:flex"
})

// ======================== Player 1 function 
let playerOnefunc = ()=>{
    if(playerOneInput.value == ''){
        events.forEach((item)=>{
            item.style = 'border-color: red;'
        })
    }else{
        events.forEach((item)=>{
            item.style = 'border-color: skyblue;'
        })
        if(playerOneInput.value > 20 || playerOneInput.value < 0){
            // ==== creating html element
            let error = document.createElement("h2")
            // ==== giving class name
            error.classList.add('error')
            // ==== making child
            errorParent.appendChild(error)
            // ==== giving content
            error.innerHTML = "You should only give number bigger then 0 and smaller then 20" + '<i class="fa-solid fa-circle-exclamation"></i>'
        }else{
            errorParent.style = 'display:none'
            playerOne.style   = 'display:none'
            playerTwo.style   = 'display:flex'
        }
    }
}
// ===== adding Enter key
let playerOneKey = (item)=>{
    if(item.key == "Enter"){
        playerOnefunc()
    }
}

// ========================== player two function
let playerTwoFunc = ()=>{
    if(playerTwoInput.value == ''){
        events.forEach((item)=>{
            item.style = 'border-color: red;'
        })
    }else{
        events.forEach((item)=>{
            item.style = 'border-color: skyblue;'
        })
        if(playerTwoInput.value != playerOneInput.value){
            winner.style = 'display:none'
            playerTwoShow.innerHTML-- 
            chances.forEach((item)=>{
                item.innerHTML++
                playerTwoInput.value = ''
                if(item.innerHTML >= 6){
                    playerTwo.style   = 'display:none'
                    playerThree.style = 'display:flex'
                    item.innerHTML    = 0
                }
            })
        }else{
            winner.style = 'display:block'
            winnerPlayer.innerHTML = 2
        }
    }
}
// ===== adding enter key
let playerTwoKey = (item)=>{
    if(item.key == "Enter"){
        playerTwoFunc()
    }
}
// ============================= playerThree Function
let playerThreeFunc = ()=>{
    if(playerThreeInput.value == ''){
        events.forEach((item)=>{
            item.style = 'border-color: red;'
        })
    }else{
        events.forEach((item)=>{
            item.style = 'border-color: skyblue;'
        })
        if(playerThreeInput.value != playerOneInput.value){
            winner.style = 'display:none'
            playerThreeShow.innerHTML--
            chances.forEach((item)=>{
                item.innerHTML++
                playerThreeInput.value = ''
                if(item.innerHTML >= 6){
                    item.innerHTML    = 6
                    winner.style = 'display:block'
                    winnerPlayer.innerHTML = 1
                    playerThree.style      = 'display:none'
                }
            })
        }else{
            winner.style               = 'display:block'
            winnerPlayer.innerHTML     = 3
            playerThreeInput.innerHTML = ''
        }
    }
}
// ===== adding enter key 
let playerThreeKey = (item)=>{
    if(item.key == "Enter"){
        playerThreeFunc()
    }
}



