$(document).ready(function () {



    $('#imagen').hide()

    $('#mostrar').click(function () {

        $('#imagen').show(3700)
    })

    
    $('#acender').click(function(){
        a = $('#imagen').attr('src')
        
        if (a == 'fosforo.png'){
            $('#imagen').attr('src', 'aceso.png')
        }
    })
  
    
    $('#apagar').click(function(){

        b = $('#imagen').attr('src')

        if(b=='aceso.png'){
            $('#imagen').attr('src', 'apagado.png')
        }
    })
    
    $('#esconder').click(function(){

        c = $('#imagen').attr('src')

        if(c=='apagado.png' || c == 'fosforo.png'){
            $('#imagen').hide()
        }
    })


    $('#trocar').click(function(){

        d = $('#imagen').attr('src')

        if(d=='apagado.png'){
            $('#imagen').attr('src', 'fosforo.png')
        }
    })










})


