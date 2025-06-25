const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const ARQUIVO_USUARIOS = 'usuarios.json';

// Função para ler os usuários existentes
function lerUsuarios() {
    if (!fs.existsSync(ARQUIVO_USUARIOS)) return [];
    const dados = fs.readFileSync(ARQUIVO_USUARIOS, 'utf8');
    return dados ? JSON.parse(dados) : [];
}

// Rota de cadastro
app.post('/cadastro', (req, res) => {
    const { usuario, email, senha } = req.body;

    if (!usuario || !email || !senha) {
        return res.status(400).send('Preencha todos os campos!');
    }

    let usuarios = lerUsuarios();

    // Verifica se já existe o email cadastrado
    if (usuarios.some(u => u.email === email)) {
        return res.status(409).send('Email já cadastrado!');
    }

    usuarios.push({ usuario, email, senha }); // Obs: em produção, **nunca** salve senha em texto puro

    fs.writeFileSync(ARQUIVO_USUARIOS, JSON.stringify(usuarios, null, 2));
    res.send('Cadastro realizado com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
