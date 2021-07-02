# Stefanini Challenge

Nesse desafio eu tentei ser o mais claro possível, utilizando uma arquitetura simples e intuitiva, com separação de responsabilidaddes com services e controllers.

Como foi pedido, foi utilizado a tecnologia Serveless com AWS Lambda, o banco de dados que escolhi trabalhar foi DynamoDB e usei como auxílio o framework Express para criação de uma REST API para ser o "gatilho" das Lambdas

## Como instalar e rodar

Primeiro, é necessário ter o serverless na sua máquina e conectar a sua conta AWS. Documentação [link](https://serverless.com/framework/docs/providers/aws/guide/quick-start/).

Agora, siga as instruções

  ### Rode o comando para instalar as dependências:
  
  ```
  npm install
  ```
  
  ### Dê o deploy da aplicação em seu AWS Lambda
  ```
  serverless deploy 
  ```

  ### Para remover a aplicação de seu AWS Lambda:
  ```
  serverless remove
  ```
  
  ## Testando a aplicação
  
  Os testes foram feitos com o auxílio do framework JEST.
    
  Para verificar os testes basta rodar:
    
  ```
  npm run test
  ```
