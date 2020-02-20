// 1. Oteniendo el contenido del archivo con el módulo fs

// Lamando el módulo de fs (File System)
const fs = require('fs')
const path = require('path')
// Llamadno el módulo de MarkdownIt
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

// Cuando el usuario coloca el archivo que se ejecuta, obteniendo el path
// let pathToFile =  process.argv[1];
// Obteniendo el nombre del archivo que el usuario quiere revisar

let searchExtension = process.argv[2];
//console.log (searchExtension)

// Si el archivo no es de extensión .md no lo abras, manda un error
if (path.extname(searchExtension) === '.md') {

  // Obteniendo el contenido del documento. Se coloca la codificación
  fs.readFile(searchExtension, 'utf8', (err, data) => {
    if (err) {
      return console.log(err + 'Tu archivo no es ".md"!')
    }
    // Si no hay un error entonces obtén el contenido
    let content = data; // Es un string
    // console.log(typeof content)
    // console.log(content)

    /* Aplicando el método de render de la library markdown-It y obtengo
    el un string con HTML */
    const env = {};
    let result = md.parse(content, env); // env es un parámetro
    // console.log(result)

    // Si obtengo tokens, ¿tengo que iterar en ellos para obtener los links y el contenidp?
    // Entro al  array con el for, y accedo a cada objeto, ¿con filter o con for each?
    // Guardalos en un un nuevo array

    const searchUrls = (tokens) => {
      // let links = "";
      for (let i = 0; i < tokens.length; i++) {
        let links = result[i];
        console.log(links)
      }
    }
    searchUrls(result)

  })
}
else {
  console.log('Tu archivo' + searchExtension + 'no es un .md ')
}

//console.log(contentPath)

2.//  En el callback 
/*
Los links se identifican en un archivo md como:
[Texto] ()
<a href> </>
https://

//3.  Función que exportará la validación y los stats
Los módulos se exportan con module.exports.hello = hello;
function mdLinks (path, opts) {
   Aquí la función que importa el módulo que obtiene las opts (verify and stats)
    Para verify se implementaría: ¿un if que valorara si los links en el array son válidos?
    && opts.validate para mostrar los errores (¿Es npm class validator? Revisar  https://www.npmjs.com/package/class-validator)
    Para stats ¿se implementaría un contador de los links funcionales y no funcionales después de la validación
}
return
*/