CREATE DATABASE IF NOT EXISTS sesi_esporte_amparo;
USE sesi_esporte_amparo;

CREATE TABLE IF NOT EXISTS solicitacoes_treino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    modalidade VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL
);

INSERT INTO solicitacoes_treino (nome, email, modalidade, data_nascimento) VALUES
('Miguel Cardoso Pignata', 'miguel.pignata@portalsesisp.org.br', 'Vôlei Misto', '2009-09-09'),
('Thiago Lima Amaral', 'thiago.amaral@portalsesisp.org.br', 'Futsal Masculino', '2009-09-08'),
('Enzo Casadei Macedo', 'enzo.macedo@portalsesisp.org.br', 'Vôlei Misto', '2008-09-26'),
('Davi Parrera Cardeal', 'davi.cardeal@portalsesisp.org.br', 'Futsal Masculino', '2009-03-19');