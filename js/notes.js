/* 

  Desestruturacao

*/

const alunos = ['Joedson', 'Neiva'];
const medias = ['5', '3'];
const lista = [alunos, medias];

function functionName(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista; // Desestruturacao
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(aluno + ' tem media ' + mediaAluno);
  }

  else {
    console.log('Aluno nao existe');
  }
}

/* 

  for

*/

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

//

for (const element of elements) {
  console.log(element);
}

/* 

  forEach
  É um metodo callback - O parametro que passamos no metodo é uma funcao que é chamada de volta. Ou seja, é uma funcao que chama outra funcao.
  Este metodo nao retorna dado algum (undefined)

*/

elements.forEach(function (element) {
  console.log(element);
});

//

elements.forEach(element => {
  console.log(element);
});

//

elements.forEach(functionName); // Aqui nao foi necessario passar os parametros da funcao "functionName" pois internamente o forEach ja faz este tratamento

function functionName(element) {
  console.log(element);
}

/* 

  map
  É um metodo callback - O parametro que passamos no metodo é uma funcao que é chamada de volta. Ou seja, é uma funcao que chama outra funcao.
  Este metodo retorna dados.

*/

const notas = [9, 8, 7.5, 6];

const notasMaisUm = notas.map((nota) => nota + 1);

/* 

  Underscore para ocultar parametros
  Utilizado para quando precisamos manter as ordem de insercao dos parametros mas nao precisamos utilizar algum deles

*/

const notas = [9, 8, 7.5, 6];

const reprovados = notas.filter((_, indice) => notas[indice] < 7);

/* 

  Reduce - É um acumulador, reduz todos os valores para um só

*/

const notas = [9, 8, 7.5, 6];

const somaDasNotas = notas.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0); // Zero é o valor inicial que será reduzido, ou seja "acumulador" terá valor inicial Zero.

/* 
  
  Clonagem de listas/arrays e seus comportamentos

*/

const notas = [9, 8, 7.5, 6];
const cloneNotas = notas; // Atribuicao por referencia

cloneNotas.push(10); // Neste caso tanto o valor de "notas" quanto o de "cloneNotas" será alterado para [9, 8, 7.5, 6, 10]

// Para fazer um clone de lista que nao seja apenas um "ponteiro/referencia" para a lista clonada, devemos fazer:

const notas = [9, 8, 7.5, 6];
const cloneNotas = [...notas]; // Spread operator. Aqui pegamos os valores de uma lista e jogamos dentro de uma nova lista.

/* 
  
  Set()

*/

const listaDeValoresUnicos = new Set(); // Cria uma lista de valores que nao se repetem

/* 
  Funcao declarada
  Hoisting - significa içar, levantar, puxar para cima
  Dessa forma funcoes declaradas sao puxadas para o topo do arquivo
  Provavemente sao compiladas antes da execucao

*/

function functionName (param) {
  return param;
}

/* 

  Expressao de funcao - Funcao nao declarada 
  Nao sao puxadas para o todo do arquivo
  So sao reconhecidas em tempo de execucao e dependem da linha em que estao sendo chamadas

*/

const constantName = function (param) {
  return param;
}

/* 
  Expressao de funcao - Arrow function 
  Nao sao puxadas para o todo do arquivo
  So sao reconhecidas em tempo de execucao e dependem da linha em que estao sendo chamadas

*/
const constantName1 = (param) => {
  return param;
}

//

const constantName2 = (param) => param;

/* 

  Async -
  Await -

*/

export default defineEventHandler(async (event) => {
  await mailTransport.sendMail(mailOptions);
  return{}
})