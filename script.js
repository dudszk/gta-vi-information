O JavaScript é uma linguagem de programação completa composta por comandos, tipos de dados e funções nativas. As instruções e recursos mais utilizados na web dividem-se nas seguintes categorias principais:

Variáveis e Declarações

let: Declara uma variável com escopo de bloco que pode ter seu valor alterado.

const: Declara uma constante com escopo de bloco cujo valor não pode ser reatribuído.

var: Declara uma variável com escopo global ou de função (sintaxe antiga).

Tipos de Dados Primitivos

String: Textos delimitados por aspas ("texto", 'texto') ou interpolação (`texto ${var}`).

Number: Números inteiros ou decimais (10, 3.14).

Boolean: Valores lógicos (true ou false).

Array: Lista ordenada de valores ([1, 2, 3]).

Object: Coleção de pares chave-valor ({ nome: "Ana", idade: 25 }).

Operadores Estruturais

Aritméticos: +, -, *, /, % (resto da divisão).

Comparação: === (igual em valor e tipo), !== (diferente), >, <, >=, <=.

Lógicos: && (E), || (OU), ! (NÃO).

Controle de Fluxo

if / else if / else: Executa blocos de código com base em condições lógicas.

switch / case: Seleciona um bloco de código para execução com base em múltiplos casos.

for: Loop executado um número determinado de vezes.

while: Loop executado enquanto uma condição for verdadeira.

Funções

function minhaFuncao() {}: Declaração de função tradicional.

const minhaFuncao = () => {}: Arrow function (sintaxe moderna e enxuta).

return: Retorna um valor de dentro de uma função.

Manipulação do DOM (Interface da Página)

document.querySelector('seletor'): Seleciona o primeiro elemento do HTML correspondente ao seletor CSS.

document.querySelectorAll('seletor'): Seleciona todos os elementos correspondentes ao seletor.

element.addEventListener('evento', callback): Associa um ouvinte de eventos (como 'click', 'input') a um elemento.

element.textContent: Altera ou obtém o texto dentro de um elemento.

element.classList.add() / .remove() / .toggle(): Adiciona, remove ou altera classes CSS de um elemento.

Programação Assíncrona

fetch('url'): Realiza requisições HTTP para buscar ou enviar dados para servidores.

async / await: Sintaxe para lidar com operações assíncronas de forma legível.

Promise: Objeto que representa a eventual conclusão ou falha de uma operação assíncrona.