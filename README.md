# amosbatista.com

Minha página pessoal, onde centralizo todo o conhecimento sobre minha carreira e atividades. Ela também serve como laboratório de experimentos, onde eu posso fazer testes e demonstrar meus conhecimentos em programação. Futuramente, servirá como blog e como galeria de arte.

## stack

O projeto foi desenvolvido em [VUE.js](https://vuejs.org/), na versão 2. A principio, foi escolhido VUE por questões estéticas (a forma que ele centraliza os componentes em um arquivo só).

Afim de permitir processamentos de dados em server-side, o projeto foi construído dentro de um servidor específico para sites em VUE, chamado [Nuxt.js](https://nuxtjs.org/).

No estilo CSS, uso LESS como pré-processador, para facilitar a organização do código. Todo o estilo da página foi criado segundo as boas práticas do ITCSS.

Como teste unitário, uso a biblioteca [Chai](https://www.chaijs.com/).

## testando o projeto localmente

- Usando um client de GIT, clone o projeto para a sua máquina;
- Execute o comando `npm install` para baixar as dependências do projeto;
- Execute o comando `npm run dev` para iniciar o servidor;
- Abra o browser e entre em http://localhost:8080 para visualizar a página;
- Para executar os testes unitários, digite `npm run test`;
- Para disponibilizar o projeto em ambiente de produção:
- - clone o projeto no servidor desejado;
- - execute `npm run start`.

