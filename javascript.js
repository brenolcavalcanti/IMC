function start () {
    var buttonCalculateIMC = document.querySelector('#button-calculate-imc')
    buttonCalculateIMC.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('click', handleButtonClick);
    inputHeight.addEventListener('click', handleButtonClick);
}

function calculateIMC (weight, height){
    return weight/(height**2);
}

function faixaDePeso (imc) {
    if (imc>=16 && imc<17){
        return "Muito abaixo do peso";
    } else if (imc >=17 && imc <18.5){
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <25){
        return "Peso normal";
    } else if (imc>=25 && imc < 30){
        return "Acima do peso";
    } else if (imc>=30 && imc <35){
        return "Obesidade grau I";
    } else if (imc>=35 && imc <=40){
        return "Obesidade grau II";
    } else if (imc > 40) {
        return "Obesidade grau III";
    } else {
        return "Inválido"
    }
}

function handleButtonClick () {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcFaixa = document.querySelector('#imc-faixa');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateIMC (weight, height);
    var formattedIMC = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedIMC;
    imcFaixa.textContent = faixaDePeso (imc);
}

start ();