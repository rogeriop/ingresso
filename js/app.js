let qtdPista = parseInt(document.getElementById("qtd-pista").textContent, 10);
let qtdSuperior = parseInt(
  document.getElementById("qtd-superior").textContent,
  10
);
let qtdInferior = parseInt(
  document.getElementById("qtd-inferior").textContent,
  10
);

function comprar() {
  //debugger;
  const tipoIngresso = document.querySelector("#tipo-ingresso").value;
  const quantidadeSolicitada = document.querySelector("#qtd").value;

  if (tipoIngresso == "pista") {
    if (quantidadeSolicitada > qtdPista) {
      alert("Quantidade de ingresso para pista excede a quantidade existente");
      return;
    } else {
      qtdPista = qtdPista - quantidadeSolicitada;
      document.getElementById("qtd-pista").textContent = qtdPista;
    }
  }

  if (tipoIngresso == "superior") {
    if (quantidadeSolicitada > qtdSuperior) {
      alert(
        "Quantidade de ingressos para Cadeira Superior excede a quantidade existente"
      );
    } else {
      qtdSuperior = qtdSuperior - quantidadeSolicitada;
      document.getElementById("qtd-superior").textContent = qtdSuperior;
    }
  }

  if (tipoIngresso == "inferior") {
    if (quantidadeSolicitada > qtdInferior) {
      alert(
        "Quantidade de ingressos para Cadeira inferior excede a quantidade existente"
      );
    } else {
      qtdInferior = qtdInferior - quantidadeSolicitada;
      document.getElementById("qtd-inferior").textContent = qtdInferior;
    }
  }
  document.querySelector("form").reset();
}
