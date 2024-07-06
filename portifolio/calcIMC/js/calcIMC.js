const botaoCalcular = document.querySelector('.botao-calcular');
botaoCalcular.onclick = calculate;

window.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        botaoCalcular.click()
    }
})

function calculate() {
    const kg = document.querySelector('.input-kg');
    const alt = document.querySelector('.input-alt');
    let calcBMI = kg.value / (alt.value ** 2);
    calcBMI = parseFloat(calcBMI.toFixed(1));
    console.log(calcBMI);
    const bmiTag = document.querySelector('.resultado__num');
    bmiTag.textContent = `Your BMI is: ${calcBMI}`;

    let bmiText = document.querySelector('.resultado__txt');

    if (calcBMI < 18.5) {
        bmiText.textContent = 'Desnutrido';
        bmiTag.style.color = 'green';
    } else if (calcBMI > 18.5 && calcBMI < 24.9) {
        bmiText.textContent = 'Peso Normal';
        bmiTag.style.color = 'green';
    } else if (calcBMI > 25 && calcBMI < 29.9) {
        bmiText.textContent = 'Sobrepeso';
        bmiTag.style.color = 'yellow';
    } else if (calcBMI > 30 && calcBMI < 34.9) {
        bmiText.textContent = 'Obesidade Grau 1';
        bmiTag.style.color = 'red';
    } else if (calcBMI > 35 && calcBMI < 39.9) {
        bmiText.textContent = 'Obesidade Grau 2';
        bmiTag.style.color = 'red';
    } else if (calcBMI > 39.9) {
        bmiText.textContent = 'Obesidade Grau 3';
        bmiTag.style.color = 'red';
    }

}

