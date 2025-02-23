const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Rota para adicionar um usuário
router.post("/adicionar", async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const novoUsuario = new User({ nome, email, telefone });
        await novoUsuario.save();
        res.status(201).json({ message: "Usuário adicionado com sucesso!" });
    } catch (error) {
        res.status(400).json({ error: "Erro ao adicionar usuário" });
    }
});

// Rota para sortear um amigo secreto
router.get("/sortear", async (req, res) => {
    try {
        const usuarios = await User.find();
        if (usuarios.length < 2) {
            return res.status(400).json({ error: "É necessário pelo menos dois participantes para o sorteio!" });
        }

        let participantes = [...usuarios];
        let sorteados = new Map();

        usuarios.forEach((usuario) => {
            let amigoDisponivel = participantes.filter(a => a.email !== usuario.email);
            if (amigoDisponivel.length === 0) {
                return res.status(400).json({ error: "Sorteio inválido! Tente novamente." });
            }

            let sorteado = amigoDisponivel[Math.floor(Math.random() * amigoDisponivel.length)];
            sorteados.set(usuario.email, sorteado.nome);
            participantes = participantes.filter(a => a.email !== sorteado.email);
        });

        res.json({ message: "🎉 Sorteio realizado com sucesso!", sorteados: Object.fromEntries(sorteados) });
    } catch (error) {
        res.status(500).json({ error: "Erro ao realizar o sorteio" });
    }
});


module.exports = router;
