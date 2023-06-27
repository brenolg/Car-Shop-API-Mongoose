# Futebol Club API 

O projeto Futebol Club consiste em desenvolver uma API utilizando a metodologia TDD (Desenvolvimento Orientado por Testes) e integrar as aplicações front-end e back-end usando o Docker Compose. A API será consumida por um front-end já disponibilizado, que exibirá informações sobre partidas e classificações de futebol.

O objetivo principal do projeto é aplicar todos os conhecimentos adquiridos até o momento, incluindo a dockerização das aplicações, a modelagem de dados com MySQL usando o Sequelize, a criação e associação de tabelas, a construção de uma API REST com endpoints para consumir os modelos criados e a implementação de um CRUD com TypeScript utilizando o ORM.

Como responsável pelo desenvolvimento do back-end dockerizado, você utilizou os princípios de Programação Orientada a Objetos (POO) e os princípios SOLID para garantir a qualidade do código. Além disso, foi implementada a autenticação com JWT (JSON Web Token) para algumas rotas que exigem permissão, garantindo que apenas usuários autenticados possam fazer alterações.

No geral, o projeto busca simular um cenário real, onde é necessário integrar o front-end e o back-end, utilizando um banco de dados relacional e seguindo as regras de negócio estabelecidas. O resultado final será uma API funcional que fornecerá os dados necessários para o front-end exibir as informações de forma adequada aos usuários.

## Funcionalidades

- Dockerização dos apps, network, volume e compose;
- Modelagem de dados com MySQL através do Sequelize;
- Criação e associação de tabelas usando models do sequelize;
- Construção de uma API REST com endpoints para consumir os models criados;
- Construção de um CRUD com TypeScript, utilizando ORM;
- Autenticação de rotas utilizando JWT.
- Programação Orientada a Objetos e princípios SOLID:
- Implementar, em TypeScript: `Classes`, `Instâncias`, `Atributos` e `Métodos`.

# Tecnologias utilizadas


- React js  
- TypeScript
- Node.js
- Express.js
- Sequelize
- JSON Web Token (JWT)
- Bcrypt.js 
  ### **Testes**
    - Mocha
    - Chai
    - Sinon

## Banco de Dados
<details close>
    <summary><strong> Diagrama e Tabelas</strong></summary>

  - MySQL 
  1. #### **Diagrama ER**
<img src="./database.png"/>         

  2. #### **Seeders**  
  O banco de dados contém:
  - tabela `users` com usuários válidos com hash das senhas e alguns inválidos, estes útimos utilizados para os testes avaliativos.
  - tabela `teams` com a lista de todos os times que estão participando do campeonato.
  - tabela `matches` com algumas partidadas finalizadas e outras em andamento.
 </details>

## Documentação da API

<details close>
      <summary><strong> Visão geral</summary>

| Endpoint     | Método HTTP | Descrição               | 
| :----------- | :---------- | :---------------------- |
| [`/login`](#endpoint-login)   | POST        | Faz o login com usuários do banco de dados 
| [`/login/role`](#endpoint-loginrole)| GET         | :closed_lock_with_key: Retorna o *role* do usuário logado (user ou adm)  |
| [`/teams`](#endpoint-teams)     | GET         | Retorna todos os times do campeonato
| [`/teams/:id`](#parâmetro-id-teamsid) | GET         | Retorna o time especificado no id
| [`/matches`](#endpoint-matches)   | GET         | Retorna todas as partidas 
| [`/matches`](#endpoint-matches)           | POST         | :closed_lock_with_key: Insere uma nova partida em andamento.
| [`/matches?inProgress=true`](#parâmetro-inprogress-matchesinprogress) | GET         | Retorna as partidas em andamento.
| [`/matches?inProgress=false`](#parâmetro-inprogress-matchesinprogress)| GET         | Retorna as partidas finalizadas.
| [`/matches/:id`](#parâmetro-id-matchesid)    | PATCH       | :closed_lock_with_key: Atualiza a partida de acordo com seu id.
| [`/matches/:id/finish`](#endpoint-matchesidfinish) | PATCH       | :closed_lock_with_key: Finaliza uma partida em andamento.
| [`/leaderboard`](#endpoint-leaderboard)       | GET          | Retorna a classificação geral do campeonato.
| [`/leaderboar/home`](#endpoint-leaderboardhome)   | GET          | Retorna a classificação dos times mandantes.
| [`/leaderboard/away`](#endpoint-leaderboardaway)  | GET          | Retorna a classificação dos times visitantes.

:closed_lock_with_key: : Necessário que o `token` gerado no login seja enviado no headers como _"Authorization"_.
 </details>
  


### **Corpo das requisições e respostas**  
> *Clique nas setas para ver mais*  

#### **Endpoint:** `/login`  

- <details><summary>Método POST </summary>  
  Exemplo de corpo da requisção válido  

    ```json
    {
      "email": "user@user.com",
      "password": "secret_user", 
    }
    ```  

  Respostas 
  - Status: 200 OK  
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // jsonwebtoken gerado
    }
    ```
    
  - Status: 400 Bad Request
    ```json
    { "message": "All fields must be filled" }
    ```
    
  - Status: 401 Unauthorized
    ```json
    { "message": "Invalid email or password" }
    ```
</details>

#### **Endpoint:** `/login/role`
- <details><summary>:closed_lock_with_key: Método GET</summary>  
  Respostas  
    - Status: 200 OK  
      ```json
      { "role": "admin" }
      ```
      
    - Status: 401 Unauthorized
      ```json
      { "message": "Token not found" }
      ```

      ```json
      { "message": "Token must be a valid token" }
      ```
</details>

#### **Endpoint:** `/teams`
- <details><summary>Método GET</summary>

  Resposta  
  - Status: 200 OK
    ```json
    [
      {
        "id": 1,
        "teamName": "Avaí/Kindermann"
      },
      {
        "id": 2,
        "teamName": "Bahia"
      },
      {
        "id": 3,
        "teamName": "Botafogo"
      },
      ...
    ]
    ```
</details>

#### **Parâmetro id:** `/teams/:id`
- <details> <summary>Método GET</summary>

  Resposta 
  - Status: 200 OK  
    ```json
    {
      "id": 5,
      "teamName": "Cruzeiro"
    }
    ```
</details>

#### **Endpoint:** `/matches`
- <details><summary>Método GET</summary>

  Resposta 
  - Status: 200 OK  
    ```json
      [
        {
          "id": 1,
          "homeTeamId": 16,
          "homeTeamGoals": 1,
          "awayTeamId": 8,
          "awayTeamGoals": 1,
          "inProgress": false,
          "homeTeam": {
            "teamName": "São Paulo"
          },
          "awayTeam": {
            "teamName": "Grêmio"
          }
        },
        ...
        {
          "id": 41,
          "homeTeamId": 16,
          "homeTeamGoals": 2,
          "awayTeamId": 9,
          "awayTeamGoals": 0,
          "inProgress": true,
          "homeTeam": {
            "teamName": "São Paulo"
          },
          "awayTeam": {
            "teamName": "Internacional"
          }
        }
      ]
    ```
</details>

- <details><summary>:closed_lock_with_key: Método POST</summary>
  Requisição  

  ```json
  {
    "homeTeamId": 16, // O valor deve ser o id do time
    "awayTeamId": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 1,
  }
  ```

  Respostas 
  - Status: 201 Created  
    ```json
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 2,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": true,
    }
    ```
  
  - Status: 401 Unauthorized
    ```json
    { "message": "Token not found" }
    ```

    ```json
    { "message": "Token must be a valid token" }
    ```
  - Status: 404 Not Found
    ```json
    { "message": "There is no team with such id!" }
    ```
  - Status: 422 Unprocessable Entity
    ```json
    { "message": "It is not possible to create a match with two equal teams" }
    ```
</details>  


#### **Parâmetro inProgress:** `/matches?inProgress=`
- <details>
  <summary>Método GET</summary>
  Opções de query: <i>true</i> ou <i>false</i>  

  Ex:  
    ```
    matches?inProgress=true
    ```

  Resposta 
  - Status: 200 OK  
    ```json
    [
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      },
      {
        "id": 42,
        "homeTeamId": 6,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "Ferroviária"
        },
        "awayTeam": {
          "teamName": "Avaí/Kindermann"
        }
      }
    ]
    ```
</details>

#### **Parâmetro id:** `/matches/:id`
- <details><summary>:closed_lock_with_key: Método PATCH</summary>
 
  Requisição:
  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```

  Respostas 
  - Status: 200 OK  
    ```json
    { "message": "Updated match!" } 
    ```
  
  - Status: 401 Unauthorized
    ```json
    { "message": "Token not found" }
    ```

    ```json
    { "message": "Token must be a valid token" }
    ```
</details>

#### **Endpoint:** `/matches/:id/finish`
- <details><summary>:closed_lock_with_key: Método PATCH</summary>
  Respostas  

    - Status: 200 OK  
      ```json
        { "message": "Finished" }
      ```
    
    - Status: 401 Unauthorized
      ```json
        { "message": "Token not found" }
      ```

      ```json
        { "message": "Token must be a valid token" }
      ```
</details>

#### **Endpoint:** `/leaderboard`
- <details><summary>Método GET</summary>

  Resposta  
  - Status: 200 OK
    ```json
    [
      {
        "name": "Palmeiras",
        "totalPoints": 13,
        "totalGames": 5,
        "totalVictories": 4,
        "totalDraws": 1,
        "totalLosses": 0,
        "goalsFavor": 17,
        "goalsOwn": 5,
        "goalsBalance": 12,
        "efficiency": "86.67"
      },
        ...
      {
        "name": "Napoli-SC",
        "totalPoints": 2,
        "totalGames": 6,
        "totalVictories": 0,
        "totalDraws": 2,
        "totalLosses": 4,
        "goalsFavor": 3,
        "goalsOwn": 15,
        "goalsBalance": -12,
        "efficiency": "11.11"
      }
    ]
    ```
</details>

#### **Endpoint:** `/leaderboard/home`
- <details><summary>Método GET</summary>

  Resposta  
  - Status: 200 OK
    ```json
    [
      {
        "name": "Santos",
        "totalPoints": 9,
        "totalGames": 3,
        "totalVictories": 3,
        "totalDraws": 0,
        "totalLosses": 0,
        "goalsFavor": 9,
        "goalsOwn": 3,
        "goalsBalance": 6,
        "efficiency": "100.00"
      },
      ...
      {
        "name": "Bahia",
        "totalPoints": 0,
        "totalGames": 3,
        "totalVictories": 0,
        "totalDraws": 0,
        "totalLosses": 3,
        "goalsFavor": 0,
        "goalsOwn": 4,
        "goalsBalance": -4,
        "efficiency": "0.00"
      }
    ]
    ```
</details>

#### **Endpoint:** `/leaderboard/away`
- <details><summary>Método GET</summary>

  Resposta  
  - Status: 200 OK
    ```json
    [
      {
        "name": "Palmeiras",
        "totalPoints": 6,
        "totalGames": 2,
        "totalVictories": 2,
        "totalDraws": 0,
        "totalLosses": 0,
        "goalsFavor": 7,
        "goalsOwn": 0,
        "goalsBalance": 7,
        "efficiency": "100.00"
      },
        ...
      {
        "name": "Napoli-SC",
        "totalPoints": 0,
        "totalGames": 3,
        "totalVictories": 0,
        "totalDraws": 0,
        "totalLosses": 3,
        "goalsFavor": 1,
        "goalsOwn": 10,
        "goalsBalance": -9,
        "efficiency": "0.00"
      }
    ]
    ```
</details>  
</details>


## Instalando localmente

Caso deseje contribuir ou simplesmente rodar o projeto na sua máquina, siga as orientações: 

. Clone o repositório   
  `git clone git@github.com:brenolg/Futebol-Club-API-Sequelize.git`

. Instale as dependências no diretório raiz  
  `npm install`

### **Docker**
1. Na raíz do projeto rode o comando:  
  `npm run compose:up`  
2. Em seguida abra o terminal interativo do container:  
  `docker exec -it app_backend sh`  
3. Instale as dependências dentro do container:  
  `npm install`

### **Rodando os testes**
Para rodar os testes de integração desenvolvidos por mim, entre na pasta backend e rode o comando:  
- `npm test`

## Requisitos
> *Clique na seta para ver a lista de requisitos.*

<details><summary><strong>Rotas Cars</strong></summary> 
<br/> 
01 - Endpoint /cars onde seja possível cadastrar um carro
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/cars`);

- Os carros cadastrados devem ser salvos na collection `cars` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- Os atributos necessários para criar um carro estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `ICar` que representa o contrato usado para cadastrar um carro;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *classe* de domínio com o nome `Car` que representa o objeto carro;
  - Será validado que a *classe* de domínio carro contém os atributos: `doorsQty` e `seatsQty` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio carro contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio carro recebe como parâmetro um objeto do tipo `ICar`;
  - Será validado que é possível cadastrar um carro com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.990,
        "doorsQty": 4,
        "seatsQty": 5
      }
    ```

  <br>
</details>
</details>

<br/> 
02 - Endpoints para listar carros
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/cars`) e (`/cars/:id`);

- Os carros listados devem vir da collection `cars` do banco de dados;

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser retornado;

<details close>
  <summary>Os seguintes pontos foram avaliados</summary>

  - Será validado que é possível listar todos os carros;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]
      ```
  - Será validado que não é possível listar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível listar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar um carro específico com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
        }
      ```
  <br>
</details>
</details>
<br/> 
03 -  Endpoint /cars/:id onde seja possível atualizar um carro por ID
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/cars`) e (`/cars/:id`);

- Os carros listados devem vir da collection `cars` do banco de dados;

- Através do caminho `/cars/:id`, apenas o carro com o `id` presente na URL deve ser retornado;

<details close>
  <summary>Os seguintes pontos foram avaliados</summary>

  - Será validado que é possível listar todos os carros;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Marea",
            "year": 2002,
            "color": "Black",
            "status": true,
            "buyValue": 15.99,
            "doorsQty": 4,
            "seatsQty": 5
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Tempra",
            "year": 1995,
            "color": "Black",
            "buyValue": 39,
            "doorsQty": 2,
            "seatsQty": 5
          }
        ]
      ```
  - Será validado que não é possível listar um carro que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Car not found" }
      ```
  - Será validado que não é possível listar um carro quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar um carro específico com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea2f",
          "model": "Marea",
          "year": 2002,
          "color": "Black",
          "status": true,
          "buyValue": 15.99,
          "doorsQty": 4,
          "seatsQty": 5
        }
      ```
  <br>
</details>
</details>
</details>
</details>
</details>

<details><summary><strong>Rotas Motorcycles</strong></summary> 

<br/> 
01 - Rota /motorcycles onde seja possível cadastrar uma moto
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/motorcycles`);

- As motos cadastradas devem ser salvas na collection `motorcycles` do banco de dados;

- Os nomes dos arquivos/classes/interfaces devem ser definidos em inglês e seguir a organização/padronização de diretórios e nomenclatura ensinadas na seção;

- Os nomes das classes devem possuir os mesmos nomes dos arquivos; (ex: `Pet.ts` ---> `export default class Pet { }`);

- *Interface* e *classe de domínio* referentes a carro, obrigatoriamente devem ser refatorados;

- Os atributos necessários para criar uma moto estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

- O corpo da requisição poderá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que existe uma *interface* de nome `IMotorcycle` que representa o contrato usado para cadastrar uma moto;
  - Será validado que a *interface* contém os atributos especificados na tabela;
  - Será validado que existe uma *interface* de nome `IVehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Interfaces` se necessário;_
  - Será validado que existe uma *classe* de domínio com o nome `Motorcycle` que representa o objeto moto;
  - Será validado que a *classe* de domínio moto contém os atributos: `category` e `engineCapacity` acessíveis apenas a própria classe;
  - Será validado que a *classe* de domínio moto contém os atributos restantes acessíveis a própria classe e suas subclasses;
  - Será validado que a instância da *classe* de domínio moto recebe como parâmetro um objeto do tipo `IMotorcycle`;
  - Será validado que existe uma *classe* de domínio com o nome `Vehicle` e esta contém os atributos repetidos de carro e moto;
    - _Deve-se refatorar as `Domains` se necessário;_
  - Será validado que a *classe* de domínio veiculo contém os atributos acessíveis a própria classe e suas subclasses;
  - Será validado que existe uma *classe* de nome `AbstractODM` que representa o modelo de comunicação com o banco e ela serve como abstração para as demais;
    - _Deve-se refatorar as `Models` se necessário;_
  - Será validado que é possível cadastrar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves:
    ```json
      {
        "id": "6348513f34c397abcad040b2",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>
</details>

<br/> 
02 - Rotas /motorcycles onde seja possível listar motos
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/motorcycles`) e (`/motorcycles/:id`);

- As motos listadas devem vir da collection `motorcycles` do banco de dados;

- Através do caminho `/motorcycles/:id`, apenas a moto com o `id` presente na URL deve ser retornada;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

  - Será validado que é possível listar todas as motos;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        [
          {
            "id": "634852326b35b59438fbea2f",
            "model": "Honda Cb 600f Hornet",
            "year": 2005,
            "color": "Yellow",
            "status": true,
            "buyValue": 30.000,
            "category": "Street",
            "engineCapacity": 600
          },
          {
            "id": "634852326b35b59438fbea31",
            "model": "Honda Cbr 1000rr",
            "year": 2011,
            "color": "Orange",
            "status": true,
            "buyValue": 59.900,
            "category": "Street",
            "engineCapacity": 1000
          }
        ]
      ```
  - Será validado que não é possível listar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível listar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível listar uma moto específica com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
      ```json
        {
          "id": "634852326b35b59438fbea31",
          "model": "Honda Cbr 1000rr",
          "year": 2011,
          "color": "Orange",
          "status": true,
          "buyValue": 59.900,
          "category": "Street",
          "engineCapacity": 1000
        }
      ```
  <br>
</details>
</details>
<br/> 
03 -  Rota /motorcycles/:id onde seja possível atualizar uma moto por ID
   
<details><summary><strong>Detalhes</strong></summary> 
- O endpoint deve ser acessível através do caminho (`/motorcycles/:id`);

- Apenas a moto com o `id` presente na URL deve ser atualizada;

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

<details close>
  <summary>Os seguintes pontos foram avaliados</summary>

  - Será validado que não é possível alterar uma moto que não existe;
    - Deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Motorcycle not found" }
      ```
  - Será validado que não é possível alterar uma moto quando o formato do `id` esta inválido;
    - Deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
      ```json
        { "message": "Invalid mongo id" }
      ```
  - Será validado que é possível alterar uma moto com sucesso;
    - Deve-se retornar um JSON com as seguintes chaves: 
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2014,
        "color": "Red",
        "status": true,
        "buyValue": 45.000,
        "category": "Street",
        "engineCapacity": 600
      }
    ```

  <br>
</details>
</details>
</details>
</details>
</details>
</details>
</details>

<details><summary><strong>Testes</strong></summary> 

- Obrigatoriamente seus arquivos de teste devem ficar no diretório `tests/unit`;

- Obrigatoriamente seus testes devem fazer stub do banco de dados;

- Opcionalmente você pode parar o serviço do `MongoDB` em sua máquina e executar seus teste com o comando `npm run test:mocha`;

- Só será contabilizada a cobertura, se seus testes não conterem erros.
  
01- Escreva testes para cobrir 30% da camada de Service
<details open>
  <summary>Detalhes</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 3 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 30%;

  <br>
</details>

02- Escreva testes para cobrir 60% da camada de Service
<details close>
  <summary>Detalhes</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 5 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 60%;

  <br>
</details>

03- Escreva testes para cobrir 80% da camada de Service
<details open>
  <summary>Detalhes</summary>

  - Será validado que os testes escritos por você estão sendo executados sem erros;
  - Será validado que existe um mínimo de 8 funções na camada `Services`.
  - Será validado que a cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 80%;

  <br>
</details>
</details>



## Agradecimentos
Gostaria de expressar minha profunda gratidão aos monitores e à Trybe por todo o suporte e orientação ao longo do projeto. Sua dedicação, conhecimento e disposição em ajudar foram fundamentais para o meu aprendizado e crescimento profissional. Sou grato pela oportunidade de fazer parte dessa comunidade de aprendizagem e por todo o apoio recebido durante essa jornada.

