class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    info = () => console.log(`Carro: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
}
var carro = new Carro('BMW', '2.0', '2017')

class Animal{
    constructor(apelido){
        this.apelido = apelido
    }
    fazerBarulho = () => console.log('Algum barulho')
}
class Cachorro extends Animal{
    fazerBarulho = () => console.log('Au, au, au')
}
class Gato extends Animal{
    fazerBarulho = () => console.log('Miau, miau')
}
var Cão = new Animal('Dória')
var Cachorro1 = new Cachorro('José')
var Gato1 = new Gato('Sofia')

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar = () => console.log(`Saudação, ${this.nome}`)
}
var person = new Pessoa('André', 50)
//person.cumprimentar()

class ContaBancaria{
    constructor(saldo, titular){
        this.saldo = saldo;
        this.titular = titular;
    }
    Sacar(saque){
        while(saque >= 0){
        if(saque <= this.saldo){
           return this.saldo = (this.saldo - saque)
        }
    }
}
    Depositar(deposito){
    return this.saldo = this.saldo + deposito
    }
}

var BankAccount = new ContaBancaria(5000, 'Gabriel')

class Automovel{
    constructor(marca, modelo, ano, autonomia){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.autonomia = autonomia;
    }
    info(autonomia){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Autonomia: ${this.autonomia}`)
    }
    /*
    /info = autonomia => console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Autonomia: ${this.autonomia}`)

    O problema está no uso da notação de função de seta (=>) no contexto de um método de classe. 
    As funções de seta não possuem seu próprio this e herdam o this do contexto onde foram definidas. 
    Isso pode causar comportamentos inesperados quando usadas como métodos de classe.
    */
}

class CarroEletrico extends Automovel{
    constructor(marca, modelo, ano, autonomia){
        super(marca, modelo, ano, autonomia);
    }
    information(){
        super.info(this.autonomia)
    }
}
var Automoveis = new Automovel('Nissan', 2.0, 2015, '960km')
var CarrosEletricos = new CarroEletrico('BMW', 3.0, 2019, '840km')


class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.livros = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
      console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }
    
    removerLivro(titulo) {
      this.livros = this.livros.filter(livro => livro.titulo !== titulo);
      console.log(`Livro "${titulo}" removido da biblioteca.`);
    }
  
    listarLivros() {
      console.log('Livros na biblioteca:');
      this.livros.forEach(livro => {
        console.log(`- ${livro.titulo} por ${livro.autor}`);
      });
    }
  }
  
  // Teste as classes
  const biblioteca = new Biblioteca();
  const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien');
  const livro2 = new Livro('1984', 'George Orwell');
  const livro3 = new Livro('Harry Potter', 'Elon Musk')
  
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);
  biblioteca.removerLivro('1984');
  biblioteca.listarLivros();
  
  
function Tudo(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
  }
  const p1 = new Tudo('Luiz', 'Otávio')
  delete p1.nome
  const p2 = new Tudo('Maria', 'Rhana')

  console.log(p1)
  console.log(p2)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
Object.defineProperty(this, 'estoque', {
enumerable: true, // mostra a chave
value: estoque, // valor
writable: true, // pode alterar
configurable: true // configurável
});
}
const p6 = new Produto('André', '20', 600)
console.log(Object.keys(p6))
for(let x in p6){
    console.log(x)
}
delete p6['estoque']
console.log(p6)