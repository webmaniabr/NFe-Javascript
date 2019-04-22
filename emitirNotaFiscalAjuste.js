/**
 * Informações da Nota Fiscal Eletrônica
 * Verificar emissaoNotaFiscal.js
 *
 * A Nota Fiscal de Ajuste é destinada somente para fins específicos de escrituração
 * contábil para empresas de Lucro Normal ou Presumido, não representando saída ou entrada
 * de produtos. Utilizado para nota de crédito de ICMS como transferência, ressarcimento
 * ou restituição do ICMS.
 */

var data = JSON.stringify({
	"operacao": 1,
	"natureza_operacao": "CREDITO ICMS ESTOQUE",
	"codigo_cfop": 2.949,
	"valor_icms": 1000,
	"ambiente": 2,
	"cliente": {
		"cpf": "000.000.000-00",
		"nome_completo": "Nome completo",
		"endereco": "Av. Brg. Faria Lima",
		"complemento": "Escritório",
		"numero": 1000,
		"bairro": "Itaim Bibi",
		"cidade": "São Paulo",
		"uf": "SP",
		"cep": "00000-000",
		"telefone": "(00) 0000-0000",
		"email": "nome@email.com"
	}
})

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://webmaniabr.com/api/1/nfe/ajuste/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);

