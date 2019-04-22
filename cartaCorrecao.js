/**
* Informações da Carta de Correção
*
* A Carta de Correção Eletrônica (CC-e) é um evento legal e tem por objetivo
* corrigir algumas informações da NF-e que já foi emitida.
*/

var data = JSON.stringify({
  "chave": "00000000000000000000000000000000000000000000",
  "correcao": "O CFOP correto é 5.102 referente a revenda tributada no mesmo estado."
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://webmaniabr.com/api/1/nfe/cartacorrecao/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
