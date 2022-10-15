//1 - inserir dado
localStorage.setItem("name","Deivid");

//2 - restart sem perder dados

//3 - resgatar item
const name = localStorage.getItem("name");

console.log(name);

//4 - resgate de item que não existe
const lastName = localStorage.getItem("lastname");

console.log(lastName);

if (!lastName) {
    console.log("sem sobrenome!");
}

//5 - remover item
localStorage.removeItem("name");

//6 - limpar todos os itens
localStorage.setItem("a",1);
localStorage.setItem("b",2);

//console.log(typeof localStorage.getItem("a")) mostra que ele ta recebendo string mesmo o inserindo um número.

localStorage.clear();

//7 - session storage
sessionStorage.setItem("number",123);

//8 - reiniciar e perder dados

const n = sessionStorage.getItem("number");
//sessionStorage.removerItem("number");
sessionStorage.clear();

//9 - salvar objeto
let person = {
    name: "Deivid",
    age: 23,
    job: "Programmer",
};
localStorage.setItem("person", JSON.stringify(person))
//10 - como pegar o objeto e usar
let getPerson = localStorage.getItem("person");
console.log(getPerson);

let personObject = JSON.parse(getPerson);
console.log(personObject.job);