# Training Days API

## Feature: Middleware de Erro

### Descrição

Esta feature adiciona um middleware de erro à API, permitindo um tratamento de erros mais consistente e amigável. O
middleware captura erros gerados durante o processamento das requisições e retorna respostas formatadas ao cliente,
garantindo que o usuário receba informações úteis sobre o que ocorreu.

### Estrutura de Erros

1. **`errors`**:
    - Contém classes de erro personalizadas que podem ser utilizadas em toda a aplicação, facilitando o gerenciamento de
      diferentes tipos de erros.

### Classes de Erro Personalizadas

#### `ServerError`

A classe `ServerError` estende a classe `Error` nativa do JavaScript e é utilizada para representar erros do servidor de
forma consistente.

```javascript
class ServerError extends Error {
    constructor(name, statusCode, message) {
        super(message);
        this.name = name; // Nome do erro
        this.statusCode = statusCode; // Código de status HTTP
    }
}
```

#### Outras Classes de Erros

- `InvalidParameterError:` Utilizada quando um parâmetro de requisição não é válido.
- `ConflictError:` Utilizada em situações de conflito, como tentativas de criação de um recurso que já existe.

### Middleware de Erro: `error-middleware.js`

O middleware de erro é responsável por capturar erros durante o processamento das requisições e enviar respostas
apropriadas ao cliente.
A implementação a seguir verifica se o erro é uma instância de `ServerError` e retorna o status code e a mensagem
correspondente.
Caso contrário, retorna um erro genérico com o status 500.

```javascript
const errorHandler = (err, req, res, next) => {
    if (err instanceof ServerError) {
        res.status(err.statusCode).send({
            error: err.name,
            message: err.message,
        });
        return;
    }
    console.error(err);
    res.status(500).send({
        error: "InternalServerError",
        message: "Algo deu errado!"
    });
};
```

### Para testar

- Inicie sua aplicação e acesse a rota da sua aplicação.Tente forçar errors na aplicação, você deve ver a resposta formatada com o nome e a
  mensagem do erro.
- Para outras rotas, o middleware de erro deve capturar erros não tratados e retornar uma mensagem genérica de erro 500.
