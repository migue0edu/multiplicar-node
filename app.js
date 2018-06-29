const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(texto => console.log(texto.cyan))
      .catch(e => console.log(e))
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log('Archivo creado:',colors.yellow(`${archivo}`)))
      .catch(e => console.log(e))
    break;
  default:
    console-log('Comando no valido');

}
