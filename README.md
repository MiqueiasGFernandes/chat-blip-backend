# CHAT BLIP 

[![Coverage Status](https://coveralls.io/repos/github/MiqueiasGFernandes/fernandes-chat-blip/badge.svg?branch=master)](https://coveralls.io/github/MiqueiasGFernandes/fernandes-chat-blip?branch=master) [![Build Status](https://travis-ci.com/MiqueiasGFernandes/fernandes-chat-blip.svg?branch=master)](https://travis-ci.com/MiqueiasGFernandes/fernandes-chat-blip)

## Descrição

Este projeto traz uma implementação do desafio proposto pela equipe de recrutamento
da Blip.

```
Você deverá construir um chatbot em nossa plataforma, para isso, você pode seguir esses passos:

- crie uma conta em nosso portal (https://bit.ly/3lYcJTf), depois crie um chatbot usando a opção "Criar do zero";

- crie uma API que faça integração com a API pública do GitHub com informações sobre os repositórios da Take no GitHub. Para criá-la, você pode usar C#, Java ou Javascript;

- agora que você tem a API criada, deverá utilizar esses dados para exibir um carrossel a partir de qualquer entrada do usuário com informações sobre os 5 repositórios de linguagem C# mais antigos da Take, ordenados de forma crescente por data de criação;

- a imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter nenhum botão;

- o fluxo do bot precisa estar parecido com o que está no link:https://bit.ly/2uDaGhi;

- favor colocar no repositório o json do fluxo do bot para que o mesmo possa ser avaliado.
```

## Arquitetura e Código

Priorizei ao máximo prover uma arquitetura legível e de fácil compreensão tentando isolar as implementações externas
(Chamadas a API do Github por exemplo) da lógica de negócios, fiz o uso de Typescript.

Algumas outras decisões para melhorar o código:
- Testes unitários
- Git Hooks que verificam a padronização dos commits, executão os testes e o test coverage do projeto
- Uso do Eslint para melhorar a padronização do código
- Deployment no Heroku para facilitar a entrega

## Executando a aplicação:

### Scripts para execução:

```
npm start: Inicia o servidor
npm run dev: Inicia o servidor em modo desenvolvimento
npm run lint: Verifica inconsistências de padronização no código
npm run lint:fix: Resolve inconsistências de padronização no código
npm test: Executa os testes unitários
npm run test:watch: Executa os testes unitários em modo assistido
npm run test:ci: Executa os testes unitários e traz um relatório do quanto da aplicação eles cobrem
npm run deploy: Envia o código para deployment no heroku
```

### Variáveis de ambiente

Para executar em qualquer local o código, é necessário configurar as seguintes
variáveis de ambiente em um arquivo .env:
```
PORT: Define a porta onde o servidor irá iniciar
GITHUB_API_REPOS: Define a URL para buscar a lista de repositórios
GITHUB_API_AVATAR: Define a URL para buscar o avatar da organização
```

## Resultados

### URL do chat

O chat está disponível em: https://chat.blip.ai/?appKey=ZmVybmFuZGVzY2hhdGJvdDpkNjA4ZTBmZi1jZjQxLTQyYjAtOGZiOS01ZGEwOGNkMDgwOWY=

### URL da API

A API está hospedada em: http://fernandes-chat-blip-api.herokuapp.com/repositories

### O JSON de resposta

```
{
  "itemType": "application/vnd.lime.document-select+json",
  "items": [
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "library.data",
          "text": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "library.logging",
          "text": "Provides a simple logging interface for applications and some basic implementations of this interface",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "libphonenumber-csharp",
          "text": "Forking original c# port",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "Takenet.Radar",
          "text": "Radar de tecnologias takenet",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    },
    {
      "header": {
        "type": "application/vnd.lime.media-link+json",
        "value": {
          "title": "Takenet.ScoreSystem",
          "text": "Takenet score system",
          "type": "image/jpeg",
          "uri": "https://avatars.githubusercontent.com/u/4369522?v=4"
        }
      }
    }
  ]
}
```
### Print do Chat

<img src="/docs/result.png">

### Demonstração

<img src="/docs/demo.gif">

## Observação

Tive um pequeno contra-tempo no builder utilizando o CTRL+Z, então a versão publicada não 
corresponde com a que está em desenvolvimento no builder do chat
