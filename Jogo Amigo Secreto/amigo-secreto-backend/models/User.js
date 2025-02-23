const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true, unique: true },
    amigoSorteado: { type: String, default: null }
});

module.exports = mongoose.model("User", UserSchema);
