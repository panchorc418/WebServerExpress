const http = require('http');



//Creamos servidor
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'francisco',
            edad: 27,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('hola mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando por el puerto 8080');