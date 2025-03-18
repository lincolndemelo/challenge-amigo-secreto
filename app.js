const campoAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = campoAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    amigos.push(nomeAmigo);
    
    atualizarListaAmigos();
    
    campoAmigo.value = '';
    campoAmigo.focus();
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }
    
    resultado.innerHTML = '';
    
    var indiceAleatorio = Math.floor(Math.random() * amigos.length);
    var amigoSorteado = amigos[indiceAleatorio];
    
    var elementoResultado = document.createElement('li');
    elementoResultado.textContent = "O amigo secreto sorteado é: " + amigoSorteado;
    
    resultado.appendChild(elementoResultado);
    
    limparLista();
}

function limparLista() {
    setTimeout(function() {
        amigos = [];
        atualizarListaAmigos();
        
        var mensagem = document.createElement('li');
        mensagem.textContent = "Nova lista iniciada! Adicione novos amigos.";
        listaAmigos.appendChild(mensagem);
        
        campoAmigo.focus();
    }, 2000);
}

campoAmigo.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        adicionarAmigo();
    }
});