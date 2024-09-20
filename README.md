# Exercício API - Training Days

## Objetivo

API do "Training Days", app utilizado para o registro de diferentes treinos de academia.

## Entidades

### Exercício (exercise)

Um exercício é um conjunto de movimentos utilizados para fortalecer a musculatura, e possui a seguinte estrutura:

```json
{
  "id": 0, // Identificador único do exercício, iniciando em 0 e nunca se repetindo
  "name": "Nome do exercício",
  "description": "Descrição do exercício"
}
```

## Rotas

Desenvolver as seguintes rotas na aplicação:

### GET /exercises

Traz todos os exercícios cadastrados na plataforma.

**Exemplo de resposta**

```json
{
  "exercises": [
    {
      "id": 0,
      "name": "Teste",
      "description": "Exercício de testes"
    }
  ]
}
```

### POST /exercises

Cria um novo exercício, lembrando que o campo "name" é obrigatório, o campo "description" é opcional e o campo "id" deve ser criado automaticamente pelo servidor, sendo descartado caso recebido na request.
Deve retornar 400 caso algum parâmetro esteja inválido.

### PATCH /exercises/:id

Permite alterar os campos de um determinado exercício identificado pelo parâmetro "id";
Deve retornar 404 caso o exercício não seja encontrado.
Não deve permitir a alteração do ID do exercício.

### DELETE /exercises/:id

Permite apagar o exercício identificado pelo parâmetro "id";
Deve retornar 404 caso o exercício não seja encontrado.
