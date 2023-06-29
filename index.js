//Fontes
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
//Temperatura
    //var celsius = Number.parseFloat(window.prompt('Escreva a temperatura em Celsius'))
    //var kelvin = celsius + 273
    //window.alert('A temperatura corresponde a ' + kelvin + ' graus Kelvin')

    var celsius = document.querySelector('input.text')
    var btn = document.querySelector('input#btn')


    btn.addEventListener("click", ckelvin)
    btn.addEventListener("click", cfarenheit)

    function ckelvin (){
        let c = Number.parseFloat(celsius.value)
        let kelvin = c+273
        let resposta = document.querySelector('h2.k-resposta')
        resposta.innerHTML = ('A temperatura corresponde a '+ kelvin + ' graus Kelvin')
    }

    function cfarenheit() {
        let c = Number.parseFloat(celsius.value)
        let f = [9*c + (5*32)]/5
        let resposta = document.querySelector('h2.f-resposta')
        resposta.innerHTML = ('A temperatura corresponde a '+ f + ' graus Farenheit')
    }
//Moedas
    //var real = Number.parseFloat(window.prompt('Digite o valor em real'))
    //var conversão = real/5
    //window.alert('O valor corresponde à ' + conversão + ' dólares' )
    
    function converter (){
        var txt = document.querySelector('input#txt')
        var txt = Number(txt.value)
        var res = document.querySelector('p#resposta')
        var rad = document.getElementsByName('radmoney')
        var moeda = ''
        //pra usarmos os radios precisaremos de uma varíavel que os represente pelo nome, e outra vazia que os represente individualmente
        if (rad[0].checked ){
            var dólar = txt / 5
        res.innerHTML = (` $${dólar} doláres`)
        } else if (rad[1].checked){
        var libra = txt / 7
        res.innerHTML = (`$${libra} libras`)
        } else if(rad[2].checked){
            var euro = txt / 5.7
            res.innerHTML = (`$${euro} euros`)
        } else {
            window.alert(' Por favor selecione uma moeda')
        }

    }