const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'sesi_esporte_amparo'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

app.get('/api/treinos', (req, res) => {
    const query = 'SELECT * FROM solicitacoes_treino';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar treinos:', err);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
        res.json(results);
    });
});

app.post('/api/treinos', (req, res) => {
    const { nome, email, modalidade, data_nascimento } = req.body;
    
    if (!nome || !email || !modalidade || !data_nascimento) {
        return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
    }

    const query = 'INSERT INTO solicitacoes_treino (nome, email, modalidade, data_nascimento) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, email, modalidade, data_nascimento], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar treino:', err);
            return res.status(500).json({ erro: 'Erro ao salvar no banco de dados' });
        }
        res.status(201).json({ 
            mensagem: 'Solicitação cadastrada com sucesso!', 
            id: result.insertId 
        });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});