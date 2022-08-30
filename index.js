const billAmount = document.querySelector('#billAmount')
const cashGiven = document.querySelector('#cashGiven')
const myButton = document.querySelector('.myButton')
const message = document.querySelector('#message')
const notes = document.querySelectorAll('.notes') 

const availableNotes = [2000,500,100,20,10,5,1]

function buttonClicked(){
    hideMessage()
    if(billAmount.value >= 0){
        console.log(billAmount.value)
        console.log(cashGiven.value)
        if(billAmount.value <= cashGiven.value){
            const returnAmount = cashGiven.value - billAmount.value
            calculateChange(returnAmount)
        }
        else{
            displayMessage('do you want do the  dishes')
        }

    }else{
        displayMessage('Invalid Data')
    }
}


myButton.addEventListener('click', buttonClicked )

function hideMessage(){
    console.log("hideMessage")
    message.style.display = 'none'
}


function displayMessage(msg){
    console.log("displayMessage" + msg)
    message.style.display = 'block'
    message.innerHTML = msg
}

function calculateChange(amount){
    console.log("calculateChange")
    for(let i = 0 ; i < availableNotes.length; i++){
        const notesCount = Math.trunc(amount / availableNotes[i])
        amount = amount % availableNotes[i]
        notes[i].innerHTML = notesCount
    }
    
}