const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}  =  ${base * i}`);
    }
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let datos = "";

        for (let i = 1; i <= 10; i++) {
            datos += `${base} * ${i}  =  ${base * i}  \n`;
        }

        fs.writeFile(`tabla-de-${base}.txt`, datos, (error) => {
            if (error) {
                Reject(error);
            } else {
                resolve(`tabla-del-${base}.txt`)
            }

            console.log('El archivo fue creado exitosamente')
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}