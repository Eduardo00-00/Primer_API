const express = require ('express'); //se declara como una constante a express (la API), importa el módulo express 
const app = express (); //se crea una instancia (para definir las rutas y las funcionalidades de la API) para validar el framework de Node.js (nos sirve para crear APIs y aplicaciones web)
const PORT = 3000; //se declara el puerto donde la aplicación será ejecutada
app.use(express.json());//que se realiza las peticiones de las APIs a la aplicación web

let estudiantes = [ //se crea un arreglo con dos datos
    {id:1, nombre: 'Eduardo Ramírez'},
    {id:2, nombre: 'Edy'},
    {id:3, nombre: 'Eimy'},
];

//GET: obtener todos los estudiantes 
app.get('/estudiantes', (req,res) => { //"=>" (arrow fuction) significa que va a devolver un valor de la función 
    res.json (estudiantes);
});

//GET: Obtener un estudiante por ID
app.get('/estudiantes/:id',(req,res) => { //lo que está en '' es una campo dinámico, cambia el id
    const id= parseInt (req.params.id); //parse convierte a id a un valor numérico
    const estudiante= estudiantes.find (e=>e.id===id);//la "e" es el que recorre el arreglo
    if (estudiante) {
        res.json (estudiante);
    } else
    res.status(404).send('Estudiante no localizado');
});

//POST:crear un nuevo estudiante, 
app.post('/estudiantes', (req, res) => {
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre: req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

//PUT sirve para actulizar un item existente
app.put('/estudiantes/:id', (req,res) => {//definimos una ruta PUT para actualizar un estudiante por ID
	const id = parseInt(req.params.id);
	const estudiante = estudiantes.find (e=>e.id===id);
	if (estudiante) {
		estudiante.nombre =req.body.nombre;
		res.json(estudiante);
	} else {
		res.status(404).send('Estudiante no encontrado');
	}
});

//DELETE: eliminar un item por ID

app.delete('/estudiantes/:id', (req,res) =>{
	const id= parseInt(req.params.id); // se convierte el texto a un valor numérico
	const index=estudiantes.findIndex(e=>e.id===id);// buscamos en la posición (el index) para eliminar
	if (index!==-1){ //si el estidiante existe en la posición 0 (-1)
		estudiantes.splice(index, 1);//splice es un método para eliminar, remplazar y actualizar
		res.send('Estudiante eliminado');
	} else {
		res.status(404).send('Estudiante no encontrado');
	}
});

//Inicializar el servidor
app.listen(PORT, ()=>{
    console.log(`El servidor ejecutado en http://localhost:${PORT}`);
});