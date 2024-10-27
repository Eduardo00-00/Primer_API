const express = require ('express'); //se declara como una constante a express (la API)
const app = express (); //se crea una instancia para validar el framework
const PORT = 3000; //se declara el puerto
app.use(express.json());//que se realiza las peticiones de las APIs a la aplicación web

app.get('/api/greet', (req,res)=> { //se estable la ruta get para obtener la ruta de los mensajes
    res.json ({message:'Generando la primera API'})
});

//Inicializar el servidor
app.listen(PORT, ()=>{
    console.log('El servidor ejecutado en http://localhos:${PORT}')
});

