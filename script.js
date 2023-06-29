let output = document.getElementById('output'); //pego a div com o nome output e armazeno dentro de let output

function mostrarTabuada(){ //função para mostrar a tabuada
    let n = Number(prompt('Digite um numero: ')) //recebe um numero por prompt e armazena na variavel n
    let tabuada = '';           //variavel auxiliar para receber a output
    for(i = 0; i <= 10 ; i++){ //loop para execução da tabuada
        tabuada += (`${n} x ${i} = ${n * i} <br>`); // a variavel tabuada recebe o valor do loop conforme indicado
    }
    output.innerHTML = tabuada; //para exibir a variavel output adiciona na tela por meio do innerHTML o valor armazenado em tabuada
}

function reload(){ //limpa a output
    output.innerHTML = '';
}