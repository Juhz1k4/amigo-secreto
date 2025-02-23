require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS (permite conexões do frontend)
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado ao MongoDB"))
.catch(err => {
    console.error("❌ Erro ao conectar ao MongoDB:", err.message);
    process.exit(1);
});

// Tratamento global de erros
app.use((err, req, res, next) => {
    console.error("Erro inesperado:", err);
    res.status(500).json({ error: "Ocorreu um erro inesperado. Tente novamente mais tarde." });
});



// Importando as rotas de usuários
const userRoutes = require("./routes/userRoutes");
app.use("/api/usuarios", userRoutes);


// Rota básica para testar a API
app.get("/", (req, res) => {
    res.send("🎉 API do Amigo Secreto está rodando!");
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
