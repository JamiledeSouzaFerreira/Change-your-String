var btn = document.querySelector('input.btn')

//event listeners
btn.addEventListener("click", maiúsculo)
btn.addEventListener("click", minúsculo)

//functions
function maiúsculo (){
    var txt = document.querySelector('input.txt')
    var txt = String(txt.value)
    var res = document.querySelector('h3#res-maiúsculo')
    res.innerHTML = txt.toUpperCase()
}
function minúsculo (){
    var txt = document.querySelector('input.txt')
    var txt = String(txt.value)
    var res = document.querySelector('h3#res-minúsculo')
    res.innerHTML = txt.toLowerCase()
}
