const login= document.getElementById('login')
const loingArea= document.getElementById('loginArea')
const transactionArea= document.getElementById('transactionArea')

login.addEventListener('submit', function(e){
    e.preventDefault()
    loingArea.style.display='none'
    transactionArea.style.display='flex'
})