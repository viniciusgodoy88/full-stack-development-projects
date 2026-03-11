# Domain Driven Design (DDD)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-Domain%20Driven%20Design-blue)
![Status](https://img.shields.io/badge/status-learning-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Este diretório contém exemplos e estudos práticos de **Domain Driven Design (DDD)** aplicados ao desenvolvimento backend.
O objetivo deste módulo é demonstrar como organizar o código seguindo princípios de modelagem de domínio, separação de responsabilidades e organização em camadas.
DDD é uma abordagem de design de software que busca modelar o sistema com base no **domínio do negócio**, aproximando o código da linguagem utilizada pelos especialistas da área. Essa abordagem facilita a manutenção, evolução e entendimento de sistemas complexos.

---

# Conceitos Aplicados

Os exemplos deste diretório utilizam alguns conceitos fundamentais do Domain Driven Design:

- **Entidades (Entities)**  
  Objetos que possuem identidade única dentro do domínio.

- **Value Objects**  
  Objetos imutáveis que representam valores do domínio.

- **Repositórios (Repositories)**  
  Abstração responsável por persistir e recuperar entidades.

- **Serviços de Domínio (Domain Services)**  
  Contêm regras de negócio que não pertencem diretamente a uma entidade.

- **Ubiquitous Language**  
  Linguagem comum utilizada entre desenvolvedores e especialistas do domínio.

---

# Estrutura de Diretórios

Domain Driven Design
│
├── entities
│ └── ...
│
├── repositories
│ └── ...
│
├── services
│ └── ...
│
└── index.ts


---

# Descrição dos Arquivos

## entities/

Contém as **entidades do domínio**, responsáveis por representar os principais objetos do negócio.

Exemplos de responsabilidades:

- Representar objetos com identidade
- Conter regras de negócio relacionadas à entidade
- Garantir consistência dos dados

---

## repositories/

Os **repositórios** são responsáveis por abstrair o acesso aos dados das entidades.

Eles funcionam como uma coleção de objetos de domínio, permitindo:

- salvar entidades
- buscar entidades
- atualizar dados do domínio

Esse padrão evita que a lógica de persistência polua o domínio da aplicação.

---

## services/

Os **serviços de domínio** concentram regras de negócio que não pertencem diretamente a uma entidade específica.

Exemplo de responsabilidades:

- cálculos complexos
- operações envolvendo múltiplas entidades
- regras de negócio transversais

---

## index.ts

Arquivo responsável por inicializar ou demonstrar a utilização dos componentes do domínio.

Pode conter:

- criação de entidades
- execução de regras de negócio
- exemplos de uso dos serviços e repositórios.

---

# Objetivo do Projeto

Este projeto faz parte do repositório **Full Stack Development Projects** e tem como objetivo:

- estudar arquitetura de software
- aplicar padrões de design
- praticar organização de código escalável
- aprender conceitos de Domain Driven Design

---

# Tecnologias Utilizadas

- TypeScript
- Node.js
- Programação Orientada a Objetos
- Arquitetura baseada em domínio

---

# Referências

- Eric Evans — *Domain Driven Design*
- Martin Fowler — *Patterns of Enterprise Application Architecture*


