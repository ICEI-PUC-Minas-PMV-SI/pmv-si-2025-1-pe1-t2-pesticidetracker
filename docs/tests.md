# Testes

Neste projeto serão adotados os teste de software para garantir uma melhor qualidade da aplicação:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Cadastro de usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/) <br> 2) Clique no botão "Cadastrar nova conta" no cabeçalho <br> 3) Preencha todos os campos do formulário <br> 3) Clique no botão "Adicionar conta".
**Requisitos associados** | RF009
**Resultado esperado** | Os dados devem ser salvos e o usuário deve ser redirecionado para tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Listagem de produtos cadastrados**
 :--------------: | ------------
**Procedimento**  | 1) Com o usuário logado no [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/cadastro-produto/) <br> 2) Clique no item "Produtos" na barra de navegação no cabeçalho <br> 3) Acesse a página de listagem de produtos.
**Requisitos associados** | RF002
**Resultado esperado** | Deve ser exibida uma tabela com os dados de todos os produtos já cadastrados. Caso não haja produtos cadastrados, deverá ser exibida a mensagem "Nenhum dado encontrado!"
**Dados de entrada** | Inicialmente, ao abrir a página, é exibido todos os produtos, não sendo necessário a entrada de dados
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Filtro de produtos cadastrados**
 :--------------: | ------------
**Procedimento**  | 1) Com o usuário logado no [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/cadastro-produto/) <br> 2) Clique no item "Produtos" na barra de navegação no cabeçalho <br> 3) Acesse a página de listagem de produtos <br> 4) Preencha os campos desejados no filtro <br> 5) Clique no botão "Buscar".
**Requisitos associados** | RF002
**Resultado esperado** | Deve ser exibida uma tabela com os dados dos produtos cadastrados filtrados com base nos valores adicionados no filtro. Caso não haja produtos referentes a pesquisa, deverá ser exibida a mensagem "Nenhum dado encontrado!"
**Dados de entrada** | Valores desejados para consulta dos produtos
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Tela de Login**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/). <br> 2) Clique no botão Login no cabeçalho. <br> 3) Preencha os campos email e senha que foram cadastrados previamente. <br> 4) Clique no botão "Entrar".
**Requisitos associados** | RF008
**Resultado esperado** | Se os dados preenchidos estiverem corretos, o sistema enviará um aviso de "Login realizado com sucesso", e o usuário será redirecionado para a tela de Cadastro de Produtos.
**Dados de entrada** | Inserção de email e senha previamente cadastrados.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Buscar Pesticidas**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/). <br> 2) Clique na barra de espaço. <br> 3) Preencha com o nome do Pesticida. <br> 4) Clique no botão "Buscar".
**Requisitos associados** | RF002
**Resultado esperado** | Se os dados preenchidos estiverem corretos, o sistema mostrará o Pesticida.
**Dados de entrada** | Inserção de nome correto de Pesticida
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Pesticidas Monitorados**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/). <br> 2) Clique na barra de espaço de sua preferencia. <br> 3) Preencha com o nome do Pesticida, classe ou região. <br> 4) Clique no botão "Monitorar".
**Requisitos associados** | RF004
**Resultado esperado** | Se os dados preenchidos estiverem corretos, o sistema mostrará o Pesticida com detalhes para melhor análise.
**Dados de entrada** | Inserção de nome correto de Pesticida
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Acesso aos detalhes do pesticida**
 :--------------: | ------------
**Procedimento**  | 1) Com o usuário logado no sistema e na [página de busca de pesticidas](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/Buscar-Pesticidas/index.html) <br> 2) Ao clicar no botão "Ver detalhes" do pesticida <br> 3)Deve ser redirecionado para outra página com os detalhes do pesticida selecionado.
**Requisitos associados** | RF005
**Resultado esperado** | Deve ser exibida uma tela com os detalhes do pesticida escolhido
**Dados de entrada** | O usuário somente precisa clicar no botão de "Ver detalhes", sem a necessidade de entrar com nenhum dado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Acesso as informações do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Com o usuário logado no [sistema](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/cadastro-produto/) <br> 2) Clique no botão com o nome do usuário logado <br> 3) Deve ser redirecionado para outra página com as informações do usuário.
**Requisitos associados** | RF010
**Resultado esperado** | Deve ser exibida uma tela com as informações do usuário
**Dados de entrada** | Não é necessário entrada de dados
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Edição de usuário**
 :--------------: | ------------
**Procedimento**  | 1)  Com o usuário logado no sistema e na [página de informações do usuário](https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t2-pesticidetracker/visualizar-info-usuario/) <br> 2) Clique no botão de "Editar" <br> 3) Deve ser redirecionado para outra página com um formulário preenchido com as informações do usuário <br> 4) Edite os campos do formulário <br> 5) Clique no botão "Editar".
**Requisitos associados** | RF011
**Resultado esperado** | As informações do usuário deve ser editadas
**Dados de entrada** | Os campos do formulário de edição devem estar preechidos corretamente
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01 - Cadastro de usuário*                                         |
|---|---|
|Requisito Associado | RF009 - O sistema deve permitir o cadastramento de usuários|
|Link do vídeo do teste realizado: | [Caso de teste 01](videos/CT01.mkv)| 


|*Caso de Teste*                                 |*CT02 - Listagem de produtos cadastrados*                                        |
|---|---|
|Requisito Associado | RF002 - O sistema deve listar os produtos cadastrados|
|Link do vídeo do teste realizado: | [Caso de teste 02](videos/CT02.mkv) | 


|*Caso de Teste*                                 |*CT03 - Filtro de produtos cadastrados*                                        |
|---|---|
|Requisito Associado |RF002 - O sistema deve listar os produtos cadastrados|
|Link do vídeo do teste realizado: | [Caso de teste 03](videos/CT03.mkv) | 

|*Caso de Teste*                                 |*CT04 - Tela de Login*                                        |
|---|---|
|Requisito Associado |RF008 - O sistema deve permitir que o usuário acesse sua conta por meio de uma tela de login.|
|Link do vídeo do teste realizado: | [Caso de teste 04](videos/CT04.mp4) | 


|*Caso de Teste*                                 |*CT05 - Buscar Pesticida*                                         |
|---|---|
|Requisito Associado | RF002 - O sistema deve permitir o cadastramento de usuários|
|Link do vídeo do teste realizado: | Caso de teste 05![{27F715EF-3906-42D0-A90B-32ADD2A26C89}](https://github.com/user-attachments/assets/0b12feec-bb16-48d2-93b4-f684ec063802)| 


|*Caso de Teste*                                 |*CT06 - Pesticidas Monitorados*                                        |
|---|---|
|Requisito Associado | RF004 - O sistema deve listar os produtos cadastrados|
|Link do vídeo do teste realizado: | Caso de teste 06![{1E14E923-F6E6-4007-8A90-16F11A7D0764}](https://github.com/user-attachments/assets/669f08a1-e5c7-4d00-a0b7-eb4c2811c476) | 


|*Caso de Teste*                                 |*CT07 - Acesso aos detalhes do pesticida*                                         |
|---|---|
|Requisito Associado | RF005 - O sistema deve permitir que o usuário consulte a situação de um pesticida específico no banco de dados local|
|Link do vídeo do teste realizado: | [Caso de teste 07](videos/CT07.mkv)|

|*Caso de Teste*                                 |*CT08 - Acesso as informações do usuário*                                         |
|---|---|
|Requisito Associado | RF010 - O sistema deve permitir que o usuário visualize suas informações cadastradas.|
|Link do vídeo do teste realizado: | [Caso de teste 08](videos/CT08.mkv)| 

|*Caso de Teste*                                 |*CT09 - Edição de usuário*                                         |
|---|---|
|Requisito Associado | RF011 - O sistema deve permitir que o usuário edite suas informações pessoais.|
|Link do vídeo do teste realizado: | [Caso de teste 09](videos/CT09.mkv)| 

## Avaliação dos Testes de Software

Os testes iniciais do nosso sistema demonstraram que suas funcionalidades estão estáveis, confiáveis e operacionais cumprindo com êxito os requisitos para os quais foram projetadas. Tais resultados positivos servem como base para garantir a evolução do nosso projeto. Podemos avançar para uma próxima etapa de testes tendo como foco cenários de erros, validação e segurança, visando assegurar a qualidade do sistema.
