//nav bar responsiva
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
//temperatura - adicionar uma mensagem pro caso de nenhum valor ter sido inserido
var txtTemperatura = document.querySelector('input#txtTemperatura')
var btnTemperatura = document.querySelector('input#btnTemperatura')
btnTemperatura.addEventListener("click", kelvin)
btnTemperatura.addEventListener("click", faren)
function kelvin (){
    let res = document.querySelector('h3#resKelvin')
    let txt = Number.parseFloat(txtTemperatura.value)
    let kelvin = txt + 273
    res.innerHTML = (kelvin + ' Kelvin')
}
function faren(){
    let res = document.querySelector('h3#resFaren')
    let txt = Number.parseFloat(txtTemperatura.value)
    let faren = [9*txt + (5*32)]/5
    res.innerHTML = (faren + ' Fahrenheit')
}
//moedas
var txtMoedas = document.querySelector('input#txtMoedas')
var btnMoedas = document.querySelector('input#btnMoedas')
btnMoedas.addEventListener("click", câmbio)
function câmbio(){
    let res = document.querySelector('h3#resMoeda')
    let txt = Number.parseFloat(txtMoedas.value)
    let rad = document.getElementsByName('radmoney')
    let dólar = txt / 4.87
    let libra = txt / 6.3
    let euro = txt / 5.36
    //pra utilizar os rádios é necessário relacioná-los pelo "name"?
    if (rad[0].checked){
        res.innerHTML = dólar 
    } else if (rad[1].checked){
        res.innerHTML = libra 
    } else if (rad[2].checked){
        res.innerHTML = euro
    }
}