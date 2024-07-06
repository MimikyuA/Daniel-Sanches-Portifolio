function calcularImposto() {
    const salario = parseFloat(document.getElementById('salario').value);
    let imposto = 0;

    if (salario <= 1903.98) {
        imposto = 0;
    } else if (salario <= 2826.65) {
        imposto = (salario - 1903.99) * 0.075;
    } else if (salario <= 3751.05) {
        imposto = (salario - 2826.66) * 0.15 + 142.8;
    } else if (salario <= 4664.68) {
        imposto = (salario - 3751.06) * 0.225 + 354.8;
    } else {
        imposto = (salario - 4664.68) * 0.275 + 636.13;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>O imposto de renda devido é R$ ${imposto.toFixed(2)}</p>`;
}
