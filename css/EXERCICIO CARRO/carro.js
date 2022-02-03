$(document).ready(function () {
    $('#abastecer').click(function () {
        $('#divgas').css('width', '200px')
        $('#turbo').css('width', '200px')
    })
    $('#concertar').click(function () {
        $('#imagencarro').css('margin-left', '0px')
        $('#imagencarro').css('margin-top', '0px')
        $('#imagencarro').attr('src', 'carro.png')
        $('#imagencarro').css('height', '250px')
        $('#imagencarro').css('width', '400px')
    })
    $('#ligar').mouseover(function () {
        alert('CARRO LIGADO')


        // SCRIPT PARA FAZER O TURBO FUNCIONAR
        $('#acionar').click(function () {
            alert('VOCE ACIONOU O TURBO ? CUIDADO TERÁ GRANDES EMOÇÕES')

        })
        // mover para a direita ok
        $(document).keydown(function (event) {
            console.log(event.which)
            tecla = event.which
            // gasolina ir acabando
            gasolina = $('#divgas').css('width')
            if (gasolina > '0px') {
                // COLISAO/////////////////////////////////
                colisao = $('#imagencarro').css('margin-left')
                colisao = parseInt(colisao)
                if (colisao > '-10') {
                    colisao = $('#imagencarro').css('margin-top')
                    colisao = parseInt(colisao)
                    if (colisao < '300') {
                        colisao = $('#imagencarro').css('margin-top')
                        colisao = parseInt(colisao)
                        if (colisao > '-150')
                            //////////////////////////////////////////////////////////////////
                            colisao = $('#imagencarro').css('margin-left')
                        colisao = parseInt(colisao)
                        if (colisao < '1300') {
                            if (tecla == '39') {

                                tecla = $('#imagencarro').css('margin-left')
                                tecla = parseInt(tecla)
                                b = 30
                                tecla = tecla + b
                                $('#imagencarro').css('margin-left', tecla)
                                // mudar a imagem
                                carro = $('#imagencarro').attr('src')
                                if (carro == 'carro_invertido.png' || carro == 'carro_cima_esquerda.png' || carro == 'carro_baixo_direita.png' || carro == 'carro_baixo_esquerda.png' || carro == 'carro_cima_direita.png') {
                                    $('#imagencarro').attr('src', 'carro.png')
                                }
                                // MODIFICAR A IMAGEM (DEIXAR ELA DO TAMANHO CERTO)
                                carro = $('#imagencarro').attr('src')
                                if (carro == 'carro_invertido.png' || carro == 'carro.png') {

                                    $('#imagencarro').css('height', '250px')
                                    $('#imagencarro').css('width', '400px')
                                }
                                // combustivel ir abaixando
                                ConsomeCombustivel(3)
                            }
                        } else { $('#imagencarro').attr('src', 'depositphotos_7596275-stock-illustration-car-with-crashed-front.jpg') }
                    }
                }
            }

        })
        // mover para cima
        $(document).keydown(function (event) {
            console.log(event.which)
            tecla = event.which
            // gasolina ir acabando
            gasolina = $('#divgas').css('width')
            if (gasolina > '0px') {
                // COLISAO//////////////////////////////////////////
                colisao = $('#imagencarro').css('margin-left')
                colisao = parseInt(colisao)
                if (colisao > '-10') {
                    colisao = $('#imagencarro').css('margin-top')
                    colisao = parseInt(colisao)
                    if (colisao < '300') {
                        colisao = $('#imagencarro').css('margin-left')
                        colisao = parseInt(colisao)
                        if (colisao < '1300') {
                            //////////////////////////////////////////////////////////////////
                            colisao = $('#imagencarro').css('margin-top')
                            colisao = parseInt(colisao)

                            if (colisao > '-150') {
                                if (tecla == '38') {
                                    tecla = $('#imagencarro').css('margin-top')
                                    tecla = parseInt(tecla)
                                    e = 50
                                    tecla = tecla - e
                                    $('#imagencarro').css('margin-top', tecla)
                                    // MUDAR A IMAGEM CONFORME AS DIREÇOES 
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_baixo_esquerda.png') {
                                        $('#imagencarro').attr('src', 'carro_cima_esquerda.png')
                                    }
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_baixo_direita.png') {
                                        $('#imagencarro').attr('src', 'carro_cima_direita.png')
                                    }
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro.png') {
                                        $('#imagencarro').attr('src', 'carro_cima_direita.png')
                                    }
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_invertido.png') {
                                        $('#imagencarro').attr('src', 'carro_cima_esquerda.png')
                                    }
                                    // MODIFICAR A IMAGEM (DEIXAR ELA DO TAMANHO CERTO)
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_cima_esquerda.png' || carro == 'carro_cima_direita.png') {
                                        $('#imagencarro').css('height', '400px')
                                        $('#imagencarro').css('width', '250px')
                                    }
                                    // combustivel ir abaixando
                                    ConsomeCombustivel(3)
                                }

                            }
                        }
                    } else { $('#imagencarro').attr('src', 'depositphotos_7596275-stock-illustration-car-with-crashed-frontparabaixo.jpg') }
                }
            }
        })
        // MOVER PARA A ESQUERDA
        $(document).keydown(function (event) {
            console.log(event.which)
            tecla = event.which
            // gasolina ir acabando
            gasolina = $('#divgas').css('width')
            if (gasolina > '0px') {
                // COLISAO/////////////////////////////////
                colisao = $('#imagencarro').css('margin-top')
                colisao = parseInt(colisao)
                if (colisao < '300') {

                    colisao = $('#imagencarro').css('margin-left')
                    colisao = parseInt(colisao)
                    if (colisao < '1300') {
                        colisao = $('#imagencarro').css('margin-top')
                        colisao = parseInt(colisao)
                        if (colisao > '-150') {
                            //////////////////////////////////////////
                            colisao = $('#imagencarro').css('margin-left')
                            colisao = parseInt(colisao)
                            if (colisao > '-10') {
                                if (tecla == '37') {
                                    tecla = $('#imagencarro').css('margin-left')
                                    tecla = parseInt(tecla)
                                    c = 50
                                    tecla = tecla - c
                                    $('#imagencarro').css('margin-left', tecla)
                                    // mudar a imagem
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro.png' || carro == 'carro_cima_esquerda.png' || carro == 'carro_baixo_direita.png') {
                                        $('#imagencarro').attr('src', 'carro_invertido.png')
                                    }
                                    // MODIFICAR A IMAGEM (DEIXAR ELA DO TAMANHO CERTO)
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_invertido.png') {
                                        $('#imagencarro').css('height', '250px')
                                        $('#imagencarro').css('width', '400px')
                                    }
                                    $('#imagencarro').attr('src', 'carro_invertido.png')
                                    // combustivel ir abaixando
                                    ConsomeCombustivel(3)
                                }
                            } else {
                                $('#imagencarro').attr('src', 'depositphotos_7596275-stock-illustration-car-with-crashed-front.jpg')

                            }
                        }
                    }
                }
            }
        })
        // mover para baixo
        $(document).keydown(function (event) {
            console.log(event.which)
            tecla = event.which
            // gasolina ir acabando
            gasolina = $('#divgas').css('width')
            if (gasolina > '0px') {
                // COLISAO/////////////////////////
                colisao = $('#imagencarro').css('margin-left')
                colisao = parseInt(colisao)
                if (colisao > '-10') {
                    colisao = $('#imagencarro').css('margin-top')
                    colisao = parseInt(colisao)
                    if (colisao > '-150') {
                        colisao = $('#imagencarro').css('margin-left')
                        colisao = parseInt(colisao)
                        if (colisao < '1300') {
                            //////////////////////////////////////
                            colisao = $('#imagencarro').css('margin-top')
                            colisao = parseInt(colisao)
                            if (colisao < '300') {
                                if (tecla == '40') {
                                    tecla = $('#imagencarro').css('margin-top')
                                    tecla = parseInt(tecla)
                                    d = 50

                                    tecla = tecla + d
                                    $('#imagencarro').css('margin-top', tecla)
                                    // mudar a imagem
                                    carro = $('#imagencarro').attr('src')

                                    if (carro == 'carro_cima_direita.png') {
                                        $('#imagencarro').attr('src', 'carro_baixo_direita.png')
                                    }
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro.png') {
                                        $('#imagencarro').attr('src', 'carro_baixo_esquerda.png')
                                    }
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_invertido.png' || carro == 'carro_cima_esquerda.png') {
                                        $('#imagencarro').attr('src', 'carro_baixo_direita.png')
                                    }
                                    // MODIFICAR A IMAGEM (DEIXAR ELA DO TAMANHO CERTO)
                                    carro = $('#imagencarro').attr('src')
                                    if (carro == 'carro_baixo_direita.png' || carro == 'carro_baixo_esquerda.png') {
                                        $('#imagencarro').css('height', '400px')
                                        $('#imagencarro').css('width', '250px')
                                    }
                                    // combustivel ir abaixando

                                    ConsomeCombustivel(3)
                                }
                            }
                        }
                    } else { $('#imagencarro').attr('src', 'depositphotos_7596275-stock-illustration-car-with-crashed-frontcima.jpg') }
                }
            }
        })

    })


    function ConsomeCombustivel(consumo) {
        gas = $('#divgas').css('width')
        gas = parseInt(gas)
        gas = gas - consumo
        $('#divgas').css('width', gas)
        // gasolina ir acabando
        gasolina = $('#divgas').css('width')
        if (gasolina == '0px') {
            alert('voce esta sem combustivel')
            $('#turbo').css('width', '0px')
        }
    }


})


































