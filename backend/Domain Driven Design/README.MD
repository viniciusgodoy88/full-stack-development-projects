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

Domain Driven Design</br>
│</br>
├── entities</br>
│ └── ...</br>
│</br>
├── repositories</br>
│ └── ...</br>
│</br>
├── services</br>
│ └── ...</br>
│</br>
└── index.ts</br>

---

# 🧩 Descrição das Camadas

## entities

Contém as **entidades do domínio**, responsáveis por representar os principais objetos do negócio.

Responsabilidades:

- possuir identidade única
- encapsular regras de negócio
- representar conceitos importantes do domínio

---

## repositories

Os **repositórios** são responsáveis por abstrair o acesso aos dados das entidades.

Funções principais:

- salvar entidades
- buscar dados
- atualizar registros
- remover entidades

Esse padrão evita que a lógica de persistência fique misturada com as regras de negócio.

---

## services

Os **serviços de domínio** contêm regras de negócio que não pertencem diretamente a uma entidade específica.

Exemplos:

- cálculos complexos
- validações de domínio
- operações envolvendo múltiplas entidades

---

## index.ts

Arquivo responsável por demonstrar o funcionamento do domínio.

Pode conter:

- criação de entidades
- execução de serviços
- exemplos de uso de repositórios

---

# 🎯 Objetivo do Projeto

Este projeto faz parte do repositório **Full Stack Development Projects** e tem como objetivo:

- estudar arquitetura de software
- aplicar conceitos de Domain Driven Design
- praticar organização de código backend
- aprender padrões de arquitetura escalável

---

# 🛠️ Tecnologias Utilizadas

- TypeScript
- Node.js
- Programação Orientada a Objetos
- Arquitetura baseada em domínio

---

# 📖 Referências

- Eric Evans — *Domain Driven Design*
- Martin Fowler — *Patterns of Enterprise Application Architecture*

---

# 👨‍💻 Autor

Desenvolvido por **Vinicius Godoy**

GitHub:  
https://github.com/viniciusgodoy88
