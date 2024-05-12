# Costs - Controle de Orçamento

Costs é uma aplicação web desenvolvida em React para auxiliar no controle de orçamento de projetos. 

Com esta ferramenta, os usuários podem adicionar projetos com detalhes como nome, descrição, orçamento e tipo, além de atribuir serviços a esses projetos, garantindo que não ultrapassem o orçamento estabelecido. 

O projeto conta com mensagens dinâmicas que aparecem na criação e remoção de projetos, serviços e atualizações.

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/home.png"> 
<hr>

# Recursos principais

<ul>
  <li><strong>Gerenciamento de Projetos:</strong> Os usuários podem adicionar, visualizar e remover projetos, fornecendo informações essenciais como nome, descrição, orçamento e tipo.</li>
  <li><strong>Atribuição de Serviços:</strong> Para cada projeto, é possível atribuir serviços específicos, com a aplicação garantindo que o orçamento não seja excedido.</li>
  <li><strong>Mensagens Dinâmicas: </strong> Feedback instantâneo é fornecido ao usuário por meio de mensagens dinâmicas que aparecem durante a interação com os projetos, serviços e atualizações.</li>
  <li><strong>Hospedagem de Dados:</strong> O Costs utiliza o JSON Server para hospedar os dados, proporcionando uma experiência simplificada para o usuário, sem a necessidade de configurar bancos de dados tradicionais como MySQL ou MongoDB.</li>
</ul>

<hr>

# Telas 

## Home

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/home.png">
<hr>

## Projetos

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/projetos.png">
<hr>

## Empresa

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/empresa.png">
<hr>

## Contato

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/contato.png">
<hr>

## Novo Projeto

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/novoprojeto.png">
<hr>

## Projeto

<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/infoProjeto.png">
<hr>
Editar Projeto
<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/edicaoProjeto.png">
<hr>
Painel de Serviços
<hr>
<img src="https://github.com/gui-silva-github/costsReact/blob/main/src/infoImgs/painelServicos.png">
<hr>

<hr>

# JSON Server? Por que?

O JSON Server é uma ferramenta que fornece um serviço pré-moldado para hospedar dados JSON via HTTP, facilitando a criação de APIs mock para desenvolvimento e prototipagem, o arquivo json do 'Costs' é o db.json. <strong>Os usuários não precisam ter instalado MySQL, MongoDb</strong>.

Sendo assim, foi escolhido ele, pois é incrivelmente fácil de configurar e usar. Com apenas alguns comandos simples, você pode ter um <strong>servidor REST simulado em execução</strong>, permitindo que você se concentre no desenvolvimento de sua aplicação em vez de se preocupar com a configuração de um servidor de backend completo.
<hr>

# Necessidades

Node: [https://nodejs.org/en]

O usuário só precisa ter o <strong>NodeJs</strong> instalado para dar (dentro da pasta clonada ou descompactada):

<ul>
  <li><code>npm install</code></li>
  <li><code>npm run start</code></li>
  <li><code>npm run backend</code></li>
</ul>

Isso deve ser feito em <strong>2 terminais diferentes</strong>.<hr>

# Como usar?

<h3>1 - Baixar o arquivo .zip desse projeto <br>ou<br> 1 - Clonar este repositório com <code>git clone https://github.com/gui-silva-github/costsReact.git</code> na pasta selecionada do seu computador (OBS: para dar o git clone você precisa ter o git instalado).</h3>

Git: [https://git-scm.com/] 

<h3>2 - Entrar (<strong>depois de extrair</strong> no caso do .zip), na pasta desse projeto.</h3>

<h3>3.1 - Executar no terminal <code>npm install</code> para requerir as dependências do projeto. <br> 3.2 - Inicializar o projeto com <code>npm run start</code> no terminal. <br> 3.3 - Inicializar o banco de dados com <code>npm run backend</code> em outro terminal.</h3>

<h3>4 - Entrar no link sugerido pelo <code>npm run start</code></h3>

<h3>5 - Usar o 'Costs'!</h3>
<hr>

# Observação

<h3>No intuito do Costs atender todos os sistemas de números dos países, por exemplo Brasil e Estados Unidos, não se utiliza o '.' ou a ',' colocando o número sem essa separação, ficando ao invés de '3.000 ou 3,000' para '3000'.</h3>

<h3>No orçamento não é possível adicionar números decimais, haja vista a explicação acima.</h3>

# Tecnologias

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
