/**
* Consulta de Nota fiscal
*
* Atenção: Somente é permitido consultar a chave da nota fiscal emitida pelo
* emissor da WebmaniaBR, não sendo possível consultar nota fiscal de terceiro
* ou emitida em outro sistema.
*/

var data = null;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://webmaniabr.com/api/1/nfe/consulta/?chave=00000000000000000000000000000000000000000000");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
