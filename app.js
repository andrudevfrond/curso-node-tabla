
const { crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
console.log( argv);
console.log('base: yargs',argv.base );

// const [,,arg3 = 'base=5'] = process.argv; 
// const [,base = 5] = arg3.split('=');
// console.log(base);

crearArchivoAsync(argv.b, argv.l, argv.h )
.then( (archivo) => console.log(`El archivo ${archivo.rainbow} se creo con exito`))
.catch((err) => console.log(err));


