
const { crearArchivoAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivoAsync(argv.b, argv.l, argv.h )
.then( (archivo) => console.log(`El archivo ${archivo.rainbow} se creo con exito`))
.catch((err) => console.log(err));


