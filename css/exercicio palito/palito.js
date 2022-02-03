$(document).ready(function () {



    $('#imagen').hide()

    $('#mostrar').click(function () {

        $('#imagen').show(3700)
    })

    
    $('#acender').click(function(){
        a = $('#imagen').attr('src')
        
        if (a == 'IMAGENS/fosforo.png'){
            $('#imagen').attr('src', 'IMAGENS/aceso.png')
        }
    })
  
    
    $('#apagar').click(function(){

        b = $('#imagen').attr('src')

        if(b=='IMAGENS/aceso.png'){
            $('#imagen').attr('src', 'apagado.png')
        }
    })
    
    $('#esconder').click(function(){

        c = $('#imagen').attr('src')

        if(c=='apagado.png' || c == 'IMAGENS/fosforo.png'){
            $('#imagen').hide()
        }
    })


    $('#trocar').click(function(){

        d = $('#imagen').attr('src')

        if(d=='apagado.png'){
            $('#imagen').attr('src', 'IMAGENS/fosforo.png')
        }
    })










})


