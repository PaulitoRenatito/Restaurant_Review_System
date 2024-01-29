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

## Lógica de Login e Início da Home

- Inputs de Login: 
Os usuários são solicitados a inserir suas credenciais, como nome de usuário e senha, nos campos correspondentes. Isso permite a autenticação no sistema.

- Exibição/Ocultação de Senha: 
Existe a opção de ocultar ou exibir a senha durante a entrada. Isso oferece aos usuários a flexibilidade de visualizar a senha que estão digitando.

- Botão de Login: 
Após preencher as credenciais, os usuários podem clicar no botão de login para acessar suas contas. A autenticação é realizada pelo backend, e em caso de sucesso, os usuários são redirecionados para a tela principal.

### Início da Home:
- Cards de Restaurantes: 
Após o login bem-sucedido, a tela principal (home) é exibida, apresentando cards de diferentes restaurantes. Esses cards contêm informações básicas sobre os restaurantes, como nome, tipo de culinária, e uma imagem representativa.

- Comunicação com o Backend: 
Os dados exibidos nos cards são recebidos do backend por meio de solicitações HTTP. O frontend interage com o backend para obter informações dinâmicas sobre os restaurantes cadastrados no sistema.

Essa combinação de funcionalidades proporciona aos usuários uma experiência de login intuitiva e uma primeira impressão visual dos restaurantes disponíveis, incentivando a exploração adicional na plataforma.
<p align='center'>
    <img width='400' src='FrontEnd\src\assets\to_readme\login.gif'>
</p>

## Lógica de Filtragem, Tela Específica e Sistema de Comentários e Avaliações
É possível observar a lógica de filtragem e a tela específica de cada item. Aqui estão algumas informações adicionais:

### Filtragem:
- Barra de Pesquisa: Os usuários podem utilizar uma barra de pesquisa para encontrar restaurantes específicos. A medida que eles digitam, a lista de restaurantes é dinamicamente filtrada para exibir apenas aqueles que correspondem à consulta.

- Filtros de Avaliações: Os usuários podem filtrar os restaurantes por média de avaliações.

### Tela Específica de Cada Item:
- Detalhes do Restaurante: 
Ao clicar em um card específico na tela inicial, os usuários são direcionados para uma página dedicada a esse restaurante. Nessa página, eles podem encontrar detalhes mais aprofundados, como horário de funcionamento, avaliações anteriores e outras informações relevantes.
- Sistema de Comentários e Avaliações:
Os usuários podem atribuir uma pontuação e deixar comentários sobre cada restaurante. Essas avaliações contribuem para a pontuação geral do restaurante e fornecem feedback valioso para outros usuários.

<p align='center'>
    <img width='400' src='FrontEnd\src\assets\to_readme\home.gif'>
</p>

## Lógica de Userinfo
No terceiro GIF, é possível observar a lógica de userinfo, que exibe informações sobre o usuário. Aqui estão mais detalhes:

- Nome e Email do Usuário: Na tela de userinfo, o nome do usuário e o endereço de e-mail associado à conta são exibidos. Isso personaliza a experiência do usuário e fornece um meio de contato.

- Itens Favoritos: Os usuários podem marcar restaurantes como favoritos, e essas informações são exibidas na tela de userinfo. Isso permite que os usuários acessem rapidamente seus restaurantes preferidos.

- Avaliações Feitas: A tela de userinfo também exibe as avaliações que o usuário fez anteriormente. Isso permite que eles revisitem suas experiências passadas e possivelmente façam edições ou excluam avaliações, se necessário.

Essas funcionalidades combinadas proporcionam aos usuários uma experiência completa ao explorar, avaliar e interagir com os restaurantes no sistema.

<p align='center'>
    <img width='400' src='FrontEnd\src\assets\to_readme\userinfo.gif'>
</p>