# Lanchonete do Abner

Bem-vindo ao repositório do site da **Lanchonete do Abner**! Este projeto foi desenvolvido para digitalizar o atendimento de uma lanchonete local, permitindo aos clientes realizar pedidos, gerenciar o carrinho de compras e acompanhar o histórico de pedidos de forma simples e eficiente.

**🌐 Acesse o site online:** [Lanchonete do Abner](https://projeto-lanchonete-pd4x.vercel.app/index.html)

## 📖 Descrição

O site foi projetado para oferecer uma experiência amigável e prática aos usuários, promovendo os produtos da lanchonete e facilitando o processo de compra. Entre as principais funcionalidades estão:

- **Visualização de produtos** com imagens e preços.
- **Carrinho de compras** interativo para adicionar, remover e ajustar itens.
- **Gestão de pedidos**, com opções para acompanhar pedidos atuais e visualizar históricos.
- **Seleção de forma de pagamento** e inserção de endereço de entrega.
- **Notificação de adição ao carrinho** para melhorar a experiência do cliente.

## 🎯 Público-alvo

O público-alvo deste projeto são os clientes da **Lanchonete do Abner**, localizada na Rua das Flores, 123, Centro, Cidade. A solução é ideal para pequenos negócios que desejam melhorar sua presença digital e modernizar o atendimento ao cliente.

## 🖥️ Funcionalidades

1. **Página inicial**:
   - Exibe os produtos disponíveis para compra.
   - Cada produto possui botão para adicionar ao carrinho.

2. **Carrinho de compras**:
   - Lista os itens adicionados ao carrinho com controle de quantidade.
   - Mostra o valor total do pedido.
   - Permite a seleção de forma de pagamento e inserção de informações de entrega.

3. **Pedidos**:
   - Visualiza pedidos em andamento.
   - Exibe o histórico de pedidos realizados.
   - Possibilita limpar o histórico de pedidos.

4. **Persistência de dados**:
   - Armazena os dados do carrinho e pedidos no navegador do cliente usando `localStorage`.

## 📝 Requisitos

### Funcionais

1. O cliente visualiza todos os produtos disponíveis na página inicial, com imagem e preço.
2. É possível adicionar produtos ao carrinho.
3. O cliente altera a quantidade ou remove itens no carrinho.
4. O sistema calcula automaticamente o valor total do pedido no carrinho.
5. O cliente informa a forma de pagamento e o endereço de entrega antes de finalizar o pedido.
6. O cliente consulta os pedidos atuais e o histórico de pedidos anteriores.
7. Os dados do carrinho e dos pedidos são armazenados localmente no navegador.

### Não Funcionais

1. O site é responsivo e acessível em dispositivos móveis, tablets e desktops.
2. Carrega rapidamente, com um tempo de resposta inferior a 2 segundos para as principais ações.
3. O design segue as diretrizes do protótipo criado no Figma.
4. Utiliza `localStorage` para armazenar dados de forma persistente.
5. O site é hospedado em um ambiente confiável e acessível, como a plataforma Vercel.
6. Apresenta notificações de erro e/ou confirmação para ações relevantes.

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage** para persistência de dados no cliente.

## 🛠️ Estrutura do Projeto

- `index.html`: Página principal com listagem dos produtos.
- `carrinho.html`: Página do carrinho de compras.
- `pedidos.html`: Página para visualizar pedidos em andamento e histórico.
- `styles.css`, `stylesC.css`, `stylesP.css`: Arquivos de estilo para cada página.
- `script.js`: Código JavaScript que implementa a lógica de interação com o carrinho e pedidos.

## 📸 Comparação de Protótipo (Figma) e Páginas Finais

### Página Inicial
**Protótipo do Figma:**
![Protótipo Página Inicial](https://github.com/user-attachments/assets/12ed21c5-e488-40b1-8cf7-adef8f59d172)

**Página Desenvolvida:**
![Página Inicial](https://github.com/user-attachments/assets/d405e919-61ee-4995-b045-2af7d1da709c)

---

### Carrinho de Compras
**Protótipo do Figma:**
![Protótipo Carrinho de Compras](https://github.com/user-attachments/assets/10d8fd20-6623-4162-a52e-40aaae6ed07a)

**Página Desenvolvida:**
![Carrinho de Compras](https://github.com/user-attachments/assets/694d5a10-911c-4de4-8a67-5399c0b97b4f)

---

### Pedidos
**Protótipo do Figma:**
![Protótipo Pedidos](https://github.com/user-attachments/assets/8a082956-3aa0-4796-a146-6c0129425f98)

**Página Desenvolvida:**
![Pedidos](https://github.com/user-attachments/assets/b9ca7cce-5ba1-4f37-8439-1fe9f6d7a649)

---

