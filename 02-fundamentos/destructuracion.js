let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

let { nombre: primerNonbre, apellido, poder } = deadpool

console.log(primerNonbre, apellido, poder)