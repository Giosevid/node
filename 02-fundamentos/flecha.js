/* function sumar(a, b) {
    return a + b
}
 */

let sumar = (a, b) => a + b

console.log(sumar(4, 6))


/* function saludar() {
    return 'Hola Mundo'
} */

let saludar = () => 'Hola mundo'

console.log(saludar())

//

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
}

console.log(deadpool.getNombre())