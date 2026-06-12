# 🖥️ Full Stack Development Projects

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![OutSystems](https://img.shields.io/badge/OutSystems-FF5000?style=for-the-badge&logo=outsystems&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

![Repo Stars](https://img.shields.io/github/stars/viniciusgodoy88/full-stack-development-projects?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/viniciusgodoy88/full-stack-development-projects?style=flat-square)

Repositório de projetos desenvolvidos durante o programa **Postech Full Stack Development (FIAP)**, cobrindo backend, frontend, mobile, cloud, banco de dados, low code e aula inaugural.

---

## 📁 Estrutura Completa do Repositório

```
full-stack-development-projects/
│
├── 📂 backend/
│   ├── 📂 Docker/
│   │   ├── docker-compose.yml
│   │   └── node-app-main/              # App Node.js containerizado
│   │       ├── app.js
│   │       ├── Dockerfile
│   │       └── Dockerfile-fiap
│   │
│   ├── 📂 Domain Driven Design/
│   │   ├── Aula 02 - DDD (diagramas .svg / .png)
│   │   ├── Aula 06 - Event Storming (.pdf)
│   │   └── README.MD
│   │
│   ├── 📂 Low Code Development/
│   │   ├── BloggingGrupo01FSDT.oml
│   │   ├── Chamados_backend.oml
│   │   ├── Chamados_frontend.oml
│   │   ├── lmsolutionsappV1.oml
│   │   ├── TC_Blogging_GP01_BackEnd.oml
│   │   └── TC_Blogging_GP01_Service.oml
│   │
│   ├── 📂 Node.JS/
│   │   ├── 📂 FULLSTACK_NODEJS_INICIO/
│   │   │   ├── aula1/                  # Fundamentos Node.js (5 exemplos)
│   │   │   │   ├── exemplo1/           # Hello World / módulos básicos
│   │   │   │   ├── exemplo2/           # Leitura de arquivos
│   │   │   │   ├── exemplo3/           # HTTP nativo
│   │   │   │   ├── exemplo4/           # npm e dependências
│   │   │   │   └── exemplo5/           # AWS Lambda local
│   │   │   ├── aula2/                  # Express + Middlewares + EJS
│   │   │   │   ├── exemplo/            # Template engine + autenticação básica
│   │   │   │   └── exemplo2/           # API de ações (Alpha Vantage) + MVC
│   │   │   ├── aula3/                  # CRUD de Usuários com Express
│   │   │   ├── aula4/                  # CRUD completo + Views EJS + MongoDB
│   │   │   └── aula5/                  # API REST com autenticação JWT
│   │   │
│   │   └── 📂 nodejs_integracao_banco_fiap-main/
│   │       ├── 📂 pettech/             # API PetTech — TypeScript + TypeORM + PostgreSQL
│   │       │   └── src/
│   │       │       ├── entities/       # Entidades: User, Product, Category, Person, Address
│   │       │       ├── http/
│   │       │       │   ├── controllers/ # Controllers: user, product, category, person, address
│   │       │       │   └── middlewares/ # JWT middleware
│   │       │       ├── lib/
│   │       │       │   ├── pg/         # Conexão PostgreSQL nativa
│   │       │       │   └── typeorm/    # Configuração TypeORM + Migrations
│   │       │       ├── repositories/
│   │       │       │   ├── pg/         # Repositories via pg (address, person, user)
│   │       │       │   └── typeorm/    # Repositories via TypeORM (category, product)
│   │       │       ├── use-cases/      # Casos de uso + Factories + Erros
│   │       │       └── utils/          # HTTP client + global error handler
│   │       │
│   │       └── 📂 stock_pettech_product/ # Microserviço de Estoque — NestJS + MongoDB
│   │           ├── src/
│   │           │   ├── shared/
│   │           │   │   ├── filters/    # HTTP Exception Filter
│   │           │   │   ├── guards/     # Auth Guard
│   │           │   │   ├── interceptors/ # Logging Interceptor
│   │           │   │   ├── middlewares/ # ReDoc Middleware
│   │           │   │   ├── pipe/       # Zod Validation Pipe
│   │           │   │   └── services/   # Prometheus Service
│   │           │   └── stock/
│   │           │       ├── controllers/ # Stock Controller
│   │           │       ├── repositories/ # Product Repository (Mongoose)
│   │           │       ├── schemas/    # Product Schema + Interface
│   │           │       └── services/   # Stock Service
│   │           ├── test/               # E2E tests (Jest)
│   │           ├── docker-compose.yml
│   │           ├── Dockerfile
│   │           └── prometheus.yml
│   │
│   └── 📂 Typescript/
│       ├── Aula01/                     # Tipos, interfaces e módulos básicos
│       │   ├── biblioteca.ts
│       │   └── curso.ts
│       ├── Aula02/                     # Programação Orientada a Objetos (POO)
│       │   ├── poo.ts
│       │   └── poo2.ts
│       ├── Aula03/                     # Generics
│       │   ├── generics.ts
│       │   ├── generics2.ts
│       │   └── index.ts
│       ├── Aula04/                     # Operações básicas e avançadas
│       │   ├── app.ts
│       │   ├── operacoesbasicas.ts
│       │   └── operacoesavancadas.ts
│       └── Aula05/                     # Padrões e interfaces (email, lampada)
│           ├── email.ts
│           └── lampada.ts
│
├── 📂 cloud/
│   └── README.md
│
├── 📂 database/
│   └── README.md
│
├── 📂 frontend/
│   └── README.md
│
├── 📂 mobile/
│   └── README.md
│
└── 📂 inalgural-class-0503/            # Aula Inaugural — HTML + CSS + JS
    ├── index.html
    ├── script.js
    └── style.css
```

---

## 🔍 Detalhamento dos Projetos

### 🟦 TypeScript — Fundamentos (`backend/Typescript/`)

Série de aulas cobrindo do zero ao avançado em TypeScript.

| Aula   | Conteúdo                                                            |
| ------ | ------------------------------------------------------------------- |
| Aula01 | Tipos primitivos, interfaces, módulos (`biblioteca.ts`, `curso.ts`) |
| Aula02 | Programação Orientada a Objetos — classes, herança, encapsulamento  |
| Aula03 | Generics — funções e classes genéricas                              |
| Aula04 | Operações básicas e avançadas, composição de módulos                |
| Aula05 | Padrões com interfaces — implementações práticas (email, lampada)   |

**Stack:** TypeScript · Node.js · npm

---

### 🐳 Docker (`backend/Docker/`)

Containerização de uma aplicação Node.js com Docker e Docker Compose.

- `Dockerfile` e `Dockerfile-fiap` — builds otimizados
- `docker-compose.yml` — orquestração local
- `app.js` — aplicação Node.js containerizada

**Stack:** Docker · Docker Compose · Node.js

---

### 🧩 Domain Driven Design (`backend/Domain Driven Design/`)

Material de estudo e diagramação de arquitetura orientada a domínio.

- Diagramas de DDD (Aula 02) em `.svg` e `.png`
- Event Storming (Aula 06) em `.pdf`

**Conceitos:** Bounded Contexts · Aggregates · Domain Events · Event Storming

---

### 🟣 Low Code Development (`backend/Low Code Development/`)

Projetos desenvolvidos com a plataforma OutSystems.

| Arquivo                        | Descrição                        |
| ------------------------------ | -------------------------------- |
| `BloggingGrupo01FSDT.oml`      | App de blogging em grupo         |
| `Chamados_backend.oml`         | Backend de sistema de chamados   |
| `Chamados_frontend.oml`        | Frontend de sistema de chamados  |
| `lmsolutionsappV1.oml`         | App LM Solutions v1              |
| `TC_Blogging_GP01_BackEnd.oml` | Tech Challenge — backend do blog |
| `TC_Blogging_GP01_Service.oml` | Tech Challenge — serviço do blog |

**Stack:** OutSystems · Low Code

---

### 🟢 Node.JS — Início (`backend/Node.JS/FULLSTACK_NODEJS_INICIO/`)

Progressão completa de aulas com Node.js puro até APIs REST com autenticação.

| Aula             | Conteúdo Principal                                      |
| ---------------- | ------------------------------------------------------- |
| Aula1 — exemplo1 | Módulos e execução básica                               |
| Aula1 — exemplo2 | Leitura e escrita de arquivos                           |
| Aula1 — exemplo3 | HTTP server nativo                                      |
| Aula1 — exemplo4 | npm, package.json e dependências                        |
| Aula1 — exemplo5 | Simulação de AWS Lambda local                           |
| Aula2 — exemplo  | Express + EJS + logger + auth básica                    |
| Aula2 — exemplo2 | API de cotações de ações (Alpha Vantage) — MVC completo |
| Aula3            | CRUD de usuários com Express + rotas separadas          |
| Aula4            | CRUD completo + MongoDB + views EJS + CSS               |
| Aula5 — exemplo1 | API REST com autenticação JWT                           |

**Stack:** Node.js · Express · MongoDB · EJS · JWT · npm

---

### 🐾 PetTech API (`backend/Node.JS/nodejs_integracao_banco_fiap-main/pettech/`)

API REST completa de gerenciamento de pets, produtos e usuários com arquitetura limpa.

**Entidades:** `User` · `Product` · `Category` · `Person` · `Address`

**Arquitetura:**

- Controllers por recurso com rotas separadas
- Use Cases independentes por ação (create, find, update, delete)
- Factory Pattern para instanciar use cases
- Repository Pattern com dois adapters: `pg` (raw SQL) e `typeorm`
- Middleware de validação JWT
- Migrations com TypeORM

**Stack:** TypeScript · Node.js · Express · PostgreSQL · TypeORM · pg · JWT · Zod

---

### 📦 Stock PetTech Product (`backend/Node.JS/nodejs_integracao_banco_fiap-main/stock_pettech_product/`)

Microserviço de controle de estoque de produtos, pronto para produção.

**Funcionalidades:**

- CRUD de produtos com MongoDB/Mongoose
- Validação via Zod Pipe customizado
- Autenticação com Auth Guard
- Logging com Interceptor
- Tratamento global de exceções com Filter
- Documentação via Swagger + ReDoc
- Métricas expostas via Prometheus
- Testes E2E com Jest
- CI/CD via GitHub Actions
- Deploy com Docker + Docker Compose

**Stack:** NestJS · TypeScript · MongoDB · Mongoose · Zod · Docker · Prometheus · Jest · GitHub Actions

---

### 🌐 Aula Inaugural (`inalgural-class-0503/`)

Projeto web desenvolvido na aula inaugural do programa.

- `index.html` — estrutura da página
- `style.css` — estilização
- `script.js` — interatividade

**Stack:** HTML5 · CSS3 · JavaScript

---

## 🧰 Tecnologias por Área

| Área                       | Tecnologias                  |
| -------------------------- | ---------------------------- |
| **Linguagens**             | TypeScript, JavaScript       |
| **Runtime**                | Node.js                      |
| **Frameworks**             | NestJS, Express              |
| **Banco Relacional**       | PostgreSQL                   |
| **Banco NoSQL**            | MongoDB                      |
| **ORM / ODM**              | TypeORM, Mongoose, pg        |
| **Autenticação**           | JWT                          |
| **Validação**              | Zod                          |
| **Containerização**        | Docker, Docker Compose       |
| **Monitoramento**          | Prometheus                   |
| **Documentação**           | Swagger, ReDoc               |
| **Testes**                 | Jest (E2E)                   |
| **CI/CD**                  | GitHub Actions               |
| **Low Code**               | OutSystems                   |
| **Frontend**               | HTML5, CSS3, JavaScript, EJS |
| **Gerenciador de Pacotes** | npm                          |

---

## 🎯 Objetivos de Aprendizado

- Dominar TypeScript desde fundamentos até padrões avançados
- Construir APIs RESTful escaláveis com Node.js e NestJS
- Aplicar Clean Architecture, MVC e Domain Driven Design
- Integrar bancos relacionais (PostgreSQL) e NoSQL (MongoDB)
- Containerizar aplicações com Docker e Docker Compose
- Implementar autenticação e autorização com JWT
- Monitorar serviços com Prometheus
- Automatizar pipelines com GitHub Actions
- Desenvolver aplicações low code com OutSystems

---

📌 Todos os projetos são desenvolvidos com boas práticas em mente, seguindo os princípios ensinados no programa **Postech Full Stack Development — FIAP**.
