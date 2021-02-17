function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}


var Lucas = new Pessoa('Lucas', 22, 'M');
console.log = Lucas;
console.log = "teste";