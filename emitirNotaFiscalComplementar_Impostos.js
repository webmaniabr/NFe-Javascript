/**
 * Informações da Nota Fiscal Complementar
 *
 * A Nota Fiscal Complementar é destinada para acrescentar dados e valores
 * não informados no documento fiscal original. Utilizado para acréscimo no preço
 * e quantidade da mercadoria ou somar valores faltantes dos impostos ICMS, ICMS-ST e IPI.
 *
 * OBS: Deve ser complementado o Preço/Quantidade OU Impostos.
 * OB2: Caso deseje complementar as duas opções devem ser emitidas NF-e separadas.
 */

var data = JSON.stringify({
	"nfe_referenciada": "00000000000000000000000000000000000000000000",
	"operacao": 1,
	"natureza_operacao": "Natureza da operação",
	"ambiente": 2,
	"cliente": {
		"cpf": "000.000.000-00",
		"nome_completo": "Nome completo",
		"endereco": "Av. Brg. Faria Lima",
		"complemento": "Escritorio",
		"numero": 1000,
		"bairro": "Itaim Bibi",
		"cidade": "S\u00e3o Paulo",
		"uf": "SP",
		"cep": "00000-000",
		"telefone": "(00) 0000-0000",
		"email": "nome@email.com"
	},
	"produtos": [{
		"nome": "Nome do produto",
		"codigo": "nome-do-produto",
		"ncm": "6109.10.00",
		"cest": "28.038.00",
		"quantidade": 1,
		"unidade": "UN",
		"peso": "0.500",
		"origem": 0,
		"subtotal": "29.90",
		"total": "29.90",
		"tributos_federais": "10.00",
		"tributos_estaduais": "10.00",
		"impostos": {
			"icms": {
				"codigo_cfop": "6.102",
				"situacao_tributaria": "102"
			},
			"ipi": {
				"situacao_tributaria": "99",
				"codigo_enquadramento": "999",
				"aliquota": "0.00"
			},
			"pis": {
				"situacao_tributaria": "99",
				"aliquota": "0.00"
			},
			"cofins": {
				"situacao_tributaria": "99",
				"aliquota": "0.00"
			}
		}
	}]
})

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://webmaniabr.com/api/1/nfe/complementar/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);

