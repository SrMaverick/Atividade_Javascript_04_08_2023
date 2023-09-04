// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let horario = "dia";
if (horario){
    console.log("Claro!")
} else {
    console.log("de noite!")
};

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for(let i = 2; i <= 20; i+=2){
    console.log(i)
};

// 03 - crie uma função que exiba uma mensagem no console
function aviso(){
    console.log("Graças a essa atividade, percebi que preciso estudar mais!");
}
aviso();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
let nome = "Michael Douglas"
function mostrarNome(meuNome){
    console.log(`Meu nome é ${meuNome}`)
}
mostrarNome(nome);

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
let info = function (nome, idade, estiloMusical){
    console.log(nome, idade, estiloMusical)
}
info("Michael Douglas", "25 anos", "Rock")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
let list = function (filme, musica){
    console.log(filme, musica)
}
list("Interestelar", "Straight From the Heart  Bryan Adams")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(num){
    return num*3;
}
console.log(triple(3))

// 08 - crie uma função que  verifique se uma  variável é true ou false
let idade = 25;

function menorDeIdade(idadeDaPessoa){
    if(idadeDaPessoa < 18){
        return true;
    } else {
        return false;
    }
}
console.log(menorDeIdade(idade));

// 09 - Crie um array que receba 5 itens e exiba no console.
let bandas = ["Linkin Park", "Bon Jovi", "Bryan Adams", "Aerosmith", "Skillet"]
console.log(bandas);

// 10 - Utilize um método para adicionar um nome ao inicio do array.
bandas.unshift("Red Hot Chili Peppers");

// 11 - Utilize um método para remover o último nome do array.
bandas.pop();

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
bandas.push("Kenny Loggins", "a-ha");

// 13 - Utilize um método para remover o primeiro nome do array.
bandas.shift();

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
console.log(numbers);
numbers.sort();

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
let objeto = {
    nome: "Michael Douglas",  
    altura: "1.80",
    peso: "78kg"
}


// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
objeto.idade = "25 anos"

// 17 - Remova uma propriedade desse objeto.
delete objeto.peso

// 18 - Mostre no console todas as propriedades desse objeto.
console.log(objeto);

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
let cadastro = [
    {
        nome: "Michael Douglas",
        idade: "25 anos",
        telefone: "00 4444-3333",
        amigos: ["Ricardo", "Lucas", "Mateus", "Lazaro", "Valtinho"]
    },
    {
        nome: "Isabel",
        idade: "22 anos",
        telefone: "00 8888-5555",
        amigos: ["Frederico", "Mel", "Athena", "Pandora"]
    },
    {
        nome: "Guilherme",
        idade: "18 anos",
        telefone: "00 9999-8888",
        amigos: ["Nina", "Ana", "Isabel", "Kauã"]
    },
    {
        nome: "Ricardo",
        idade: "46 anos",
        telefone: "00 7777-7777",
        amigos: ["João", "Carlos", "Humberto", "Fred"]
    },
    {
        nome: "Carol",
        idade: "29 anos",
        telefone: "00 1111-2222",
        amigos: ["Grazy", "Kebler", "Joy", "Dandara"]
    }
]
// 20 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro);
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);