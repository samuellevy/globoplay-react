# Teste globo.com

### Detalhes da entrega

**Prazo**: 19/março - 12h00  
[x] Colocar o repo público  
[x] Enviar link para avaliação

### Exemplo

![GloboTest](./teste-globoplay-tv.gif)

### RF

- Geral  
  [x] Navegação com as arrows do teclado  
  [x] Criar estilização  
  [x] Mudar imagem do fundo ao trocar itens e focos entre os itens

- Menu  
  [x] Só navega o menu verticalmente.  
  [x] Quando pressionado para direita, muda o foco para o último componente antes do `Menu`

- Destaque  
  [x] `Destaque` navega entre os dois botões.  
  [x] Quando pressionado para a esquerda e estiver no primeiro botão, volta o foco para o `Menu`.  
  [x] Quando pressionado para baixo, foca o `Trilho` e some o `Destaque`.

- Trilho  
  [x] Navega entre os itens  
  [x] Quando pressionado para a esquerda e estiver no primeiro item, foca o `Menu`.  
  [x] Quando pressionado para cima, o `Destaque` volta a aparecer

### RNF

[x] Usar Typescript  
[x] Utilizar eslint + prettier  
[x] Não utilizar Redux  
[x] Não utilizar lib para navigation  
[x] Não utilizar lib para slider

### Questions

### Finalização

[x] Explicar o que foi utilizado  
[x] Explicar o que não foi utilizado e porquê  
[x] Explicar arquitetura usada  
[x] Explicar o porquê da pasta fakeapi dentro da public  
[x] Escrever alguns testes

### E-mail original

```
Oá,

Obrigado pelo interesse em fazer o teste. Você tem até terça-feira 19/05, meio dia para envio da solução. Você deve hospedá-la em algum repositório público e enviar o link para avaliação.

O teste consiste no desenvolvimento de uma aplicação em que sua navegação funcione através das setas do teclado conforme GIF enviado em anexo e deverá ser feito obrigatoriamente em React. Não utilize o Redux nem bibliotecas prontas para navegação e slider.

Comportamento esperado dos componentes:

Menu
- Só navega verticalmente entre seus itens e quando pressionado para direita, o foco deve ir para o Destaque se este estiver visível ou o Trilho.

Destaque
- Navega entre seus dois botões e quando o foco estiver no primeiro botão, pressionado para a esquerda, o Menu deve ganhar foco e ser aberto. Pressionado para baixo, deve focar o Trilho e o Destaque sumir.

Trilho
- Navega entre seus itens e quando o pressionado para a esquerda, se o primeiro item está selecionado, o Menu deve ganhar foco e ser aberto. Quando pressionado para cima, o Destaque deve ganhar foco e aparecer.

Bônus:
Sempre que o foco mudar entre itens no Trilho ou quando o Destaque ganhar ou perder foco para o Trilho, a imagem de fundo deve ser alterada. TypeScript é um diferencial.

Qualquer dúvida, estou à disposição.

Abs, Rafael.
```
