function start () {
    var buttonCalculateIMC = document.querySelector('#button-calculate-imc')
    buttonCalculateIMC.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);
}

function calculateIMC (weight, height){
    return weight/(height**2);
}

function handleButtonClick () {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateIMC (weight, height);
    var formattedIMC = imc.toFixed(4).replace('.', ',');

    imcResult.textContent = formattedIMC;
}

start ();