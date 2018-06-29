const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
  return new Promise ((resolve, reject) => {
    console.log('====Tabla de multiplicar===='.magenta)

    if(!Number(base) || !Number(limite)){
      reject('La base o el limite introducido no es un número');
      return;
    }
    let data ='';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${i*base}\n`;
    }
    resolve(data);

  })
}

let crearArchivo = (base, limite = 10) =>{
  return new Promise ((resolve, reject) =>{
    if(!Number(base)){
      reject('El valor introducido no es un número');
      return;
    }

    let data ='';
    for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${i*base}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}-hasta${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else {
          resolve(`tabla-${base}-hasta${limite}.txt`)
      }
    });

  })
}

module.exports = {
  listarTabla,
  crearArchivo
}
