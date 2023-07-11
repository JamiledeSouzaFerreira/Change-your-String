//fontes
var txtFontes = document.querySelector('input#txtFontes')
var btnFontes = document.querySelector('input#btnFontes')
btnFontes.addEventListener("click", maiúsculo)
btnFontes.addEventListener("click", minúsculo)
function maiúsculo (){
    let res = document.querySelector('h3#resMaiúsculo')
    let txt = String(txtFontes.value)
    res.innerHTML = txt.toUpperCase()
}
function minúsculo (){
    let res = document.querySelector('h3#resMinúsculo')
    let txt = String(txtFontes.value)
    res.innerHTML = txt.toLowerCase()
}
//temperatura
var txtTemperatura = document.querySelector('input#txtTemperatura')
var btnTemperatura = document.querySelector('input#btnTemperatura')
btnTemperatura.addEventListener("click", kelvin)
btnTemperatura.addEventListener("click", faren)
function kelvin (){
    let res = document.querySelector('h3#resKelvin')
    let txt = Number.parseFloat(txtTemperatura.value)
    var kelvin = txt + 273
    res.innerHTML = (kelvin + ' Kelvin')
}
function faren(){
    //document.body.style.backgroundColor = "red"
    let txt = Number.parseFloat(txtTemperatura.value)
    
    let res = document.querySelector('h3#resFaren')
    res.innerHTML = (fahrenheit + 'faren')
}
//moedas