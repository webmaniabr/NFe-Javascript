<p align="center">
  <img src="https://wmbr.s3.amazonaws.com/img/logo_webmaniabr_github2.png">
</p>

# ⚠️ Repositório Descontinuado

<!-- deprecation-notice:start -->
> [!WARNING]
> **Repositório descontinuado.** Esta integração legada não receberá novas funcionalidades, manutenção ou correções de segurança.
>
> Para novas integrações e migrações planejadas, utilize o **[Webmania SDK para Node.js e TypeScript](https://github.com/webmaniabr/webmania-node)** no back-end.

**Integrações existentes:** este aviso não desativa a API nem exige migração imediata. O código e os arquivos desta versão permanecem disponíveis.

**Migração:** o novo SDK possui interface e requisitos próprios. Consulte o [README do novo SDK](https://github.com/webmaniabr/webmania-node#readme), adapte as chamadas da sua aplicação e valide a integração em homologação antes de migrar para produção.

**Credenciais:** mantenha as credenciais da API no servidor; não as exponha no código enviado ao navegador.
<!-- deprecation-notice:end -->

---

## Por que este repositório foi descontinuado?

Este repositório utilizava chamadas Ajax diretamente do front-end (navegador) para a API de emissão de Nota Fiscal. Essa abordagem apresenta riscos críticos de segurança:

- **Exposição de credenciais**: As chaves de API (`consumer_key`, `consumer_secret`, `access_token`, `access_token_secret`) ficam expostas no código-fonte do navegador, permitindo que qualquer pessoa inspecione e copie suas credenciais.
- **Ausência de controle server-side**: Sem uma camada de back-end, não há como validar, sanitizar ou controlar as requisições antes de enviá-las à API, abrindo margem para manipulação de dados e uso indevido.
- **Vulnerabilidade a CSRF/XSS**: Requisições feitas diretamente do navegador são suscetíveis a ataques de Cross-Site Request Forgery e Cross-Site Scripting, podendo resultar em emissão não autorizada de documentos fiscais.
- **Impossibilidade de auditoria**: Sem um servidor intermediário, não há como registrar logs confiáveis das operações realizadas, dificultando a rastreabilidade exigida pela legislação fiscal.

## Migração recomendada

Utilize a integração via **Node.js** no back-end, que resolve todos os pontos acima:

🔗 **[webmaniabr/webmania-node](https://github.com/webmaniabr/webmania-node)**

### Benefícios da integração server-side

- **Credenciais protegidas**: As chaves de API ficam armazenadas exclusivamente no servidor, inacessíveis ao cliente.
- **Validação e sanitização**: Todas as requisições passam pelo seu back-end antes de chegarem à API, permitindo validação de dados, rate limiting e controle de acesso.
- **Logs e auditoria**: Registre todas as operações de emissão, cancelamento e consulta para conformidade fiscal e rastreabilidade.
- **Arquitetura escalável**: Node.js oferece I/O não-bloqueante, ideal para lidar com alto volume de requisições à API de forma eficiente.

## Suporte

Qualquer dúvida entre em contato na nossa [Central de Ajuda](https://ajuda.webmaniabr.com) ou acesse o [Painel de Controle](https://webmaniabr.com/painel/) para conversar em tempo real no Chat ou abrir um chamado.
