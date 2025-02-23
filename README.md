📌 README.md - Challenge Amigo Secreto
md
Copiar
Editar
# 🎁 Challenge Amigo Secreto

Este é um projeto desenvolvido como parte do **Challenge Lógica de Programação - Amigo Secreto** da [Alura & ONE](https://cursos.alura.com.br/course/logica-programacao-challenge-amigo-secreto/task/175353). O objetivo do desafio é praticar lógica de programação criando uma aplicação interativa para sortear amigos secretos.

---

## 🚀 **Funcionalidades**

✅ Adicionar participantes (nome, e-mail e telefone).  
✅ Exibir a lista de participantes adicionados.  
✅ Sortear o amigo secreto garantindo que ninguém tire a si mesmo.  
✅ Exibir o resultado do sorteio de forma dinâmica.  
✅ Enviar o resultado do sorteio por **WhatsApp e E-mail**.  
✅ **Botão de reinício** para refazer o sorteio sem precisar recarregar a página.  
✅ **Animações visuais** para deixar a interface mais interativa.

---

## 🛠️ **Tecnologias Utilizadas**

### 🔹 **Frontend**
- HTML5 + CSS3 (com animações e responsividade)
- JavaScript (lógica do sorteio, interatividade e envio de mensagens)

### 🔹 **Backend**
- Node.js + Express (servidor da aplicação)
- MongoDB Atlas (banco de dados para armazenar os participantes)
- Mongoose (ORM para manipulação do MongoDB)
- Nodemailer (para envio de e-mails)
- Twilio (para envio de mensagens no WhatsApp)
- Dotenv (para configuração segura de variáveis de ambiente)
- Cors (para permitir comunicação entre frontend e backend)

---

## 📥 **Como Instalar e Rodar o Projeto**

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/amigo-secreto.git
2️⃣ Configurar o Backend
Acesse a pasta do backend:

sh
Copiar
Editar
cd amigo-secreto/backend
Instale as dependências:

sh
Copiar
Editar
npm install
Criar o arquivo .env com as credenciais do MongoDB e Twilio:

ini
Copiar
Editar
PORT=5000
MONGO_URI=mongodb+srv://seu_usuario:senha@cluster.mongodb.net/amigo-secreto
JWT_SECRET=seu_token_secreto
Iniciar o servidor:

sh
Copiar
Editar
node server.js
ou com nodemon:

sh
Copiar
Editar
npm install -g nodemon
nodemon server.js
3️⃣ Configurar o Frontend
Acesse a pasta do frontend:
sh
Copiar
Editar
cd amigo-secreto/frontend
Abra o arquivo index.html no navegador.
🎲 Como Usar
Digite o nome, e-mail e telefone dos participantes e clique em "Adicionar".
Após adicionar todos os participantes, clique em "Sortear Amigo".
O resultado será exibido na tela com um efeito animado.
Você pode enviar o sorteio por WhatsApp e E-mail clicando nos botões correspondentes.
Caso queira refazer o sorteio, clique no botão "Reiniciar Lista".
📂 Estrutura do Projeto
pgsql
Copiar
Editar
📂 amigo-secreto
│
├── 📂 frontend
│   ├── index.html
│   ├── style.css
│   ├── app.js
│
├── 📂 backend
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── routes/userRoutes.js
│   ├── models/User.js
│
└── README.md
🛠 Melhorias Implementadas
✅ Correção na lógica do sorteio para evitar repetições.
✅ Implementação de envio por E-mail e WhatsApp.
✅ Melhor tratamento de erros no backend.
✅ Adicionadas animações no frontend para uma interface mais amigável.
✅ Criado botão de reset para reiniciar a lista.

🖥️ Deploy e Testes
Para hospedar o projeto online, você pode usar:

Frontend: Vercel ou Netlify
Backend: Render ou Heroku
📝 Licença
Este projeto foi desenvolvido para fins educacionais e está disponível para uso sob a licença MIT.

💡 Desenvolvido por Christiano Júnior | Desafio da Alura & ONE 🚀
