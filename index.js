const express=require('express'),
      consolidate=require('consolidate'),
      hbs=require('handlebars');

var app=express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(getHTML('Calculadora XD'));
});

app.get('/inicio', function(req, res) {
   
        res.send(getHTML('Inicio'));
    
});

app.get('/proyectos', function(req, res) {
    
         res.send(getHTML('Proyectos'));
     
 });

 app.get('/contacto', function(req, res) {
    
         res.send(getHTML('Contacto'));
     
 });

app.get('*',(req,res)=>{
    res.send(getHTML('Error'));
})

app.listen(3000,()=>console.log('Escuchando puerto 3000'));

var getHTML = function (titulo) {
    return `
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${titulo}</title>
</head>
<body>
    <div class="contenido">
        <h1>${titulo}</h1>
        <ul>
        <a href="/inicio">
            <li>Inicio</li>
        </a>
        <a href="/proyectos">
            <li>Proyectos</li>
        </a>

        <a href="/contacto">
            <li>Contacto</li>
        </a>

    </ul>
    </div>
</body>

</html>
    `;
}