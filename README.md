# Sistema de Avaliação de Restaurantes

Este é um sistema de avaliação de restaurantes onde os usuários podem avaliar diferentes estabelecimentos. Os dados são armazenados em um banco de dados PostgreSQL. O projeto é dividido em Backend, desenvolvido em Java Spring, e Frontend, desenvolvido em React.

## Configuração do Backend

### Requisitos

- Java SDK
- Apache Maven
- PostgreSQL

### Configuração do Banco de Dados

1. Crie um banco de dados no PostgreSQL para o sistema.

2. Configure as informações do banco de dados no arquivo `application.properties` no diretório `backend/src/main/resources`.

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco_de_dados
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

O backend será iniciado em http://localhost:8080.

## Configuração do Frontend
### Requisitos
- Node.js
- npm
- Instalação das Dependências

### Instalação das Dependências
```bash
cd frontend
npm install
```