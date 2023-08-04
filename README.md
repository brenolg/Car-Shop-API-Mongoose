# Car Shop API 

API para gerenciar uma concessionária de veículos. O objetivo era aplicar os princípios da Programação Orientada a Objetos (POO) na arquitetura Model-Service-Controller (MSC), utilizando TypeScript como linguagem de programação e o ODM (Object Document Mapper) Mongoose para se conectar a um banco de dados MongoDB.

A importância desse projeto residia na criação de uma API seguindo os pilares da POO e a arquitetura MSC, proporcionando benefícios como escalabilidade e facilidade de manutenção da aplicação. Durante o desenvolvimento, foi considerada a capacidade de expansão da API, permitindo futuras mudanças, como a substituição do banco de dados utilizado, sem afetar a estrutura geral da aplicação.

No contexto desse projeto, foram exercitados os pilares da POO, como Herança, Abstração, Encapsulamento e Polimorfismo, bem como foram utilizados Composição e criadas e utilizadas Interfaces. A implementação em TypeScript envolveu a criação de Classes, Instâncias, Atributos, Métodos e Objetos. Além disso, foram aplicados os conhecimentos de MongoDB, TypeScript e POO para desenvolver uma API com as operações de CRUD (Create, Read, Update, Delete).

O escopo do projeto incluiu etapas como a criação de uma rota para cadastrar carros, um endpoint para listar carros, a escrita de testes para cobrir uma porcentagem da camada de Service, uma rota para atualizar carros por ID, uma rota para cadastrar motos, testes adicionais para cobrir uma porcentagem maior da camada de Service e uma rota para listar motos. Como bônus, foi implementada uma rota para atualizar motos por ID, além de mais testes para cobrir uma porcentagem maior da camada de Service.

O projeto foi desenvolvido individualmente, com foco na aplicação dos princípios da POO na construção da API. O objetivo final era criar um sistema de gerenciamento de uma concessionária de veículos, utilizando o banco de dados MongoDB e o framework Mongoose.

## Funcionalidades

- Cadastro de carros: O projeto permite cadastrar carros na concessionária, fornecendo informações como marca, modelo, ano, cor e preço.
- Listagem de carros: É possível obter uma lista de todos os carros cadastrados na concessionária.
- Atualização de carros por ID: O projeto oferece uma rota para atualizar as informações de um carro específico com base no seu ID.
- Cadastro de motos: Além dos carros, o projeto permite cadastrar motos na concessionária, fornecendo informações como marca, modelo, ano, cor e preço.
- Listagem de motos: É possível obter uma lista de todas as motos cadastradas na concessionária.
- Atualização de motos por ID: O projeto possui uma rota que permite atualizar as informações de uma moto específica com base no seu ID.
- Programação Orientada a Objetos e princípios SOLID:
- Implementar, em TypeScript: `Classes`, `Instâncias`, `Atributos` e `Métodos`.
- Arquitetura Model-Service-Controller (MSC)

# Tecnologias utilizadas


- TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Programação Orientada a Objetos (POO)
- Arquitetura Model-Service-Controller (MSC)

  ### **Testes**
    - Mocha
    - Chai
    - Sinon

## Documentação da API

<details close>
      <summary><strong> Visão geral</summary>

| Endpoint     | Método HTTP | Descrição               | 
| :----------- | :---------- | :---------------------- |
| `/cars`|  POST        |  Cadastra um novo carro|
| `/cars`| GET         | Retorna todos os carros |
| `/cars/:id`| GET         | Retorna o carro especificado no id|
| `/cars/:id`| PUT         |  Atualiza um carro especificado no id|
| `/motorcycles`| POST        | Cadastra uma nova moto|
| `/motorcycles`| GET         |  Retorna todas as motos  |
| `/motorcycles/:id`| GET         | Retorna a moto especificado no id|
| `/motorcycles/:id` | PUT         | Atualiza uma moto especificada no id|

</details>

#### **Corpo das requisições e respostas**  
> *Clique nas setas para ver mais*  

#### **Endpoint:** `/cars`
- <details><summary> Método POST</summary>  
  Respostas 
  
    - O corpo da requisição e resposta deve seguir o formato abaixo com excessão do id que é gerado apenas na resposta:
    - Status: 201 Created
  
    ```json
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 1992,
        "color": "Red",
        "status": true,
        "buyValue": 12.000,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ```
</details>

#### **Endpoint:** `/cars`
- <details><summary>Método GET</summary>

  Respostas  
    - Status: 200 OK
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
</details>

#### **Parâmetro id:** `/cars/:id`
- <details> <summary>Método GET</summary>

  Respostas 
  - Status: 200 OK  
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
  - Status 404 Not Found Error
      ```json
        { "message": "Car not found" }
      ```

  - Status 422 Unprocessable
      ```json
        { "message": "Invalid mongo id" }
      ```
</details>

#### **Parâmetro id:** `/cars/:id`
- <details><summary>Método PUT</summary>

  Respostas 
  - Status: 200 OK  
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
  - Status 404 Not Found Error
      ```json
        { "message": "Car not found" }
      ```

  - Status 422 Unprocessable
      ```json
        { "message": "Invalid mongo id" }
      ```
</details>

#### **Endpoint:** `/motorcycles`
- <details><summary> Método POST</summary>  
  Respostas 
  
    - O corpo da requisição e resposta deve seguir o formato abaixo com excessão do id que é gerado apenas na resposta:
    - Status: 201 Created
  
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
</details>

#### **Endpoint:** `/motorcycles`
- <details><summary>Método GET</summary>

  Respostas  
    - Status: 200 OK
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
</details>

#### **Parâmetro id:** `/motorcycles/:id`
- <details> <summary>Método GET</summary>

  Respostas 
  - Status: 200 OK  
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
  - Status 404 Not Found Error
      ```json
        { "message": "Motorcycle not found" }
      ```

  - Status 422 Unprocessable
      ```json
        { "message": "Invalid mongo id" }
      ```
</details>

#### **Parâmetro id:** `/motorcycles/:id`
- <details><summary>Método PUT</summary>

  Respostas 
  - Status: 200 OK  
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
  - Status 404 Not Found Error
      ```json
        { "message": "Motorcycle not found" }
      ```

  - Status 422 Unprocessable
      ```json
        { "message": "Invalid mongo id" }
      ```
</details>



## Instalando localmente

Caso deseje contribuir ou simplesmente rodar o projeto na sua máquina, siga as orientações: 

. Clone o repositório   
  `git clone https://github.com/brenolg/Car-Shop-API-Mongoose`

. Instale as dependências no diretório raiz  
  `npm install`

### **Docker**
1. Na raíz do projeto rode o comando:  
  `docker-compose up -d`  
2. Em seguida abra o terminal interativo do container:  
  `docker exec -it car_shop bash`  
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

04- Cobertura total das linhas dos arquivos da camada `Services` é maior ou igual a 100%;

</details>

## Agradecimentos
Gostaria de expressar minha profunda gratidão aos monitores e à Trybe por todo o suporte e orientação ao longo do projeto. Sua dedicação, conhecimento e disposição em ajudar foram fundamentais para o meu aprendizado e crescimento profissional. Sou grato pela oportunidade de fazer parte dessa comunidade de aprendizagem e por todo o apoio recebido durante essa jornada.

