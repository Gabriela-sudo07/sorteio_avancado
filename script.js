document.getElementById('sorteioButton').addEventListener('click', function(){

    let totalNumeros = parseInt(document.getElementById('totalNumeros').value);
    let quantidadeSorteio = parseInt(document.getElementById('quantidadeSorteio').value);
    let numeroSorteios = parseInt(document.getElementById('numeroSorteios').value);
    let resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = '';

    if(isNaN(totalNumeros) || totalNumeros <= 0 || isNaN(quantidadeSorteio) || 
    quantidadeSorteio <= 0 || quantidadeSorteio > totalNumeros || isNaN(numeroSorteios) || numeroSorteios <= 0) {

        resultadoDiv.innerHTML = 'Por favor, insira valores válidos';

        return;

    }

    function gerarSorteio() {
        let numeros = [];

        while (numeros.length < quantidadeSorteio) {
            let numeroAleatorio = Math.floor(Math.random() * totalNumeros) + 1;

            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio);
            }
        }

        numeros.sort(function (a, b) {
            return a - b;
        });

        return numeros;
    }

    for (let i = 0; i < numeroSorteios; i++) {

        let numerosSorteados = gerarSorteio();
        let sorteioDiv = document.createElement('div');
        sorteioDiv.className = 'sorteio';
        sorteioDiv.innerText = `Sorteio ${i + 1}: ${numerosSorteados.join(', ')}`;
        resultadoDiv.appendChild(sorteioDiv);
    }
});