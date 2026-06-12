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
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![OutSystems](https://img.shields.io/badge/OutSystems-FF5000?style=for-the-badge&logo=outsystems&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

# Backend Projects

Esta pasta reúne todos os projetos e exercícios de **back-end** desenvolvidos durante o programa Postech Full Stack Development (FIAP), organizados por tema e tecnologia.

---

## 📂 Estrutura

```
backend/
│
├── Docker/
│   ├── docker-compose.yml
│   └── node-app-main/
│       ├── app.js
│       ├── Dockerfile
│       └── Dockerfile-fiap
│
├── Domain Driven Design/
│   ├── Aula 02 - DDD (diagramas .svg / .png)
│   ├── Aula 06 - Event Storming (.pdf)
│   └── README.MD
│
├── Low Code Development/
│   ├── BloggingGrupo01FSDT.oml
│   ├── Chamados_backend.oml
│   ├── Chamados_frontend.oml
│   ├── lmsolutionsappV1.oml
│   ├── TC_Blogging_GP01_BackEnd.oml
│   └── TC_Blogging_GP01_Service.oml
│
├── Node.JS/
│   ├── FULLSTACK_NODEJS_INICIO/
│   │   ├── aula1/ (exemplos 1 a 5)
│   │   ├── aula2/ (exemplos 1 e 2)
│   │   ├── aula3/
│   │   ├── aula4/
│   │   └── aula5/
│   │
│   └── nodejs_integracao_banco_fiap-main/
│       ├── pettech/
│       └── stock_pettech_product/
│
└── Typescript/
    ├── Aula01/
    ├── Aula02/
    ├── Aula03/
    ├── Aula04/
    └── Aula05/
```

---

## 🟦 TypeScript — Fundamentos

Série de aulas cobrindo os principais conceitos de TypeScript com exemplos práticos.

| Aula       | Conteúdo                                                                    |
| ---------- | --------------------------------------------------------------------------- |
| **Aula01** | Tipos primitivos, interfaces e módulos (`biblioteca.ts`, `curso.ts`)        |
| **Aula02** | Programação Orientada a Objetos — classes, herança e encapsulamento         |
| **Aula03** | Generics — funções e classes genéricas                                      |
| **Aula04** | Operações básicas e avançadas, composição de módulos                        |
| **Aula05** | Padrões com interfaces — implementações práticas (`email.ts`, `lampada.ts`) |

**Stack:** `TypeScript` `Node.js` `npm`

---

## 🐳 Docker

Containerização de uma aplicação Node.js com Docker e Docker Compose.

- `Dockerfile` e `Dockerfile-fiap` — builds multi-stage
- `docker-compose.yml` — orquestração de serviços local
- `app.js` — aplicação Node.js containerizada

**Stack:** `Docker` `Docker Compose` `Node.js`

---

## 🧩 Domain Driven Design

Material de arquitetura e diagramação orientada a domínio.

- **Aula 02** — Diagramas de DDD em `.svg` e `.png`
- **Aula 06** — Event Storming em `.pdf`

**Conceitos:** `Bounded Contexts` `Aggregates` `Domain Events` `Event Storming`

---

## 🟣 Low Code Development

Projetos desenvolvidos com a plataforma OutSystems.

| Arquivo                        | Descrição                        |
| ------------------------------ | -------------------------------- |
| `BloggingGrupo01FSDT.oml`      | App de blogging em grupo         |
| `Chamados_backend.oml`         | Backend do sistema de chamados   |
| `Chamados_frontend.oml`        | Frontend do sistema de chamados  |
| `lmsolutionsappV1.oml`         | App LM Solutions v1              |
| `TC_Blogging_GP01_BackEnd.oml` | Tech Challenge — backend do blog |
| `TC_Blogging_GP01_Service.oml` | Tech Challenge — serviço do blog |

**Stack:** `OutSystems` `Low Code`

---

## 🟢 Node.JS — Início (`FULLSTACK_NODEJS_INICIO`)

Progressão de aulas do Node.js puro até APIs REST com autenticação JWT.

| Aula            | Conteúdo                                                   |
| --------------- | ---------------------------------------------------------- |
| **Aula1 — ex1** | Módulos e execução básica                                  |
| **Aula1 — ex2** | Leitura e escrita de arquivos                              |
| **Aula1 — ex3** | HTTP server nativo                                         |
| **Aula1 — ex4** | npm, `package.json` e dependências                         |
| **Aula1 — ex5** | Simulação de AWS Lambda local                              |
| **Aula2 — ex1** | Express + EJS + logger + autenticação básica               |
| **Aula2 — ex2** | API de cotações (Alpha Vantage) — arquitetura MVC completa |
| **Aula3**       | CRUD de usuários com Express e rotas separadas             |
| **Aula4**       | CRUD completo + MongoDB + views EJS + CSS                  |
| **Aula5**       | API REST com autenticação JWT                              |

**Stack:** `Node.js` `Express` `MongoDB` `EJS` `JWT` `npm`

---

## 🐾 PetTech API (`nodejs_integracao_banco_fiap-main/pettech`)

API REST completa de gerenciamento de pets, produtos e usuários com Clean Architecture.

**Entidades:** `User` · `Product` · `Category` · `Person` · `Address`

**Arquitetura:**

```
src/
├── entities/        # Entidades TypeORM + interfaces de modelo
├── http/
│   ├── controllers/ # Rotas por recurso: user, product, category, person, address
│   └── middlewares/ # Middleware de validação JWT
├── lib/
│   ├── pg/          # Conexão PostgreSQL nativa
│   └── typeorm/     # Configuração TypeORM + Migrations
├── repositories/
│   ├── pg/          # Repositórios via pg (address, person, user)
│   └── typeorm/     # Repositórios via TypeORM (category, product)
├── use-cases/       # Casos de uso + Factory Pattern + Erros customizados
└── utils/           # HTTP client e global error handler
```

**Stack:** `TypeScript` `Node.js` `Express` `PostgreSQL` `TypeORM` `pg` `JWT` `Zod`

---

## 📦 Stock PetTech Product (`nodejs_integracao_banco_fiap-main/stock_pettech_product`)

Microserviço de controle de estoque de produtos, pronto para produção.

**Arquitetura:**

```
src/
├── shared/
│   ├── filters/      # HTTP Exception Filter global
│   ├── guards/       # Auth Guard (JWT)
│   ├── interceptors/ # Logging Interceptor
│   ├── middlewares/  # ReDoc Middleware
│   ├── pipe/         # Zod Validation Pipe customizado
│   └── services/     # Prometheus Service (métricas)
└── stock/
    ├── controllers/  # Stock Controller
    ├── repositories/ # Product Repository com adapter Mongoose
    ├── schemas/      # Product Schema + Interface
    └── services/     # Stock Service
```

**Funcionalidades:**

- CRUD de produtos com MongoDB + Mongoose
- Validação com Zod via Pipe customizado
- Autenticação com Auth Guard (JWT)
- Logging automático via Interceptor
- Tratamento global de erros via Filter
- Documentação com Swagger + ReDoc
- Métricas expostas via Prometheus
- Testes E2E com Jest
- CI/CD via GitHub Actions
- Deploy com Docker + Docker Compose

**Stack:** `NestJS` `TypeScript` `MongoDB` `Mongoose` `Zod` `Docker` `Prometheus` `Jest` `GitHub Actions`

---

## 🎯 Objetivos de Aprendizado

- Dominar TypeScript do básico aos padrões avançados
- Construir APIs RESTful escaláveis com Node.js e NestJS
- Aplicar Clean Architecture, MVC e Domain Driven Design na prática
- Integrar bancos relacionais (PostgreSQL) e NoSQL (MongoDB)
- Containerizar aplicações com Docker e Docker Compose
- Implementar autenticação e autorização com JWT
- Monitorar serviços em produção com Prometheus
- Automatizar pipelines com GitHub Actions
- Desenvolver aplicações low code com OutSystems

---

📌 Todos os projetos seguem boas práticas de desenvolvimento ensinadas no programa **Postech Full Stack Development — FIAP**.
