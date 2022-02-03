$(document).ready(function () {

    b = 0
    $('#div1').mousedown(function () {
        b = b + 1

        $('#div1').text(b)
    })

    d = 0
    $('#div2').mouseup(function () {
        d = d + 1

        $('#div2').text(d)
    })

    e = 0
    $('#div3').dblclick(function () {
        e = e + 1

        $('#div3').text(e)
    })
    f = 0
    $('#div4').mousemove(function () {
        f = f + 1

        $('#div4').text(f)
    })


    g = 0

    $('#div5').mouseover(function () {
        g = g + 1

        $('#div5').text(g)
    })

    h = 0

    $('#div6').mouseout(function () {
        h = h + 1

        $('#div6').text(h)
    })


    w = 0
    $(window).scroll(function () {
        w = w + 1 ;
        console.log(w);

    })

    n = 0
    $(window).resize(function () {
        $('#div8').css('width', '300px')
    })











})

