function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var datacerta = data.toLocaleDateString()
     
    msg.innerHTML = `Hoje: <strong>${datacerta}</strong> horário: <strong>${hora}</strong> horas`
    
    if (hora >=0 && hora < 12) {
        //'BOM DIA'
        document.body.style.background =  '#e6e6da'
        foto.src = 'imagem/manha.jpg'
    } else if ( hora >= 12 && hora < 18) {
        //'BOA TARDE'
        document.body.style.background = '#c23a00'
        foto.src = 'imagem/tarde.jpg'
    }else{
        //'BOA NOITE'
        document.body.style.background = '#9976ae'
        foto.src = 'imagem/noite.jpg'

    }
}