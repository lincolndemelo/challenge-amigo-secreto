# Projeto Amigo Secreto

Um simples sistema para sorteio de amigo secreto feito com JavaScript puro.

## Funcionalidades

Este projeto permite:
- Adicionar nomes de amigos a uma lista
- Visualizar a lista de amigos adicionados
- Realizar um sorteio aleatório de um amigo
- Limpar a lista automaticamente após o sorteio

## Como funciona

### Elementos HTML necessários

O código espera encontrar os seguintes elementos no seu HTML:
- Um campo de texto com ID `amigo` para inserir nomes
- Uma lista (ul/ol) com ID `listaAmigos` para mostrar os amigos adicionados
- Um elemento com ID `resultado` para exibir o resultado do sorteio

### Principais funções

#### adicionarAmigo()
- Obtém o nome digitado no campo de texto
- Valida se o nome não está vazio
- Adiciona o nome à lista de amigos
- Atualiza a exibição da lista
- Limpa o campo de texto

#### atualizarListaAmigos()
- Recria a lista visual de amigos no HTML
- Exibe todos os nomes adicionados até o momento

#### sortearAmigo()
- Verifica se existe pelo menos um amigo na lista
- Sorteia aleatoriamente um dos amigos
- Exibe o resultado do sorteio
- Inicia a limpeza da lista (após 2 segundos)

#### limparLista()
- Limpa o array de amigos
- Atualiza a interface
- Exibe mensagem para adicionar novos amigos

## Uso

1. Digite o nome de um amigo no campo de texto
2. Pressione Enter ou use o botão para adicionar o amigo
3. Repita o processo para adicionar mais amigos
4. Use o botão de sorteio para escolher um amigo aleatoriamente
5. Após o sorteio, a lista é automaticamente limpa depois de 2 segundos
