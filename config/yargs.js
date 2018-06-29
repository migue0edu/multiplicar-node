const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default:10
  }
}
const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla.', { opts })
                    .command('crear', 'Crear un archivo con la tabla de nultiplicar.', {opts})
                    .help()
                    .argv;

module.exports = {
  argv
}
