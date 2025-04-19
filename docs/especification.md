## Personas

João tem 46 anos, é um produtor de frutas tropicais com vasta experiencia. Com a alta do dólar e desvalorização do real, João pretende vender suas frutas para mercados internacionais como União Europeia, Estados Unidos e Japão. Porém, por falta de conhecimento técnico e jurídico, João não sabe como cada pesticida utilizado em sua fazenda vai afetar a entrada de seus produtos em cada um dos mercados. 

Maria tem 33 anos e recentemente se tornou responsável por uma propriedade rural familiar que era de responsabilidade de seus pais. Maria sempre viu e se incomodou com a instabilidade do mercado nacional e como essa instabilidade afetava negativamente o negócio da sua família. Agora que Maria está em uma posição de liderança, ela busca expandir sua base consumidora e diminuir as incertezas de seu negócio.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Eu como produtor rural | Quero cadastrar um novo produto informando suas características (nome, data de plantio, data de colheita etc.) e os pesticidas utilizados  | Para manter um registro atualizado e acompanhar todos os produtos aplicados nos meus plantios, garantindo uso seguro e dentro da lei|
|Eu como produtor rural |  Quero visualizar uma lista de todos os produtos cadastrados | Para localizar rapidamente um produto específico e acompanhar o status de cada um, sem precisar pesquisar individualmente|
|Eu como produtor rural | Quero cadastrar pesticidas em um sistema de monitoramento (incluindo onde são legalizados ou proibidos)             | Para manter minhas produções seguras e dentro da lei |
|Eu como produtor rural | Quero acompanhar os pesticidas e suas mudanças em relação aos mercados em que eles são legalizados ou proibidos     | Para manter o meu uso de pesticidas dentro da lei  |
|Eu como produtor rural | Quero consultar detalhes de um pesticida em específico | Para saber em detalhes suas restrições, aplicações e limites da lei |
|Eu como produtor rural | Quero criar um alerta ou monitoramento em relação a um pesticida em específico|  Para que eu possa manter meu uso de pesticidas seguro e dentro das leis locais|


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

## Restrições

Devido a ser um projeto voltado para produtores de médio e pequeno porte, que ainda não tem esse contato com o mercado internacional, porém busca o mesmo, a fim de uma progressão de mercado. São identificadas as seguintes restrições ao projeto:

|ID| Restrições                                            |
|--|-------------------------------------------------------|
|01| Cronograma: Etapa 1: Análise e especificação do problema (23/03); Etapa 2: Projeto dos requisitos e de artefatos do sistema (13/04); Etapa 3: Desenvolvimento da estrutura estática da solução (11/05); Etapa 4: Desenvol. da estrutura dinâmica da solução e Plano de Testes (15/06); Etapa 5: Testes, implantação e apresentação da solução (22/06); Apresentação do Projeto: 29/06.|
|02| Layout e conteúdo: devem ser objetivos, claros, concisos e fáceis para facilitar a navegação e identificação dos elementos necessários para os usuários;|
|03| Veracidade das informações: deve-se ter uma base de dados, sendo ela confiável para entregar conteúdos verídicos e qualificados;|
|04| Automatização da atualização de informações contidas no site: para o tópico anterior ser alcançado da melhor forma, deve-se ter uma atualização diária ou mais recorrente da base de dados.|
