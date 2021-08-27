# Test Front-End para empresa Player2

------------
## Maiores desafios
- A criação da rota de autenticação me gerou alguns problemas dado que, por serem rotas externas essa pediriam elementos diferentes do projeto inicial. Sendo assim decidi por fazer uma autenticação simulada utilizando uma api que utilizei também em outros projetos, mas sem verificar (propriamente) a correspondência dos dados enviados pelo usuário com os do sistema.

- Outro desafio, que foi muito divertido de resolver, foi a passagem dos dados enviados pelo usuário para um gerenciador de estado. Revisitei alguns estudos e decidi por utilizar a ContextApi para gerenciar o estado da aplicação, com a implementação dos hooks, useReducer e useContext, que possuem uma ação parecida com a do Redux e não foge da proposta de utilizar hooks do React (que cá entre nós, facilita bastante a nossa vida).

------------
## Como compilar e rodar o projeto
- Primeiramente, é necessário fazer um clone dessa fork para a máquina. Para isso, se possuir o git instalado, é possível utilizar o terminal com o comando `git clone https://github.com/ASOCezar/teste-player2.git `, caso não possua o git instalado, é possivel fazer o dowload dos arquivos do repositório em formato .zip no menu code, acima, na opção "Download ZIP"

- Depois de baixado, na pasta master (geralmente a pasta raíz) do projeto deve ser feita a instalação dos pacotes utilizados no projeto, de acordo com seu gerenciador de pacotes, utilize:
    - `npm install` (caso utilize npm)
    - `yarn add` (caso use yarn)
 
- Ao final da instalação dos pacotes, pode ser utilizado o comando `npm start` ou `yarn start` para rodar a aplicação e abrir em seu navegador padrão.

- Pela primeira vez que você acessar o site, será necessário que se digite valores nos campos de E-mail e Senha, para que seja gerado o token que ficará armazenado em seus cookies, fazendo com que o segundo acesso já seja previamente autenticado (a menos que ao sair você tenha clicado em logout). Portanto, para entrar corretamente digite algo como "teste@teste.com" no campo de E-mail e qualquer senha, com no mínimo 6 caracteres.
______
## Deploy

[Vercel](https://teste-player2.vercel.app/login "Vercel")
________________
Obrigado!! 😁