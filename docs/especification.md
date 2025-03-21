# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

João tem 46 anos, é um produtor de frutas tropicais com vasta experiencia. Com a alta do dólar e desvalorização do real, João pretende vender suas frutas para mercados internacionais como União Europeia, Estados Unidos e Japão. Porém, por falta de conhecimento técnico e jurídico, João não sabe como cada pesticida utilizado em sua fazenda vai afetar a entrada de seus produtos em cada um dos mercados. 

Maria tem 33 anos e recentemente se tornou responsável por uma propriedade rural familiar que era de responsabilidade de seus pais. Maria sempre viu e se incomodou com a instabilidade do mercado nacional e como essa instabilidade afetava negativamente o negócio da sua família. Agora que Maria está em uma posição de liderança, ela busca expandir sua base consumidora e diminuir as incertezas de seu negócio.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF001| O sistema deve permitir o cadastramento de produtos incluindo suas principais características e os pesticidas utilizados.  | ALTA |  
|RF002| O sistema deve listar os produtos cadastrados.    | MÉDIA | 
|RF003| O sistema deve permitir ao usuário consultar um banco de dados local.  | ALTA |
|RF004| O sistema deve listar para o usuário os locais onde os pesticidas utilizados são proibidos e onde não há restrições.   | ALTA |
|RF005| O sistema deve permitir que o usuário consulte a situação de um pesticida específico no banco de dados local.    | ALTA |
|RF006| O sistema deve permitir que o usuário cadastre um monitoramento contínuo da situação de um pesticida.    | ALTA |
|RF007| O sistema deve listar os pesticidas monitorados, apresentando em que locais eles são proibidos e onde são permitidos.    | ALTA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF001| A interface da aplicação deve ser clara e intuitiva, facilitando a navegação e permitindo a rápida adaptação as funcionalidades disponíveis. | ALTA |
|RNF002| A interface deve ser responsiva, se adaptando a diferentes tamanhos de telas, sejam elas desktop, tablet ou smartphone, facilitando o uso em diferentes dispositivos. | ALTA |
|RNF003| A aplicação deve ser funcional nos mais diversos navegadores, Chrome, Firefox, Safari, Edge, Opera, etc. |  MÉDIA |
|RNF004| A aplicação deve ser capaz de carregar seus recursos rapidamente sem apresentar travamentos, para isso pode se adotar uma estrutura simples no HTML, CSS e Java Script. | ALTA |
|RNF005| O código da aplicação deve ser limpo e organizado, facilitando a manutenibilidade e a possível adição de novas funcionalidades. | BAIXA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

Devido a ser um projeto voltado para produtores de médio e pequeno porte, que ainda não tem esse contato com o mercado internacional, porém busca o mesmo, a fim de uma progressão de mercado. São identificadas as seguintes restrições ao projeto:

|ID| Restrições                                            |
|--|-------------------------------------------------------|
|01| Cronograma: Etapa 1: Análise e especificação do problema (23/03); Etapa 2: Projeto dos requisitos e de artefatos do sistema (13/04); Etapa 3: Desenvolvimento da estrutura estática da solução (11/05); Etapa 4: Desenvol. da estrutura dinâmica da solução e Plano de Testes (15/06); Etapa 5: Testes, implantação e apresentação da solução (22/06); Apresentação do Projeto: 29/06.|
|02| Layout e conteúdo: devem ser objetivos, claros, concisos e fáceis para facilitar a navegação e identificação dos elementos necessários para os usuários;|
|03| Veracidade das informações: deve-se ter uma base de dados, sendo ela confiável para entregar conteúdos verídicos e qualificados;|
|04| Automatização da atualização de informações contidas no site: para o tópico anterior ser alcançado da melhor forma, deve-se ter uma atualização diária ou mais recorrente da base de dados.|


> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
