/**
* Produtos - Com detalhamento específico de Medicamento e de matérias-primas farmacêuticas
* A array dos produtos devem ser montadas de acordo com as informações
* do produto no Banco de Dados da sua plataforma
*/

var data = JSON.stringify({
   "ID": 1137,
   "url_notificacao": "http://meudominio.com/retorno.php",
   "operacao": 1,
   "natureza_operacao": "Venda de produção do estabelecimento",
   "modelo": 1,
   "finalidade": 1,
   "ambiente": 2,
   "cliente": {
      "cpf": "000.000.000-00",
      "nome_completo": "Nome do Cliente",
      "endereco": "Av. Brg. Faria Lima",
      "complemento": "Escritório",
      "numero": 1000,
      "bairro": "Itaim Bibi",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "00000-000",
      "telefone": "(00) 0000-0000",
      "email": "nome@email.com"
   },
   "produtos": [
      {
         "nome": "Nome do produto",
         "codigo": "nome-do-produto",
         "ncm": "6109.10.00",
         "cest": "28.038.00",
         "quantidade": 3,
         "unidade": "UN",
         "peso": "0.800",
         "origem": 0,
         "subtotal": "44.90",
         "total": "134.70",
         "classe_imposto": "REF2892",
         "medicamento": {
             "codigo_anvisa": "1234567891234",
             "pmc": "10.00"
         }
      }
   ],
   "pedido": {
      "pagamento": 0,
      "presenca": 2,
      "modalidade_frete": 0,
      "frete": "12.56",
      "desconto": "10.00",
      "total": "174.60"
   }
 });

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://webmaniabr.com/api/1/nfe/emissao/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
