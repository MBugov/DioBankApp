# POO - Programação Orientada a Objeto

### Exemplo de um Objeto simples:

```
const robot = {
    name: 'robo-x3000',  // <- atributo do objeto
    power: '7500',
    poder1: 'Flecha de Gelo',
    poder2: 'Bola de energia',
    atirar(habilidade: string){  // <- metodo
        console.log(`Roboto efetuou disparo de ${habilidade}`)
    }
}

console.log(`Robo ${robot.name}, tem ${robot.power} de poder`)
robot.atirar(robot.poder1)
```
> Imagine um cenario onde precisara ser criados uma grande quantidade de objectos, como por exemplo, usuarios de sistemas, imagine a quantidade de codigo necessário.

**Levando-se me conta isso, que criamos classes em POO**

> Se eu preciso repetir sempre novos objetos, criamos uma classe para servir como uma forma para novos objetos que serão instanciados 

### Exemplo de classe

```
class Robot {
    name: string = '' // <- atributo do objeto
    power: number = 1000
    poder: string = ''

    //metodo Construtor - Initializes a new instance of the class.
    // forma explicita
    constructor(name: string, power: number, poder: string ) {
        this.name = name
        this.power = power
        this.poder = poder
    }

    // metodo
    atirar = () => {
        console.log(`Roboto efetuou disparo de ${this.poder}`)
    }
}

const robot: Robot = new Robot('RBX-500', 700, 'Raio Ionizante')
console.log(`Robo ${robot.name}, tem ${robot.power} de poder`)
robot.atirar()

```