/* setTimeout(() => {
    console.log('Hola mundo')
}, 3000) */

let getUsusarioById = (id, callback) => {
    let usuario = {
        nombre: 'Giosevid',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`)
    } else {
        callback(null, usuario)
    }

}

getUsusarioById(2, (err, usuario) => {
    if (err) {
        return console.log(err)
    }
    console.log('Usuario de base de datos', usuario)
})