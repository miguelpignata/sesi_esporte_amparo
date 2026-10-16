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

    if (idSecao === 'modalidades') {
        voltarParaListaModalidades();
    } else if (idSecao === 'noticias') {
        voltarParaListaNoticias();
    }
}

function filtrarNoticia(categoria) {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    botoesFiltro.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }
}

function abrirNoticia(idNoticia) {
    const subSecoes = document.querySelectorAll('#noticias .sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    const noticiaAlvo = document.getElementById(idNoticia);
    if (noticiaAlvo) {
        noticiaAlvo.classList.add('ativa-sub');
    }
}

function voltarParaListaNoticias() {
    const subSecoes = document.querySelectorAll('#noticias .sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    document.getElementById('sub-noticias-lista').classList.add('ativa-sub');
}

function abrirElencoModalidade(chave) {
    const subSecoes = document.querySelectorAll('#modalidades .sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    const detalheSub = document.getElementById('sub-modalidade-detalhe');
    if (detalheSub) {
        detalheSub.classList.add('ativa-sub');
    }

    trocarModalidade(chave);
}

function voltarParaListaModalidades() {
    const subSecoes = document.querySelectorAll('#modalidades .sub-secao');
    subSecoes.forEach(sub => sub.classList.remove('ativa-sub'));

    const listaSub = document.getElementById('sub-modalidades-lista');
    if (listaSub) {
        listaSub.classList.add('ativa-sub');
    }
}

const dadosModalidades = {
    volei: {
        titulo: "VÔLEI<br><span>(MISTO)</span>",
        descricao: "Conheça a equipe de vôlei mista responsável por competir no InterSesi",
        imagemElenco: "Imagens/volei.jpeg",
        atletas: [
            { nome: "Giovana Remorini", num: "03", ano: "2009", img: "Imagens/pig.jpeg" },
            { nome: "Yasmin Alexandre", num: "05", ano: "2011", img: "Imagens/enzadas.jpeg" },
            { nome: "Alicia Coelho", num: "11", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Miguel Pignata", num: "17", ano: "2009", img: "Imagens/pig.jpeg" },
            { nome: "Enzo Macedo", num: "18", ano: "2008", img: "Imagens/enzadas.jpeg" },
            { nome: "Letícia Guarizo", num: "28", ano: "2010", img: "Imagens/pig.jpeg" }
                    ]
    },
    futsal: {
        titulo: "FUTSAL<br><span>(MASCULINO)</span>",
        descricao: "Time com forte rendimento em quadra",
        imagemElenco: "Imagens/futsal.avif",
        atletas: [
            { nome: "Luis Pereira", num: "1", ano: "2008", img: "Imagens/enzadas.jpeg" },
            { nome: "Thiago Amaral", num: "5", ano: "2009", img: "Imagens/enzadas.jpeg" },
            { nome: "Kaique Pavan", num: "7", ano: "2008", img: "Imagens/pig.jpeg" },
            { nome: "Luis Scorcer", num: "8", ano: "2009", img: "Imagens/enzadas.jpeg" },
            { nome: "Juliano Moraes", num: "10", ano: "2007", img: "Imagens/pig.jpeg" }
        ]
    },
    handebol: {
        titulo: "HANDEBOL<br><span>(FEMININO)</span>",
        descricao: "Atletas competindo na liga InterSesi de handebol.",
        imagemElenco: "Imagens/handbol.jpg",
        atletas: [
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Beatriz Lima", num: "04", ano: "2010", img: "Imagens/pig.jpeg" },
            { nome: "Mariana Souza", num: "08", ano: "2010", img: "Imagens/enzadas.jpeg" }
        ]
    },
    tenis: {
        titulo: "TÊNIS DE MESA<br><span>(DUPLA)</span>",
        descricao: "Dupla de alta velocidade e precisão técnica.",
        imagemElenco: "Imagens/pingpong.jpg",
        atletas: [
            { nome: "Nicolas Felisbelo", num: "01", ano: "2008", img: "Imagens/enzadas.jpeg" },
            { nome: "Marina Defendi", num: "02", ano: "2008", img: "Imagens/pig.jpeg" }
        ]
    }
};

function trocarModalidade(chave) {
    const botoesMod = document.querySelectorAll('.mod-btn');
    botoesMod.forEach(btn => btn.classList.remove('active'));

    // Marcar botão ativo do menu interno
    botoesMod.forEach(btn => {
        const onClickAttr = btn.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${chave}'`)) {
            btn.classList.add('active');
        }
    });

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

const dadosUniformes = {
    jogo1: {
        frente: "./Imagens/uniforme frente.png",
        lado1: "./Imagens/unifotme lado 1.png",
        costas: "./Imagens/uniforme costas.png",
        lado2: "./Imagens/uniforme lado 2.png"
    },
    jogo2: {
        frente: "./Imagens/uniforme frente.png",
        lado1: "./Imagens/unifotme lado 1.png",
        costas: "./Imagens/uniforme costas.png",
        lado2: "./Imagens/uniforme lado 2.png"
    },
    treino: {
        frente: "./Imagens/uniforme frente.png",
        lado1: "./Imagens/unifotme lado 1.png",
        costas: "./Imagens/uniforme costas.png",
        lado2: "./Imagens/uniforme lado 2.png"
    }
};

function trocarUniforme(tipo) {
    const botoesUni = document.querySelectorAll('.uni-btn');
    botoesUni.forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    const kit = dadosUniformes[tipo];
    if (!kit) return;

    const elFrente = document.getElementById('uni-frente');
    const elLado1 = document.getElementById('uni-lado1');
    const elCostas = document.getElementById('uni-costas');
    const elLado2 = document.getElementById('uni-lado2');

    if (elFrente) elFrente.src = kit.frente;
    if (elLado1) elLado1.src = kit.lado1;
    if (elCostas) elCostas.src = kit.costas;
    if (elLado2) elLado2.src = kit.lado2;
}

const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const eventosCadastrados = {
    "2026-5-09": "JEA Futal Pré Mirim",
    "2026-5-16": "JEA Futsal Mirim",
    "2026-5-23": "JEA de Xadrez e Damas",
    "2026-5-30": "JEA Futsal Infantil",
    "2026-6-20": "Intersesi em Jundiaí (das 8:30 às 17:00)",
    "2026-6-20": "JEA Futsal Juvenil",
    "2026-8-22": "JEA Handebol Infantil",
    "2026-9-05": "JEA Handebol Juvenil",
    "2026-9-19": "JEA Vôlei Infantil e Juvenil",
    "2026-9-26": "JEA Vôlei Mirim e Pré Mirim,
    "2026-10-03": "JEA Queimada Mirim e Pré Mirim",
    "2026-10-17": "JEA Queimada Infantil e Juvenil",
    "2026-10-24": "JEA Basquete 3x3",
    "2026-11-09": "Interclasse dia 1.",
    "2026-11-10": "Interclasse dia 2.",
    "2026-11-11": "Interclasse dia 3.",
    "2026-11-12": "Interclasse dia 4.",
    "2026-11-13": "Interclasse dia 5."
};

let dataAtualCalendario = new Date();

function renderizarCalendario() {
    const ano = dataAtualCalendario.getFullYear();
    const mes = dataAtualCalendario.getMonth();

    const elMonth = document.getElementById('cal-month-name');
    const elYear = document.getElementById('cal-year-number');
    if (elMonth) elMonth.textContent = nomesMeses[mes];
    if (elYear) elYear.textContent = ano;

    const calGrid = document.getElementById('cal-days-grid');
    if (!calGrid) return;
    calGrid.innerHTML = '';

    const primeiroDiaMes = new Date(ano, mes, 1);
    const totalDiasMes = new Date(ano, mes + 1, 0).getDate();

    let diaSemanaInicial = primeiroDiaMes.getDay() - 1;
    if (diaSemanaInicial === -1) diaSemanaInicial = 6;

    for (let i = 0; i < diaSemanaInicial; i++) {
        const spanVazio = document.createElement('span');
        spanVazio.className = 'empty-day';
        calGrid.appendChild(spanVazio);
    }

    const hoje = new Date();
    const eventosDoMes = [];

    for (let dia = 1; dia <= totalDiasMes; dia++) {
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
    if (!eventosContainer) return;
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

window.onload = function() {
    renderizarCalendario();
    renderizarTabelaTreinos();
};