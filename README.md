# Informações do Projeto
`Gamer Score`

Trabalho Interdisciplinar - Aplicacões Web

`CURSO`: Trabalho Interdisciplinar: Aplicações Web

`SEMESTRE:` > Primeiro semestre

`OBJETIVO ODS:` > Inclua os números e a descrição do(s) objetivo(s) ODS da ONU que o Projeto vai atender.

## Participantes

Os membros do grupo são:
- Henrique Fonseca Araújo
- Carolina de Ávila Freitas Leite
- Samuel Ferreira Campos
- Samuel Vasconcelos Rocha
- Lucas Alaane Mesquita de Araújo
- Thiago Batista de Souza Marcelino
- Miguel Augusto Azevedo Maia

> Inclua a lista dos membros da equipe com seus nomes completos.

# Estrutura do Projeto

1. [Contexto](./docs/1-Contexto.md)
2. [Especificações do Projeto](./docs/2-Especificação.md)
3. [Projeto da Interface](./docs/3-Interface.md)
4. [Gerenciamento do Projeto](./docs/4-Gerenciamento-Projeto.md)
5. [Implementação](./docs/5-Implementação.md)
6. [Referências](./docs/6-Referências.md)
7. [Apresentação do trabalho](./docs/apresentacao/README.md)

## Pasta docs

Esta pasta arquiva a documentação dos projetos.

Na pasta `docs`, há uma subpasta `images` que deve arquivar todas as imagens utilizadas para a elaboração do documento.

## Pasta src

Este diretório armazena o código fonte do projeto e adota uma hierarquia básica de projetos Web simples, que utilizam as tecnologias HTML, CSS e JavaScript.

## Gamer Score

Welcome to the **[Gamer Score]** repository! This project uses **JSON Server** to simulate a backend for games and user login. Below are the instructions to set up and run the JSON Server for both games and user authentication.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running locally:

### 1. **Install Dependencies**

First, ensure that you have `npx` installed. If not, you can install it by running:

```bash
npm install
```

### 2. **Start the databases**

Second, start the JSON SERVERS database using `json-server`

Game database
```bash
npx json-server --watch data/db.json --port 3000
```

Users database
```bash
npx json-server --watch data/auth.json --port 3001
```