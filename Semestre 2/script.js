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
        imagemElenco: "./Imagens/Modalidades/volei2.jpg",
        atletas: [
            { nome: "Isabelle Moreira", num: "02", ano: "2009", img: "Imagens/Atletas/isabelle.jpeg" },
            { nome: "Yasmim Alexandre", num: "03", ano: "2011", img: "Imagens/Atletas/yasmim.jpeg" },
            { nome: "Vitória Bráz", num: "06", ano: "2011", img: "Imagens/Atletas/vitoria.jpeg" },
            { nome: "Giovana Remorini", num: "07", ano: "2009", img: "Imagens/Atletas/remorini.jpeg" },
            { nome: "Alicia Coelho", num: "11", ano: "2010", img: "Imagens/Atletas/alicia.jpeg" },
            { nome: "Elloá Rodrigues", num: "15", ano: "2011", img: "Imagens/Atletas/eloa.jpeg" },
            { nome: "Letícia Guarizzo ", num: "17", ano: "2011", img: "Imagens/Atletas/leticia.jpeg" },
            { nome: "Enzo Macedo", num: "18", ano: "2008", img: "Imagens/Atletas/enzo.jpeg" },
            { nome: "Miguel Pignata", num: "27", ano: "2009", img: "Imagens/Atletas/pignata.jpeg" },
            { nome: "Miguel Dantas", num: "82", ano: "2011", img: "Imagens/Atletas/migueldantas.jpeg" }
                    ]
    },
    futsal: {
        titulo: "FUTSAL<br><span>(MASCULINO)</span>",
        descricao: "Time com forte rendimento em quadra",
        imagemElenco: "./Imagens/Modalidades/futsal2.jpeg",
        atletas: [
            { nome: "Antônio Noronha", num: "01", ano: "2010", img: "Imagens/Atletas/antonio.jpeg" },
            { nome: "Davi Cardeal", num: "07", ano: "2009", img: "Imagens/Atletas/davi.jpeg" },
            { nome: "Thiago Amaral", num: "08", ano: "2009", img: "Imagens/Atletas/thiago.jpeg" },
            { nome: "Rafael Chaves", num: "10", ano: "2010", img: "Imagens/Atletas/rafael.jpeg" },
            { nome: "Heitor Baroni", num: "11", ano: "2011", img: "Imagens/Atletas/heitor.jpeg" },
            { nome: "Davi Rodrigues", num: "12", ano: "2011", img: "Imagens/Atletas/davirodrigues.jpeg" },
            { nome: "João Miguel", num: "14", ano: "2012", img: "Imagens/Atletas/joaomiguel.jpeg" },
            { nome: "Miguel Cássio", num: "19", ano: "2012", img: "Imagens/Atletas/cassio.jpeg" },
            { nome: "Giovani Schionato", num: "24", ano: "2012", img: "Imagens/Atletas/giovani.jpeg" },
            { nome: "Vinicius Pereira", num: "44", ano: "2010", img: "Imagens/Atletas/vini.jpeg" }
        ]
    },
    handebol: {
        titulo: "HANDEBOL<br><span>(FEMININO)</span>",
        descricao: "Atletas competindo na liga InterSesi de handebol.",
        imagemElenco: "./Imagens/Modalidades/hand2.jpg",
        atletas: [
            { nome: "Kauany Lopes", num: "06", ano: "2011", img: "Imagens/Atletas/kauany.jpeg" },
            { nome: "Julia Souza", num: "07", ano: "2012", img: "Imagens/Atletas/juliasouza.jpeg" },
            { nome: "Julia Vascon", num: "09", ano: "2012", img: "Imagens/Atletas/julia.jpeg" },
            { nome: "Maria Laura", num: "10", ano: "2011", img: "Imagens/Atletas/marialaura.jpeg" },
            { nome: "Joanne Lauriano", num: "18", ano: "2011", img: "Imagens/Atletas/joane.jpeg" },
            { nome: "Lívia Morais", num: "22", ano: "2010", img: "Imagens/Atletas/liviamorais.jpeg" },
            { nome: "Lívia Camargo", num: "23", ano: "2011", img: "Imagens/Atletas/liviacamargo.jpeg" },
            { nome: "Sara de Paula", num: "44", ano: "2010", img: "Imagens/Atletas/sara.jpeg" }
        ]
    },
    tenis: {
        titulo: "TÊNIS DE MESA<br><span>(DUPLA)</span>",
        descricao: "Dupla de alta velocidade e precisão técnica.",
        imagemElenco: "./Imagens/Modalidades/pingpong2.jpg",
        atletas: [
            { nome: "Heros Rodrigo", num: "07", ano: "2010", img: "Imagens/Atletas/Heros.jpeg" },
            { nome: "Eloah Souza", num: "10", ano: "2010", img: "Imagens/Atletas/eloah.jpeg" }
        ]
    }
};

function trocarModalidade(chave) {
    const botoesMod = document.querySelectorAll('.mod-btn');
    botoesMod.forEach(btn => btn.classList.remove('active'));

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
        frente: "./Imagens/Uniformes/uniforme frente 1.png",
        lado1: "./Imagens/Uniformes/unifotme lado 1 1.png",
        costas: "./Imagens/Uniformes/uniforme costas 1.png",
        lado2: "./Imagens/Uniformes/uniforme lado 2 1.png"
    },
    jogo2: {
        frente: "./Imagens/Uniformes/uniforme frente 2.png",
        lado1: "./Imagens/Uniformes/unifotme lado 1 2.png",
        costas: "./Imagens/Uniformes/uniforme costas 2.png",
        lado2: "./Imagens/Uniformes/uniforme lado 2 2.png"
    },
    gol: {
        frente: "./Imagens/Uniformes/uniforme frente gol.png",
        lado1: "./Imagens/Uniformes/unifotme lado 1 gol.png",
        costas: "./Imagens/Uniformes/uniforme costas gol.png",
        lado2: "./Imagens/Uniformes/uniforme lado 2 gol.png"
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
    "2026-4-9": "JEA Futal Pré Mirim",
    "2026-5-16": "JEA Futsal Mirim",
    "2026-4-23": "JEA de Xadrez e Damas",
    "2026-4-30": "JEA Futsal Infantil",
    "2026-5-20": "Intersesi em Jundiaí (das 8:30 às 17:00)",
    "2026-5-20": "JEA Futsal Juvenil",
    "2026-7-22": "JEA Handebol Infantil",
    "2026-8-5": "JEA Handebol Juvenil",
    "2026-8-19": "JEA Vôlei Infantil e Juvenil",
    "2026-8-26": "JEA Vôlei Mirim e Pré Mirim",
    "2026-9-3": "JEA Queimada Mirim e Pré Mirim",
    "2026-9-17": "JEA Queimada Infantil e Juvenil",
    "2026-9-24": "JEA Basquete 3x3",
    "2026-10-9": "Interclasse dia 1.",
    "2026-10-10": "Interclasse dia 2.",
    "2026-10-11": "Interclasse dia 3.",
    "2026-10-12": "Interclasse dia 4.",
    "2026-10-13": "Interclasse dia 5."
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