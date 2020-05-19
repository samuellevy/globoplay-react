# Teste globo.com

### Objetivo

![GloboTest](./teste-globoplay-tv.gif)

### Ambiente

`nodejs v10.16.3`  
`yarn 1.17.3`  
`npm 6.9.0`

### Para execução

- Clone este repositório  
  `git clone git@github.com:samuellevy/globoplay-react.git`

- Instale as dependências usando o seu gerenciador de pacotes.  
  `yarn` ou `npm install`

- Execute a aplicação.  
  `yarn start` ou `npm start`

### Bibliotecas utilizadas

`styled-components` - para criação mais rápida de componentes sem ciclo de vida e estilizados.

`axios` - para requisições http

### API

Criei uma pasta na raíz de `/public` apenas para mockar uma api fake. Achei que ficaria mais interessante

### Considerações

- Foi respeitada a regra de `não utilize o Redux nem bibliotecas prontas para navegação e slider.`.

- Utilizei `flex-box`, pois nas orientações não falava sobre não poder usá-lo.

- Preferi usar uma arquiteura mais simples, separada em components, scenes para as páginas (que no caso só tem uma), services, contexts.
