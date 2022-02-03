$(document).ready(function () {

   
    $('#button1').click(function () {
        a = $('#input').val()

        $('#input').val(a + 1)

    })
    $('#button2').click(function () {
        b = $('#input').val()
        $('#input').val(b + 2)
    })

    $('#button3').click(function () {
        c = $('#input').val()
        $('#input').val(c + 3)

    })



    $('#button4').click(function () {
        d = $('#input').val()
        $('#input').val(d + 4)

    })




    $('#button5').click(function () {
        e = $('#input').val()
        $('#input').val(e + 5)

    })



    $('#button6').click(function () {
        f = $('#input').val()
        $('#input').val(f + 6)


    })


    $('#button7').click(function () {
        g = $('#input').val()
        $('#input').val(g+7)
    })



    $('#button8').click(function () {
      h = $('#input').val()
      $('#input').val(h+8)
    })



    $('#button9').click(function () {
       i= $('#input').val()
       $('#input').val(i+9)
    })



    $('#button0').click(function () {
       j= $('#input').val()
       $('#input').val(j+0)
    })


    $('#buttonx').click(function () {
        k=$('#input').val()
        $('#input').val(k+'*')

        
     })
     $('#buttonponto').click(function () {
        l=$('#input').val()
        $('#input').val(l+'.')
        
     })
     $('#buttonapa').click(function () {
     apa= $('#input').val()
      apa=apa.slice(0,-1)
      $('#input').val(apa)
        
     })
     $('#buttonmais').click(function () {
        n=$('#input').val()
        $('#input').val(n+'+')
        
     })
     $('#buttonmenos').click(function () {
        o=$('#input').val()
        $('#input').val(o +'-')        
     })
     $('#buttonbarra').click(function () {
        p=$('#input').val()
        $('#input').val(p+'/')        
     })
     $('#buttonc').click(function () {
      
        $("#input").val('')
        
     })
     $('#buttonpare').click(function () {
        r=$('#input').val()
        $('#input').val(r+'(')
        
     })
     $('#buttonpare2').click(function () {
        s=$('#input').val()
        $('#input').val(s+')')
        
     })
     
     
     
     $('#buttonigual').click(function () {
        resu=$('#input').val()
        try{
        resultado=eval(resu)
        $('#input').val(resultado)
      }catch{
         alert('sintaxe errada')
      }


        
      })

   
      
   
      
   
      











})