# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Esta seção tem como objetivo apresentar os elementos detalhados da especificação da solução proposta. Serão utilizados métodos como definição de **personas**, construção de **histórias de usuários**, levantamento de **requisitos funcionais e não funcionais**, além do mapeamento de **restrições** do projeto. Tais elementos ajudam a definir escopo, público e as funcionalidades essenciais da plataforma de reviews de jogos.

---

## Personas

### Persona 1 — **Henrique, o Gamer Casual**
- **Idade:** 19 anos  
- **Profissão:** Estudante universitário  
- **Objetivos:** Quer aproveitar seu tempo livre jogando bons jogos, sem gastar dinheiro em títulos que não valem a pena.  
- **Dores:** Já comprou jogos baseando-se apenas em trailers e se decepcionou com a qualidade.  
- **Comportamento:** Costuma buscar recomendações em vídeos no YouTube ou comentários em fóruns, mas sente falta de uma fonte confiável com avaliações imparciais e estruturadas.  
- **Tecnologias:** Acessa a internet principalmente pelo celular.

### Persona 2 — **Jéssica, a Crítica Entusiasta**
- **Idade:** 29 anos  
- **Profissão:** Desenvolvedora de jogos independentes  
- **Objetivos:** Compartilhar análises técnicas dos jogos que joga e acompanhar tendências do mercado.  
- **Dores:** Sites grandes ignoram jogos indie e raramente fazem análises profundas.  
- **Comportamento:** Valoriza plataformas que dão voz à comunidade e incentivam a diversidade de opiniões.

### Persona 3 — **Carlos, o Jogador Hardcore**
- **Idade:** 34 anos  
- **Profissão:** Analista de TI  
- **Objetivos:** Encontrar jogos com ótima jogabilidade e performance gráfica.  
- **Dores:** Já foi enganado por notas exageradas de jogos AAA.  
- **Comportamento:** Faz análises técnicas detalhadas em fóruns e quer um espaço para compartilhar suas reviews com embasamento.

---

## Histórias de Usuários

| EU COMO... `PERSONA`     | QUERO/PRECISO ... `FUNCIONALIDADE`                  | PARA ... `MOTIVO/VALOR`                                   |
|--------------------------|-----------------------------------------------------|------------------------------------------------------------|
| Usuário do sistema       | Ler análises completas de jogos                     | Tomar decisões melhores antes de comprar                   |
| Usuário do sistema       | Cadastrar minhas próprias análises                  | Compartilhar minha experiência e ajudar outros usuários    |
| Usuário do sistema       | Avaliar jogos com critérios objetivos               | Dar uma nota justa com base em diferentes aspectos         |
| Desenvolvedor indie      | Ver meu jogo analisado na plataforma                | Obter visibilidade e feedback do público                   |
| Usuário visitante        | Filtrar análises por plataforma ou gênero           | Encontrar jogos que se encaixem nas minhas preferências    |

---

## Requisitos

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                   | Prioridade |
|--------|--------------------------------------------------------------------------|------------|
| RF-001 | Permitir o cadastro de novos usuários                                    | ALTA       |
| RF-002 | Permitir que usuários publiquem reviews de jogos                         | ALTA       |
| RF-003 | Permitir avaliação de jogos com notas em critérios (gráficos, história...)| ALTA       |
| RF-004 | Listar jogos com reviews e avaliações dos usuários                       | ALTA       |
| RF-005 | Permitir filtragem de jogos por plataforma, gênero e nota média          | MÉDIA      |
| RF-006 | Disponibilizar área de destaque para jogos independentes                 | MÉDIA      |

### Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                | Prioridade |
|---------|----------------------------------------------------------------------|------------|
| RNF-001 | O sistema deve ser responsivo e adaptado para dispositivos móveis     | ALTA       |
| RNF-002 | A página deve carregar em no máximo 3 segundos                        | MÉDIA      |
| RNF-003 | O site deve estar disponível 24 horas por dia                         | MÉDIA      |
| RNF-004 | A interface deve seguir boas práticas de usabilidade e acessibilidade | MÉDIA      |
| RNF-005 | O sistema deve suportar no mínimo 500 usuários simultâneos            | BAIXA      |

---

## Restrições

| ID  | Restrição                                              |
|-----|--------------------------------------------------------|
| 01  | O projeto deverá ser entregue até o final do semestre  |
| 02  | Não pode ser desenvolvido um módulo de backend         |
| 03  | O sistema será hospedado utilizando GitHub Pages       |
| 04  | Os dados de reviews serão armazenados em JSON estático |

