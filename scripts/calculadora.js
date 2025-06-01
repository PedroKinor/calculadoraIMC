function calcularIMC() {
    //entrada
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    //processamento
    let calculoIMC = peso / (altura * altura);
    let classificacao = "";

    if (calculoIMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (calculoIMC >= 18.5 && calcularIMC <= 24.9) {
        classificacao = "Peso normal";
    }
    else if (calculoIMC >= 25.5) {
        classificacao = "Acima do peso";
    }
    //saida
    document.getElementById("resultado").textContent = "Seu IMC: " + calculoIMC.toFixed(2) + " - " + classificacao;


}
