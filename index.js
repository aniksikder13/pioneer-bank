function getElement(id) {
    return document.getElementById(id)
}

getElement('login').addEventListener('submit', function(e){
    e.preventDefault()
    getElement('loginArea').style.display='none'
    getElement('transactionArea').style.display='flex'
})

function setAmount(id1, id2){
    const value= parseFloat(getElement(id1).value)
    const currentValue= parseFloat(getElement(id2).innerText)
    return value+currentValue  
}

function setAmount2(id1, id2){
    const value= parseFloat(getElement(id1).value)
    const currentValue= parseFloat(getElement(id2).innerText)
    return currentValue-value
}


getElement('depositSubmit').addEventListener('submit', function(e){
    e.preventDefault()
    getElement('deposit').innerText= setAmount('depositInput', 'deposit')
    getElement('balance').innerText= setAmount('depositInput', 'balance')
})

getElement('withdrawSubmit').addEventListener('submit', function(e){
    e.preventDefault()
    getElement('withdraw').innerText= setAmount('withdrawInput', 'withdraw')
    getElement('balance').innerText= setAmount2('withdrawInput', 'balance')
})