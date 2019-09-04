const colors = require('colors')
const fs = require('fs');
const originFolder = './origen';
const finalFolder = './destino';
var temporal1=''
var temporal2=''
var d = new Date();

module.exports.copiar = (msg) => {
    fs.readdir(originFolder, (err, files) => {
      files.forEach(file => {
          temporal1=originFolder+"/"+file
          temporal2=finalFolder+"/"+file
          d = new Date();
          console.log(colors.yellow("Archivo "+file+" a copiar al momento: "+d))
        fs.copyFile(temporal1, temporal2, (erreur) => {
            if (erreur) console.log(colors.red(erreur));
            else 
            {
                d = new Date();
            console.log(colors.green("Archivo "+file+" Copiado en el momento: "+d));

            }
          });




      });
    });

}