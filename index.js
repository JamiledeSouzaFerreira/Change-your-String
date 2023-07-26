//toogle
var togFontes = document.querySelector('#checkFontes')
var togTemp = document.querySelector('#checkTemp')
var togMoedas = document.querySelector('#checkMoedas')
togFontes.addEventListener("click", toogleF)
togTemp.addEventListener("click", toogleT)
togMoedas.addEventListener("click", toogleM)
function toogleF (){
    let dados = document.querySelector('.dadosUsuárioF')
    let res = document.querySelector('.saídaF')
    if(togFontes.checked){
      dados.style.display = "block"
    } else { 
      dados.style.display = "none"
      res.style.display = "none"
    }
}
function toogleT (){
    let dados = document.querySelector('.dadosUsuárioT')
    let res = document.querySelector('.saídaT')
    if(togTemp.checked){
      dados.style.display = "inline-block"
    } else { 
      dados.style.display = "none"
      res.style.display = "none"
    }
}
function toogleM (){
  //document.body.style.backgroundColor = 'red'
    let dados = document.querySelector('.dadosUsuárioM')
    let res = document.querySelector('.saídaM')
    if(togMoedas.checked){
      dados.style.display = "inline-block"
    } else { 
      dados.style.display = "none"
      res.style.display = "none"
    }
}
//fontes
var txtFontes = document.querySelector('input#txtFontes')
var btnFontes = document.querySelector('input#btnFontes')
btnFontes.addEventListener("click", Fontes)
function Fontes (){
    let mai = document.querySelector('h3#resMaiúsculo')
    let bart = document.querySelector('h3#resBart')
    let txt = String(txtFontes.value)
    mai.innerHTML = txttoUpperCase()
    bart.innerHTML = txt
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
/*nav bar responsiva*/
class MobileNavbar {
    constructor(menuResponsivo, listaNav, navLinks) {
      this.menuResponsivo = document.querySelector(menuResponsivo);
      this.listaNav = document.querySelector(listaNav);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.listaNav.classList.toggle(this.activeClass);
      this.menuResponsivo.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.menuResponsivo.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.menuResponsivo) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menuResponsivo",
    ".listaNav",
    ".listaNav li",
  );
  mobileNavbar.init();