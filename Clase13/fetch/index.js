// Ejercicio 1: Consultar Información de una API Pública 
// Descripción: 
// 1. Crea un archivo index.js. 
// 2. Usando el método fetch en Node.js, realiza una solicitud a la API de Rick 
// and Morty. 
// 3. Extrae el nombre del primer personaje de la respuesta y muéstralo en la 
// consola. 
// Pistas: 
// • Usa fetch(url) para hacer la solicitud y .then(response => response.json()) 
// para procesar el JSON. 
// • Accede a results[0].name para obtener el nombre del primer personaje. 

fetch('https://rickandmortyapi.com/api/character')
    .then(res => {
       return res.json()
    })
    .then(data => {
        let primerPersonaje = data.results[0].name
        console.log('Nombre del primer personaje: ', primerPersonaje);
    });

