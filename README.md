# Training Day API

A **Training Day API** é uma API simples desenvolvida em Node.js que permite o gerenciamento de exercícios físicos. 
Com funcionalidades básicas de CRUD (Criar, Ler, Atualizar e Deletar), a API facilita a organização e o acompanhamento de treinos.

## Tecnologias Utilizadas
- **Node.js**: Um ambiente de execução JavaScript que possibilita a criação de aplicações de forma eficiente e escalável.
- **Express**: Framework web que simplifica a criação de APIs, proporcionando uma estrutura robusta para roteamento e manipulação de requisições.
- **Módulos Nativos**: Utilização de módulos do Node.js que permitem o gerenciamento de requisições HTTP.

## Funcionalidades
A API oferece as seguintes operações:
- **Listar Exercícios**: Recupera uma lista de exercícios existentes.
- **Criar Exercício**: Adiciona um novo exercício à lista.
- **Atualizar Exercício**: Modifica as informações de um exercício específico.
- **Deletar Exercício**: Remove um exercício da lista.

## Estrutura do Projeto
O projeto é organizado em módulos que separam responsabilidades, incluindo controladores, serviços e middlewares.

### Estrutura de Arquivos
- `index.js`: Configuração do servidor e inicialização da API.
- `controllers/`: Contém os controladores que gerenciam as rotas e as requisições recebidas.
- `services/`: Lógica de negócios para gerenciamento de exercícios.
- `repository/`: Interage com a estrutura de dados.
- `middlewares/`: Middlewares, criado para tratamento de erros.
- `errors/`: Define tipos de erros personalizados para melhorar o tratamento de erros.

## Como Executar
Para executar a API, siga estes passos:
1. Clone o repositório.
2. Instale as dependências com o comando `npm i`.
3. Inicie o servidor. A API escutará na porta 3000 por padrão.

### Criar um Exercício
- **Método:** POST
- **Endpoint:** `/exercises`
- **Corpo da Requisição:**
```json
{
  "name": "Supino Reto",
  "description": "Exercício para fortalecer os músculos do peito, ombros e tríceps."
}
