/**
 * Status do Sefaz
 *
 * OBS: A utilização do endpoint deve ser realizada como demonstrativo do Status do
 * Sefaz em sua plataforma, sendo necessário trabalhar com cache de ao menos 10 minutos.
 * Não é necessário realizar a requisição antes da emissão de cada Nota Fiscal,
 * porque este procedimento é realizado de forma automática em todos os endpoints.
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

xhr.open("GET", "https://webmaniabr.com/api/1/nfe/sefaz/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
