const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    desc: 'numero que desea generar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    desc: 'Marca para que se muestre el resultado' 
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    demandOption: false,
    desc: 'Máximo número para multiplicar'
})
.check((argv, option)=> {
    if(isNaN(argv.b))
        throw 'la base tiene que ser un número';
    if (isNaN(argv.h))
        throw 'La opcion h(hasta) debe ser un número';
    return true;
})
.argv; 

module.exports = argv;