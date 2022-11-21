//********************************************************************************************************************
// RECOMENDO FORTEMENTE QUE ANALISE O CÓDIGO PELO VISUAL STUDIO CODE COM A EXTENSÃO PRETTIER PARA MELHOR VISUALIZAÇÃO!
//********************************************************************************************************************


// FUNÇÕES---------------------------------

function criarCard(event){ // Essa função cria um card e aciona todas as outras funções auxiliares. Após isso, adiciona o card à seção de cards.
    event.preventDefault();
    function criarTitulo(newCard, titulo){ // Cria e adiciona um <h2> ao card como Título
    let newTitulo = document.createElement('h2');
        newTitulo.innerHTML = titulo.value;

        //Append do Título no Card
        newCard.appendChild(newTitulo);
    }

    function criarSkill(newCard, skill){ // Cria e adiciona um <p> ao card como Linguagem/Skill
        let newSkill = document.createElement('p');
            newSkill.innerHTML = `<b>Linguagem/Skill: </b><span>${skill.value}</span>`;

            //Append da Skill no Card
            newCard.appendChild(newSkill);
    }

    function criarCategoria(newCard, categoria){ // Cria e adiciona um <p> ao card como categoria
        let newCategoria = document.createElement('p');
            newCategoria.innerHTML = `<b>Categoria: </b><span>${categoria.value}</span>`;

            //Append da Categoria no Card
            newCard.appendChild(newCategoria);
    }

    function criarDescricao(newCard, descricao){ // Cria e adiciona um <p> ao card como descrição
        let newDescricao = document.createElement('p');
            newDescricao.setAttribute('class', 'card-descricao');
            newDescricao.innerHTML = descricao.value;

            //Append da Descrição no Card
            newCard.appendChild(newDescricao);
    }

    function criarGroupIcons(newCard, video){ // Cria os ícones ampliar, editar, youtube e excluir. Cria uma <div> para agrupar esses itens
        function criarAmpliarIcon(){
            let iconAmpliar = document.createElement('img');  // Criar <img>
                iconAmpliar.setAttribute('class', 'icon botao-expandir');
                iconAmpliar.setAttribute('src', 'imagens/expand.png');

            let ampliar = document.createElement('button');  // Criar <button>
                ampliar.setAttribute('class', 'container-icon botao-expandir');
                ampliar.appendChild(iconAmpliar);   // Append <img> no <button>
            
            return ampliar; // Retorno para append no groupIcons
        }

        function criarEditarIcon(){
            let iconEditar = document.createElement('img'); // Criar <img>
                iconEditar.setAttribute('class', 'icon botao-editar');
                iconEditar.setAttribute('src', 'imagens/edit.png');

            let editar = document.createElement('button'); // Criar <button>
                editar.setAttribute('class', 'container-icon botao-editar');
                editar.appendChild(iconEditar); // Append <img> no <button>

            return editar; // Retorno para append no groupIcons
        }

        function criarYoutubeIcon(video){
            let iconYoutube = document.createElement('img'); // Criar <img>
            iconYoutube.setAttribute('class', 'icon');
            iconYoutube.setAttribute('src', 'imagens/youtube.png');

            let youtube = document.createElement('button'); // Criar <button>
                youtube.setAttribute('class', 'container-icon');
                youtube.appendChild(iconYoutube); // Append <img> no <button>

            let redirecionaYoutube = document.createElement('a'); // Criar <a>
                redirecionaYoutube.setAttribute('href', video.value);
                redirecionaYoutube.setAttribute('target', '_blank'); 
                redirecionaYoutube.appendChild(youtube); // Append <button> no <a>

            return redirecionaYoutube; // Retorno para append no groupIcons
        }

        function criarExcluirIcon(){
            let iconExcluir = document.createElement('img'); // Criar <img>
                iconExcluir.setAttribute('class', 'icon botao-excluir');
                iconExcluir.setAttribute('src', 'imagens/trash.png');

            let excluir = document.createElement('button'); // Criar <button>
                excluir.setAttribute('class', 'container-icon botao-excluir');
                excluir.appendChild(iconExcluir); // Append <img> no <button>

            return excluir; // Retorno para append no groupIcons
        }

        let groupIcons = document.createElement('div');
            groupIcons.setAttribute('class', 'group-icons');
        
        groupIcons.appendChild(criarAmpliarIcon());
        groupIcons.appendChild(criarEditarIcon());
        if (video.value){
            groupIcons.appendChild(criarYoutubeIcon(video))
        }
        
        groupIcons.appendChild(criarExcluirIcon());

        //Append da Div Group Icons no final do Card
        newCard.appendChild(groupIcons);

    }

    function limparForm(){ // Essa função limpa o formulário após a criação do card
        titulo.value = '';
        skill.value = '';
        categoria.value = '';
        descricao.value = '';
        video.value = '';
    }
        

    // Seção dos Cards
    let newCard = document.createElement('li'); // Cria o esqueleto base para o Card
        newCard.setAttribute('class', 'card');

    //Append do Card na Seção dos Cards

    sectionCard.appendChild(newCard);
    
    
    criarTitulo(newCard, titulo) // Cria o <h2> Titulo
    criarSkill(newCard, skill) // Cria o <p> Skill
    criarCategoria(newCard, categoria) // Cria o <p> Categoria
    criarDescricao(newCard, descricao) // Cria o <p> Descrição
    criarGroupIcons(newCard, video) // Cria a <div> agrupadora dos <button> e <a>
    
    alert('Card criado!')

    limparForm();
    definirIndiceCategoria();
}

function cardEvents(e){ // Event para excluir, expandir ou editar o card
    function excluirCard(card){
        let confirmacao = confirm('Tem certeza que deseja excluir esse card?'); // Pergunto ao usuário
        if (confirmacao){                                                       // se for SIM
            card.remove()                                                       // O card é apagado
            alert('Card deletado!');
        }
        definirIndiceCategoria();
    }
    function expandirCard(card){
        card.classList.toggle('maximizar');
    } 
    function editarCard(card){
        card.classList.add('maximizar');                                 // amplia para melhor visualização

            //------
            card.children[3].setAttribute('class','card-descricao');     // adiciono uma class="card-descricao" ao filho[3]
        }

    let targetIcon = e.target;                                           // Descubro quem é o elemento que cliquei
    let card = targetIcon.closest('li');                                 // Pego o elemento pai do elemento clicado
    
    if (targetIcon.classList.contains('botao-excluir')){                 // Se o elemento que cliquei tiver class="botao-excluir", 
        excluirCard(card)                                                // E apago esse elemento pai (o próprio card)
    }
    else if (targetIcon.classList.contains('botao-expandir')){           // Se o elemento que cliquei tiver class="botao-expandir",
        expandirCard(card)                                               // Adiciono a class="maximizar" para ativar o CSS (toggle serve para ativar e desativar)
    }
    else if (targetIcon.classList.contains('botao-editar')){             // Se o elemento que cliquei tiver class="botao-editar",
        editarCard(card)                                                 // Para mais detalhes, analise a função editarCard()
    }
}

function autoResize(elemento){ // Usei essa função para o height dos textareas se adaptar à medida que digito ou clico.
    if (elemento.target.tagName == 'TEXTAREA'){                                 // Detecto se o elemento que escuta o "keyup" possui tag textarea
        elemento.target.style.height = 'auto';                                  // Caso positivo, defino o height em 'auto'
        elemento.target.style.height = elemento.target.scrollHeight + 'px';     // E, com isso, o height acompanhará a altura do scroll
    }
}

function filtrarCards(){
    let ArrayCard = sectionCard.children;                   // Cria um array de <li>
    let valorDigitado = pesquisar.value                     // cria variável de nome mais amigável com o valor que é digitado

    for (let i = 0; i < ArrayCard.length; i++)              // loop no tamanho do array
        if ((ArrayCard[i].children[0].textContent.toLowerCase()).includes(valorDigitado.toLowerCase())){    // Se o <h2> possuir o valor digitado,
            if (ArrayCard[i].classList.contains('esconder')){           // verifica-se se o card já possui a class="esconder",
                ArrayCard[i].classList.toggle('esconder')               // Caso positivo, ele perde a classe e volta a ficar visível
            }
        }
        else {                                                         // Caso o <h2> e o valor digitado sejam diferentes entre si
            if (!ArrayCard[i].classList.contains('esconder')){         // verifica-se se o card não possui a class="esconder",
                ArrayCard[i].classList.toggle('esconder');             // Caso, positivo, ele ganha a classe e fica invisível
            }
        }

}

function limparFiltro(){
    pesquisar.value = '';
    filtrarCards();
}

function definirIndiceCategoria(){
    let ArrayCard = sectionCard.children;                         // defino uma variável para melhor visualização
    let somaFront = 0, somaBack = 0, somaFull = 0, somaSoft = 0;  // crio contadores para cada categoria

    
    for (let i = 0; i < ArrayCard.length; i++){                   // Loop for no Array de <li> da Seção de Cards
        categoriaCard = ArrayCard[i].children[2].children[1]      // Array[i] pega um card, .children[2] pega a categoria e .children[1] pega a span do número

        switch (categoriaCard.textContent){                       // switch case para incrementar os contadores
            case 'FrontEnd':
                somaFront++;
                break
            
            case 'BackEnd':
                somaBack++;
                break

            case 'FullStack':
                somaFull++;
                break

            case 'Comportamental/Soft':
                somaSoft++;
                break
        }

        numFront.textContent = somaFront;                         // atribuo o respectivo contador ao textContent de cada índice
        numBack.textContent = somaBack;
        numFull.textContent = somaFull;
        numSoft.textContent = somaSoft;
    }

    numTotal.textContent = sectionCard.children.length;
}

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