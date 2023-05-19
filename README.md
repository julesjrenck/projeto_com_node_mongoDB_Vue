# Projeto feito com Node e Vue com conexão com o MongoDB

Este é um projeto de estudo onde tive meu primeiro contato com o node.

Tudo que fiz aqui aprendi através de um curso feito no canal do youtube da [Glaucia Lemos](https://www.youtube.com/@GlauciaLemos).

### Sobre o projeto

Sistema de login e senha, utilizando jwt e salvando os usuários numa bases de dados do banco MongoDB.

Lado do cliente feito com Vue.

### Configuração

Deve-se instalar os pacotes npm dentro das pastas backend e frontend/authentication-app-vue:

```sh
npm install
```

Dentro da pasta backend deve-se criar o arquivo .env com a seguinte configuração:

```sh
DB_URI=mongodb://127.0.0.1:27017/Nome_da_sua_database_no_mongoDB
```

Rodar o lado do backend dentro da pasta de mesmo nome:

```sh
npm run start
```

Rodar o lado do frontend dentro da pasta frontend/authentication-app-vue:

```sh
npm run serve
```

Após isso ao acessar [http://localhost:8080/](http://localhost:8080/) verá a tela de login:
![Screenshot](https://github.com/julesjrenck/projeto_com_node_mongoDB_Vue/assets/117744987/c6ef3265-5b3e-4f38-946b-afe258039726)
