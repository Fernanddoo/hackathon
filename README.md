Projeto final de Desenvolvimento de Sistemas I 

Para rodar o backend: 

    - Para criação das tabelas no banco de dados em PostgreSQL, utilizar o script.sql, que esta jundo dos arquivos do backend
    - criar um .env e seguir o .env.example para popular os dados e conectar o banco de dados
    - instalar as dependencias com npm install do arquivo package.json
    - utilizar o comando npm run dev no diretorio hackathon-backend

Para rodar o frontend:

    - criar um .env e seguir o .env.example para popular os dados necessários 
    - instalar as dependencias com npm install do arquivo package.json
    - utilizar o comando npm run dev no diretorio front do diretorio hackathon-frontend


O que é o trabalho?

    O trabalho é um sistema de hackathon, onde é possível cadastrar equipes e avaliadores e posteriormente atribuir notas a determinadas equipes.

    Conta com um backend utilizando express e banco postgreSQL e conta com as devidas requisições para cadastro dos dados para funcionamento da aplicação
    O frontend então, será utilizado para renderizar em tela esses dados em 3 cards, que posteriormente é possível visualizar todos os respectivos: avaliadores, equipes e notas(avaliações).

Limitações:

    Alguns requisitos não foram implementados, como uma autenticação utilizando login e senha dos avaliadores, a atribuição posterior das notas(é possível atribuir na hora do cadastro {se nada for colocado, será por padrão "zero"}).
    Não possui filtro de avaliações para selecionar por equipe ou avaliador no frontend(possui no backend, mas não foi possível implementar)