function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (fano.value.length < 4 || Number(fano.value) > ano) {
        window.alert('ERRO! Por favor verifique os dados')
    }else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 &&  idade <=12) {
                
                img.setAttribute('src', 'imagem/criancaM.jpg')
            }else if(idade < 21) {
                img.setAttribute('src', 'imagem/jovemM.jpg')
            }else if(idade < 60) {
                img.setAttribute('src', 'imagem/adultoM.jpg')
            }else {
                img.setAttribute('src', 'imagem/idosoM.jpg')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 &&  idade <=12) {
                img.setAttribute('src', 'imagem/criancaF.jpg')
            }else if(idade < 21) {
                img.setAttribute('src', 'imagem/jovemF.jpg')
            }else if(idade < 60) {
                img.setAttribute('src', 'imagem/adultoF.jpg')
            }else {
                img.setAttribute('src', 'imagem/idosoF.jpg')
            }
        }res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}