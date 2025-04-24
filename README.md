# Lanchonete do Abner

Bem-vindo ao repositório do site da Lanchonete do Abner! Este projeto foi desenvolvido para digitalizar o atendimento de uma lanchonete local, permitindo aos clientes realizar pedidos, gerenciar o carrinho de compras e acompanhar o histórico de pedidos de forma simples e eficiente.

🌐 *Acesse o site online:* [Lanchonete do Abner](#)

## 👥 Participantes

- Henri Leonardo 
 •  Gabriel Veracruz
- Guilherme Serreti
 •  Luiz Eduardo Oliveira 
- Igor Leal

## 📌 Links Importantes

- *Backlog no Trello:* [Acessar Trello](#)
- *Protótipo no Figma:* [Acessar Figma](#)
- *Apresentação (Screencast):* [Ver vídeo no YouTube](#)

## 📖 Descrição

O site foi projetado para oferecer uma experiência amigável e prática aos usuários, promovendo os produtos da lanchonete e facilitando o processo de compra. Entre as principais funcionalidades estão:

- Visualização de produtos com imagens e preços.
- Carrinho de compras interativo para adicionar, remover e ajustar itens.
- Gestão de pedidos, com opções para acompanhar pedidos atuais e visualizar históricos.
- Seleção de forma de pagamento e inserção de endereço de entrega.
- Notificação de adição ao carrinho para melhorar a experiência do cliente.

## 🎯 Público-alvo

O público-alvo deste projeto são os clientes da Lanchonete do Abner, localizada na Rua das Flores, 123, Centro, Cidade. A solução é ideal para pequenos negócios que desejam melhorar sua presença digital e modernizar o atendimento ao cliente.

## 🖥 Funcionalidades

### Página inicial:
- Exibe os produtos disponíveis para compra.
- Cada produto possui botão para adicionar ao carrinho.

### Carrinho de compras:
- Lista os itens adicionados ao carrinho com controle de quantidade.
- Mostra o valor total do pedido.
- Permite a seleção de forma de pagamento e inserção de informações de entrega.

### Pedidos:
- Visualiza pedidos em andamento.
- Exibe o histórico de pedidos realizados.
- Possibilita limpar o histórico de pedidos.

### Persistência de dados:
- Armazena os dados do carrinho e pedidos no navegador do cliente usando localStorage.

## ✍ Histórias de Usuário

1. Como cliente, quero visualizar os produtos com imagem e preço para escolher o que comprar.  
2. Como cliente, quero adicionar produtos ao carrinho para organizá-los antes de finalizar o pedido.  
3. Como cliente, quero ver o valor total do pedido no carrinho para saber quanto vou pagar.  
4. Como cliente, quero remover itens do carrinho caso mude de ideia.  
5. Como cliente, quero selecionar a forma de pagamento ao finalizar o pedido.  
6. Como cliente, quero digitar o endereço de entrega para receber meu pedido corretamente.  
7. Como cliente, quero acompanhar os pedidos em andamento para saber quando serão entregues.  
8. Como cliente, quero ver o histórico dos meus pedidos anteriores.  
9. Como cliente, quero ser notificado quando um item for adicionado ao carrinho.  
10. Como cliente, quero que meus dados fiquem salvos no navegador para não precisar preencher tudo novamente.

## 📝 Requisitos

### Funcionais
- O cliente visualiza todos os produtos disponíveis na página inicial, com imagem e preço.
- É possível adicionar produtos ao carrinho.
- O cliente altera a quantidade ou remove itens no carrinho.
- O sistema calcula automaticamente o valor total do pedido no carrinho.
- O cliente informa a forma de pagamento e o endereço de entrega antes de finalizar o pedido.
- O cliente consulta os pedidos atuais e o histórico de pedidos anteriores.
- Os dados do carrinho e dos pedidos são armazenados localmente no navegador.

### Não Funcionais
- O site é responsivo e acessível em dispositivos móveis, tablets e desktops.
- Carrega rapidamente, com um tempo de resposta inferior a 2 segundos para as principais ações.
- O design segue as diretrizes do protótipo criado no Figma.
- Utiliza localStorage para armazenar dados de forma persistente.
- O site é hospedado em um ambiente confiável e acessível, como a plataforma Vercel.
- Apresenta notificações de erro e/ou confirmação para ações relevantes.

## 🚀 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- LocalStorage para persistência de dados no cliente.

## 🛠 Estrutura do Projeto

- index.html: Página principal com listagem dos produtos.  
- carrinho.html: Página do carrinho de compras.  
- pedidos.html: Página para visualizar pedidos em andamento e histórico.  
- styles.css, stylesC.css, stylesP.css: Arquivos de estilo para cada página.  
- script.js: Código JavaScript que implementa a lógica de interação com o carrinho e pedidos.

## 📸 Comparação de Protótipo (Figma) e Páginas Finais

### Página Inicial
- Protótipo do Figma: [Protótipo Página Inicial](#)  
- Página Desenvolvida: [Página Inicial](#)

### Carrinho de Compras
- Protótipo do Figma: [Protótipo Carrinho de Compras](#)  
- Página Desenvolvida: [Carrinho de Compras](#)

### Pedidos
- Protótipo do Figma: [Protótipo Pedidos](#)  
- Página Desenvolvida: [Pedidos](#)