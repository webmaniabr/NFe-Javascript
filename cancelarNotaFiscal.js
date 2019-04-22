/**
* Cancelar Nota Fiscal
*
* Atenção: Somente poderá ser cancelada uma NF-e cujo uso tenha sido previamente
* autorizado pelo Fisco e desde que não tenha ainda ocorrido o fato gerador, ou seja,
* ainda não tenha ocorrido a saída da mercadoria do estabelecimento. Atualmente o prazo
* máximo para cancelamento de uma NF-e é de 24 horas (1 dia), contado a partir da autorização
* de uso. Caso já tenha passado o prazo de 24 horas ou já tenha ocorrido a circulação da
* mercadoria, emita uma NF-e de devolução para anular a NF-e anterior.
*/

var data = JSON.stringify({
  "chave": "00000000000000000000000000000000000000000000",
  "motivo": "Cancelamento por motivos administrativos."
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://webmaniabr.com/api/1/nfe/cancelar/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
