$(document).ready(() => {
    let titulo = "Eagle Hotel";
    let subtitulo = "Welcome!!!";

    $("#titulo").append(titulo);
    $("#subtitulo").append(subtitulo);
    $("#titulo-subtitulo").append(titulo + ' - ' + subtitulo);


    let quartos = ['single', 'single', 'double', 'double', 'deluxe', 'deluxe'];
    let andares = 8 * 10;
    let cont = 0;
    let status = ['occupied <i class="fas fa-lock"></i>', 'unoccupied <i class="fas fa-lock-open"></i>', 'reserved <i class="fas fa-suitcase"></i>', 'maintenance <i class="fas fa-screwdriver"></i>'];
    let statusQuartos=[];

    for (let i = 0; i <= andares; i++) {
        let statusAtual = '';
        let tamanho = '';
        if (cont == quartos.length) {
            cont = 0;
        }
        if (i == andares) {
            statusAtual = 'master'.toUpperCase();
            tamanho = 'l12';
        }
        else {
            tamanho = 'l2';
            statusAtual = quartos[cont].toUpperCase();
        }
            $('#quartos').append(
                '<div class="w3-col '+tamanho+'">' +
                    '<h4 class="w3-center">'+statusAtual+'</h4>' +
                    '<p>'+'Status: '+status[Math.floor(Math.random() * status.length)]+'</p>'+
                '</div>'
            );
        
        
        cont++;
        statusQuartos.push(statusAtual);
    }

    let mensagem = Math.floor(Math.random() * 15);
    let nomes = [
        'Zoé',
        
        'Ayla',
        
        'Liz',
        
        'Maitê',
        
        'Lis',
        
        'Agnes',
        
        'Pérola',
        
        'Agatha',
        
        'Lia',
        
        'Jade',
        
        'Ohana',
        
        'Olívia',
        
        'Ana Paula',
        
        'Aisha',
        
        'Jennifer',
    
        'Valentim',
        
        'Gael',
        
        'Ravi',
        
        'Ícaro',
        
        'Levi',
        
        'Edson',
        
        'Noah',
        
        'Lucca',
        
        'Theo',
        
        'Danilo',
        
        'Bento',
        
        'Eduardo',
        
        'Benício',
        
        'Leandro',
        
        'Samuel'
    ];
    let contadorMensagens=0;
    for(let i = 0; i < mensagem; i++){
        $("#mensagens").append("<div class='w3-col l6'>" + 
            nomes[Math.floor(Math.random() * nomes.length)]+' ' +
            '<span class=w3-badge>' + Math.floor(Math.random() *25) +'</span>' +
        "</div> ");
        contadorMensagens++;

    }
    $("#quantidade-mensagem").append(contadorMensagens);
    
});