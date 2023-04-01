# ![eWallet Logo](./src/assets/images/logo.png) &nbsp; &nbsp; eWallet

###### ⚠ Esse projeto ainda está em desenvolvimento.

&nbsp;

Este é um pequeno projeto criado com [React](https://pt-br.reactjs.org/) para o controle pessoal de suas finanças. Com ele, você poderá lançar as faturas de seus cartões de crédito e controlar quando e se foram pagas.

O servidor (back-end) para este projeto está sendo desenvolvimento pelo meu colega e irmão [Danilo Ferreira](https://github.com/danilo-dsf/). Para acessar o repositório do servidor, basta [clicar aqui](https://github.com/danilo-dsf/ewallet-backend).

&nbsp;

## Como executar o projeto em ambiente de desenvolvimento?

### Passo 1 - Executar o back-end da aplicação
O primeiro passo é estar com o backend da aplicação em execução. Para isso, acesse o [repositório do back-end](https://github.com/danilo-dsf/ewallet-backend) e siga os passos do README.md para executá-lo.

### Passo 2 - Clonar esse repositório e instalar as dependências
O próximo passo é clonar esse repositório, caso ainda não o tenha feito. Após fazer isso, acesse o diretório raiz do projeto e execute o comando `npm install` ou `yarn` para instalar as dependências.

### Passo 3 - Configurar o arquivo .env.local do projeto
Na pasta raiz do projeto, crie o arquivo `.env.local` para que a aplicação tenha acesso às variáveis de ambiente necessárias.

A estrutura desse arquivo deve seguir a mesma encontrada no arquivo `.env.example` localizado também na pasta raiz do projeto.

No seu arquivo `.env.local`, você deve preencher todas as variáveis necessárias para que a aplicação funcione corretamente. Segue abaixo uma tabela com a explicação de cada variável.

| Variável | Descrição |
| :- | :- |
| VITE_API_URL | Define a URL base para a API (back-end) da aplicação. Caso o projeto esteja sendo executado em ambiente de desenvolvimento, muito provavelmente a URL será `http://localhost:3333`. |

### Passo 4 - Executar o eWallet
Por fim, o último passo é finalmente executar o eWallet. Para isso, abra o terminal no diretório raiz do projeto e execute o comando `npm run dev` ou `yarn dev` e basta abrir o endereço `http://localhost:5173` em seu browser de preferência.
