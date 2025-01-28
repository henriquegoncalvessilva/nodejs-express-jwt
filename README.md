# User registration and listing application

This is my first application using **Node.js**, **Express**, **Prisma**, **MongoDB**, and **JWT**. The goal of this project was to create a simple Back-End application for user registration and listing, with authentication validation using middleware to ensure the user's **JWT token** is valid and not expired.

## Features

- **User Registration**: Allows new users to register in the system.
- **User Listing**: Displays a list of registered users, but only if the user's **JWT token** is valid and not expired. A middleware is used to check if the token is valid before accessing the user listing.

## Technologies Used

- **Node.js**: JavaScript runtime environment on the server.
- **Express**: Framework to simplify API construction and routing.
- **Prisma**: ORM for database management.
- **MongoDB**: NoSQL database to store user information.
- **JWT (JSON Web Token)**: For authentication and session management.

## How It Works

1. The user can register by providing the necessary data.
2. After registration, a **JWT token** is generated.
3. To list users, the token must be sent in an authorization header and must be valid. If the token is invalid or expired, listing will not be allowed. This validation is handled by middleware that checks the token before granting access.

## How to Run the Project

1. Clone this repository:
   
   git clone <https://github.com/henriquegoncalvessilva/nodejs-express-jwt.git>
  
2. Install the dependencies:
   
   npm install
   
3. Configure your [MongoDB](https://www.mongodb.com/pt-br "MongoDB") database and [Prisma](https://www.prisma.io/ "Prisma").

4. Run the application:

   node --watch server.js

# Aplicação de cadastro e listagem de usuários

Esta é minha primeira aplicação utilizando **Node.js**, **Express**, **Prisma**, **MongoDB** e **JWT**. O objetivo deste projeto foi criar uma aplicação Back-End simples para cadastro e listagem de usuários, com validação de autenticação utilizando middleware para garantir que o **token JWT** do usuário seja válido e não expirado.

## Funcionalidades

- **Cadastro de usuários**: Permite o cadastro de novos usuários no sistema.
- **Listagem de usuários**: Exibe a lista de usuários cadastrados, mas apenas se o **token JWT** do usuário for válido e não expirado. Um middleware é utilizado para verificar se o token é válido antes de permitir o acesso à listagem de usuários.

## Tecnologias utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para facilitar a construção de APIs e roteamento.
- **Prisma**: ORM para gerenciar o banco de dados.
- **MongoDB**: Banco de dados NoSQL para armazenar as informações dos usuários.
- **JWT (JSON Web Token)**: Para autenticação e controle de sessões de usuário.

## Como funciona

1. O usuário pode se cadastrar fornecendo os dados necessários.
2. Após o cadastro, um **token JWT** é gerado.
3. Para listar os usuários, o token deve ser enviado em um cabeçalho de autorização e deve ser válido. Se o token for inválido ou expirado, a listagem não será permitida. Essa validação é feita por meio de middleware, que verifica a autenticidade e validade do token antes de permitir o acesso à rota de listagem.

## Como rodar o projeto

1. Clone este repositório:
   
   git clone <https://github.com/henriquegoncalvessilva/nodejs-express-jwt.git>
  
2. Instale as dependências:
   
   npm install
   
3. Configure o seu banco de dados [MongoDB](https://www.mongodb.com/pt-br "MongoDB") e o [Prisma](https://www.prisma.io/ "Prisma").

4. Execute a aplicação:

   node --watch server.js
