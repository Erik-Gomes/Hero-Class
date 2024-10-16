class Herro{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
            default:
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


let heroi1 = new Herro("Patolino", 25, "mago")
let heroi2 = new Herro("Donatelo", 16, "Ninja")
let heroi3 = new Herro("Batman", 45, "monge");
let heroi4 = new Herro("Thiago", 33, "guerreiro")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()