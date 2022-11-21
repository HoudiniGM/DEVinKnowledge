//********************************************************************************************************************
// RECOMENDO FORTEMENTE QUE ANALISE O CÓDIGO PELO VISUAL STUDIO CODE COM A EXTENSÃO PRETTIER PARA MELHOR VISUALIZAÇÃO!
//********************************************************************************************************************


// FUNÇÕES---------------------------------



//Variáveis do formulário
let titulo = document.getElementById('form-titulo');
let skill = document.getElementById('form-skill');
let categoria = document.getElementById('form-categoria');
let descricao = document.getElementById('form-descricao')
let video = document.getElementById('form-video');
const blocoEdicao = document.querySelector('#bloco-edicao');    // FORMULÁRIO

//Variáveis da seção de categorias
let numTotal = document.getElementById('card-total');  // São as <span> que armazenam o índice das categorias 
let numFront = document.getElementById('card-front');
let numBack = document.getElementById('card-back');
let numFull = document.getElementById('card-full');
let numSoft = document.getElementById('card-soft');

//Outras variáveis
const sectionCard = document.getElementById('section-card');   // SEÇÃO DOS CARDS
const pesquisar = document.getElementById('barra');            // BARRA DE FILTRAGEM
const botaoFiltrar = document.getElementById('filtrar');       // BOTÃO PARA FILTRAR
const apagarFiltro = document.getElementById('apagar-filtro')  // BOTÃO PARA APAGAR FILTRO

//Escutadores de evento
blocoEdicao.addEventListener('submit', criarCard);   // cria card
document.addEventListener('click', cardEvents);      // expande, edita e exclui cards
document.addEventListener('keyup', autoResize);      // redimensionar enquanto digito e
document.addEventListener('click', autoResize);      // redimensionar após um clique
botaoFiltrar.addEventListener('click', filtrarCards) // filtra os cards
apagarFiltro.addEventListener('click', limparFiltro) // apaga o filtro