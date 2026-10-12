// --- NAVEGAÇÃO ENTRE SEÇÕES ---
function mudarSecao(idSecao) {
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => secao.classList.remove('ativa'));

    const secaoAlvo = document.getElementById(idSecao);
    if (secaoAlvo) {
        secaoAlvo.classList.add('ativa');
    }

    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(botao => {
        botao.classList.remove('active');
        if (botao.getAttribute('href') === '#' + idSecao) {
            botao.classList.add('active');
        }
    });
}

// --- NOTÍCIAS ---
function filtrarNoticia(categoria) {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    botoesFiltro.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function abrirNoticia(idNoticia) {
    const subSecoes = document.querySelectorAll('.sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    const noticiaAlvo = document.getElementById(idNoticia);
    if (noticiaAlvo) {
        noticiaAlvo.classList.add('ativa-sub');
    }
}

function voltarParaListaNoticias() {
    const subSecoes = document.querySelectorAll('.sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    document.getElementById('sub-noticias-lista').classList.add('ativa-sub');
}

// --- MODALIDADES ---
const dadosModalidades = {
    volei: {
        titulo: "VÔLEI<br><span>(MISTO)</span>",
        descricao: "Conheça a equipe de vôlei mista responsável por competir no InterSesi",
        imagemElenco: "Imagens/volei.jpeg",
        atletas: [
            { nome: "Julia Novo", num: "03", ano: "2008", img: "Imagens/pig.jpeg" },
            { nome: "Joana Fabrin", num: "05", ano: "2007", img: "Imagens/enzadas.jpeg" },
            { nome: "Alicia Coelho", num: "11", ano: "2009", img: "Imagens/pig.jpeg" },
            { nome: "Miguel Pignata", num: "17", ano: "2006", img: "Imagens/enzadas.jpeg" },
            { nome: "Enzo Macedo", num: "18", ano: "2007", img: "Imagens/pig.jpeg" }
        ]
    },
    futsal: {
        titulo: "FUTSAL<br><span>(MASCULINO)</span>",
        descricao: "Equipe bicampeã regional de futsal com alto índice de vitórias",
        imagemElenco: "Imagens/futsal.avif",
        atletas: [
            { nome: "Thiago Amaral", num: "07", ano: "2006", img: "Imagens/enzadas.jpeg" },
            { nome: "Luis Capitão", num: "10", ano: "2005", img: "Imagens/pig.jpeg" },
            { nome: "Lucas Silva", num: "12", ano: "2007", img: "Imagens/enzadas.jpeg" },
            { nome: "Gabriel Santos", num: "05", ano: "2006", img: "Imagens/pig.jpeg" }
        ]
    },
    handebol: {
        titulo: "HANDEBOL<br><span>(FEMININO)</span>",
        descricao: "Atletas de alto rendimento disputando a liga paulista de handebol",
        imagemElenco: "Imagens/handbol.jpg",
        atletas: [
            { nome: "Beatriz Lima", num: "04", ano: "2008", img: "Imagens/pig.jpeg" },
            { nome: "Mariana Souza", num: "08", ano: "2007", img: "Imagens/enzadas.jpeg" }
        ]
    },
    tenis: {
        titulo: "TÊNIS DE MESA<br><span>(DUPLA)</span>",
        descricao: "Dupla de alta precisão técnica e sincronia nas mesas do SESI",
        imagemElenco: "Imagens/pingpong.jpg",
        atletas: [
            { nome: "Pedro Rocha", num: "02", ano: "2008", img: "Imagens/enzadas.jpeg" },
            { nome: "Felipe Andrade", num: "09", ano: "2008", img: "Imagens/pig.jpeg" }
        ]
    }
};

function trocarModalidade(chave) {
    const botoesMod = document.querySelectorAll('.mod-btn');
    botoesMod.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const dados = dadosModalidades[chave];
    if (!dados) return;

    document.getElementById('elenco-img').src = dados.imagemElenco;
    document.getElementById('elenco-badge').innerHTML = dados.titulo;
    document.getElementById('elenco-desc').innerHTML = dados.descricao;

    const grid = document.getElementById('atletas-grid');
    grid.innerHTML = '';

    dados.atletas.forEach(atleta => {
        const card = document.createElement('div');
        card.className = 'atleta-card';
        card.innerHTML = `
            <div class="atleta-img-wrapper">
                <img src="${atleta.img}" alt="${atleta.nome}">
            </div>
            <div class="atleta-info-box">
                <div class="atleta-nome">${atleta.nome}</div>
                <div class="atleta-detalhes">Nº ${atleta.num} • Nasc: ${atleta.ano}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- UNIFORMES ---
const dadosUniformes = {
    jogo1: {
        frente: "Imagens/uniforme frente.jpg",
        lado1: "Imagens/unifotme lado 1.jpg",
        costas: "Imagens/uniforme costas.jpg",
        lado2: "Imagens/uniforme lado 2.jpg"
    },
    jogo2: {
        frente: "Imagens/uniforme frente.jpg",
        lado1: "Imagens/unifotme lado 1.jpg",
        costas: "Imagens/uniforme costas.jpg",
        lado2: "Imagens/uniforme lado 2.jpg"
    },
    treino: {
        frente: "Imagens/uniforme frente.jpg",
        lado1: "Imagens/unifotme lado 1.jpg",
        costas: "Imagens/uniforme costas.jpg",
        lado2: "Imagens/uniforme lado 2.jpg"
    }
};

function trocarUniforme(tipo) {
    const botoesUni = document.querySelectorAll('.uni-btn');
    botoesUni.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const kit = dadosUniformes[tipo];
    if (!kit) return;

    document.getElementById('uni-frente').src = kit.frente;
    document.getElementById('uni-lado1').src = kit.lado1;
    document.getElementById('uni-costas').src = kit.costas;
    document.getElementById('uni-lado2').src = kit.lado2;
}

// --- CALENDÁRIO ---
const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const eventosCadastrados = {
    "2026-5-8": "Lista de Convocados Oficiais para o InterSesi em Jundiaí.",
    "2026-5-10": "Dia de Fotos e Filmagens para Atualização do Site.",
    "2026-5-17": "Lista de Confirmação dos Capitães e Comissão.",
    "2026-5-20": "InterSesi em Jundiaí (das 8:30 às 17:00).",
    "2026-9-15": "Seletiva de Vôlei Masculino Sub-17.",
    "2026-9-22": "Festival Interno de Futsal do SESI Amparo.",
    "2026-10-10": "Entrega de Medalhas do Semestre Esportivo."
};

let dataAtualCalendario = new Date();

function renderizarCalendario() {
    const ano = dataAtualCalendario.getFullYear();
    const mes = dataAtualCalendario.getMonth();

    document.getElementById('cal-month-name').textContent = nomesMeses[mes];
    document.getElementById('cal-year-number').textContent = ano;

    const calGrid = document.getElementById('cal-days-grid');
    calGrid.innerHTML = '';

    const primeiroDiaMês = new Date(ano, mes, 1);
    const totalDiasMês = new Date(ano, mes + 1, 0).getDate();

    let diaSemanaInicial = primeiroDiaMês.getDay() - 1;
    if (diaSemanaInicial === -1) diaSemanaInicial = 6;

    for (let i = 0; i < diaSemanaInicial; i++) {
        const spanVazio = document.createElement('span');
        spanVazio.className = 'empty-day';
        calGrid.appendChild(spanVazio);
    }

    const hoje = new Date();
    const eventosDoMes = [];

    for (let dia = 1; dia <= totalDiasMês; dia++) {
        const spanDia = document.createElement('span');
        spanDia.textContent = dia;

        const dataLoop = new Date(ano, mes, dia);
        const diaSemana = dataLoop.getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            spanDia.classList.add('weekend');
        }

        const chaveEvento = `${ano}-${mes}-${dia}`;
        if (eventosCadastrados[chaveEvento]) {
            spanDia.classList.add('event-day');
            eventosDoMes.push({ dia: dia, texto: eventosCadastrados[chaveEvento] });
        }

        if (dia === hoje.getDate() && mes === hoje.getMonth() && ano === hoje.getFullYear()) {
            spanDia.classList.add('today-highlight');
        }

        calGrid.appendChild(spanDia);
    }

    const eventosContainer = document.getElementById('eventos-lista-container');
    eventosContainer.innerHTML = '';

    if (eventosDoMes.length > 0) {
        eventosDoMes.forEach(evt => {
            const item = document.createElement('div');
            item.className = 'evento-item';
            item.innerHTML = `
                <div class="evento-badge">${evt.dia}</div>
                <div class="evento-text-box">${evt.texto}</div>
            `;
            eventosContainer.appendChild(item);
        });
    } else {
        eventosContainer.innerHTML = `
            <div class="sem-eventos-msg">
                Nenhum evento oficial agendado para ${nomesMeses[mes]} de ${ano}.
            </div>
        `;
    }
}

function mudarMes(delta) {
    dataAtualCalendario.setMonth(dataAtualCalendario.getMonth() + delta);
    renderizarCalendario();
}

// --- BANCO DE DADOS DE TREINOS E SOLICITAÇÃO ---
function renderizarTabelaTreinos() {
    const container = document.getElementById('tabela-solicitacoes-container');
    if (!container) return;

    container.innerHTML = '';

    if (typeof bancoDadosTreinos !== 'undefined') {
        bancoDadosTreinos.forEach(item => {
            let dataFormatada = item.data_nascimento;
            if (dataFormatada && dataFormatada.includes('-')) {
                const partes = dataFormatada.split('-');
                dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
            }

            const card = document.createElement('div');
            card.className = 'solicitacao-item-card';
            card.innerHTML = `
                <div class="solicitacao-topo">
                    <span class="solicitacao-titulo">#${item.id} - ${item.nome}</span>
                    <span class="badge-modalidade">${item.modalidade}</span>
                </div>
                <div class="solicitacao-detalhes">
                    <strong>E-mail:</strong> ${item.email}
                </div>
                <div class="solicitacao-footer-info">
                    <span>Nascimento: <strong>${dataFormatada}</strong></span>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

function enviarSolicitacaoTreino(event) {
    event.preventDefault();

    const nome = document.getElementById('input-nome').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const modalidade = document.getElementById('select-modalidade').value;
    const dataNascimento = document.getElementById('input-data-nasc').value;

    const novoId = typeof bancoDadosTreinos !== 'undefined' && bancoDadosTreinos.length > 0 
        ? bancoDadosTreinos[bancoDadosTreinos.length - 1].id + 1 
        : 1;

    const novoRegistro = {
        id: novoId,
        nome: nome,
        email: email,
        modalidade: modalidade,
        data_nascimento: dataNascimento
    };

    if (typeof bancoDadosTreinos !== 'undefined') {
        bancoDadosTreinos.push(novoRegistro);
    }
    
    renderizarTabelaTreinos();

    document.getElementById('form-solicitacao-treino').reset();
    alert(`Solicitação de treino em ${modalidade} realizada com sucesso para ${nome}!`);
}

// Inicialização
window.onload = function() {
    renderizarCalendario();
    renderizarTabelaTreinos();
    trocarModalidade('volei');
};