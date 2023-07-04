//fontes
var txtF = document.querySelector('input#txtFontes')
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
var btnTemperatura = document.querySelector('imput#btnTemperatura')
btnTemperatura.addEventListener("click", kelvin)
btnTemperatura.addEventListener("click", faren)
function kelvin (){

}
//moedas