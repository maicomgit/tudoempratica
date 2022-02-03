$(document).ready(function(){
    // $('#divpai').before('antes')
    // $('#divpai').prepend('escreve dentro em sempre em cima')
    // $('#divpai').append('sempre em baixo do que ja tem ')
    // $('#divpai').after('depois ')
    // $('#divpai').remove()
    
    // $('#divneta').parent().text('oi')
    // $('#divpai').find('#divneta').length
    // $('#divfilho').closest('#divpai')
    
    // $('#divclas1').addClass('divclas1')
    // $('#divclas2').removeClass('divclas2')
    $('#divclas3').hasClass('divclas2')

    $('#divclas3').toggleClass('divclas3')  


    a=1

    $('#button1').click(function(){
        // alert('clicou no botao')
        console.log(`o valor de a é: ${a}`)
        a = a+1
        if ($('#teste').css('display') == 'none'){
            $('#teste').show()
        }else{
            $('#teste').hide()
        }

         
    } )

})


    