const colors = require('colors');

const fs = require('fs');

const crearArchivoP = (base= 5) =>{
    
    console.log('======================');
    console.log('  Generación Tabla del: ',colors.cyan(base));
    console.log('======================');
    let salida = '';

    return new Promise((resolve, reject) =>{

        for(let i = 1 ; i <= 10; i++){
            salida += `${base} * ${i} = ${i * base}\n`;
        }
        if (salida){
            console.log(salida);
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        }else{
            reject('No se creo el archivo');
        }
    });
}

const crearArchivoAsync = async(base= 5, listar = false, hasta = 10) =>{
    try {
        let salida = '';
        let Consola = '';
        for(let i = 1 ; i <= hasta; i++){
            salida += `${base} X ${i} = ${i * base} \n`;
            Consola += `${'|---->> '.blue} ${base} ${'X'.red} ${colors.yellow(i)} ${'='.red} ${i * base} ${' |'.red} \n`;
        }
        if(listar){
            console.log('//==============================================='.blue);
            console.log(`${'Generación de la Tabla del '.america}${ '===>'.red }`,colors.green.bold(base), ' Hasta el ',colors.green.bold(hasta));
            console.log('//==============================================='.blue);
            console.log(Consola);
        }            
        
        fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoAsync,
    crearArchivoP
};