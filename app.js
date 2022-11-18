// FUNÇÕES---------------------------------
function criarTitulo(newCard, titulo){ // Cria e adiciona um <h2> ao card como Título
    let newTitulo = document.createElement('h2');
        newTitulo.innerHTML = titulo.value;

        //Append do Título no Card
        newCard.appendChild(newTitulo);
}

function criarSkill(newCard, skill){ // Cria e adiciona um <p> ao card como Linguagem/Skill
    let newSkill = document.createElement('p');
        newSkill.innerHTML = `<b>Linguagem/Skill: </b>${skill.value}`;

        //Append da Skill no Card
        newCard.appendChild(newSkill);
}

function criarCategoria(newCard, categoria){ // Cria e adiciona um <p> ao card como categoria
    let newCategoria = document.createElement('p');
        newCategoria.innerHTML = `<b>Categoria: </b>${categoria.value}`;

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
            iconAmpliar.setAttribute('class', 'icon botao-ampliar');
            iconAmpliar.setAttribute('src', 'imagens/expand.png');

        let ampliar = document.createElement('button');  // Criar <button>
            ampliar.setAttribute('class', 'container-icon botao-ampliar');
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
    groupIcons.appendChild(criarYoutubeIcon(video));
    groupIcons.appendChild(criarExcluirIcon());

    //Append da Div Group Icons no final do Card
    newCard.appendChild(groupIcons);

}

function criarCard(event){ // Essa função cria um card e aciona todas as outras funções auxiliares acima. Após isso, adiciona o card à seção de cards.
    event.preventDefault();

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
   
}

function botaoFuncional(e){ // Event para excluir card quando clicar no botão excluir do card
    let targetIcon = e.target; // Descubro quem é o elemento que cliquei
    
    if (targetIcon.classList.contains('botao-excluir')){ // Se o target tiver class="botao-excluir", 
        let parentIcon = targetIcon.closest('li');       // Pego o elemento pai mais próximo com tag <li> (que é o Card do botão clicado)
        parentIcon.remove()                              // E apago esse elemento pai (o próprio card)
    }
    else if (targetIcon.classList.contains('botao-expandir')){ // Se o target tiver class="botao-expandir",
        let parentIcon = targetIcon.closest('li');             // Pego o pai mais próximo com a tag <li> (que é o Card do botão clicado)
            parentIcon.classList.toggle('expandir');
        console.log(parentIcon)
    }
}


//Variáveis do formulário
let titulo = document.getElementById('form-titulo');
let skill = document.getElementById('form-skill');
let categoria = document.getElementById('form-categoria');
let descricao = (document.getElementById('form-descricao')) ? document.getElementById('form-descricao') : ''; 
let video = (document.getElementById('form-video')) ? document.getElementById('form-video') : '#';

const sectionCard = document.getElementById('section-card');   // SEÇÃO DOS CARDS

const blocoEdicao = document.querySelector('#bloco-edicao');    // FORMULÁRIO
    blocoEdicao.addEventListener('submit', criarCard);

document.addEventListener('click', botaoFuncional);