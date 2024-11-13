const dados = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const media = calcularMedia(data.notas);
        const resultado = media >= 6 ? 'Aprovado' : 'Reprovado';
        document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)} - ${resultado}`;
    });

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
