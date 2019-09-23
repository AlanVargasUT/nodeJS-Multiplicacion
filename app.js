//Este programa sirve para aprender a multiplicar
const { crearArchivo, listarTabla } = require('./multiplicar/Multiplicacion');
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Exporta en un archivo la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv;
let base = 7;
let comando = argumentos._[0];

switch (comando) {
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
        console.log('Tu opcion es listar');
        break;

    case 'crear':
        crearArchivo(argumentos.base);
        break;
        console.log(`Comando no reconocido:: ${comando}`);
        break;
}

// crearArchivo(base)
//     .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
//     .catch(error => console.log(error));