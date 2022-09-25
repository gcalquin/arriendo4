let opcion = 0;

const listaProductos = [];





let Productos = [
    {
      "nombre": "Silla Simple",
      "categoria": "Sillas",
      "descripcion": "Silla de plastico",
      "foto": "",
      "stock": 100,
      "valor": 5000
    },
    {
        "nombre": "Silla con funda",
        "categoria": "Sillas",
        "descripcion": "Silla de madera con funda color a elección",
        "foto": "",
        "stock": 75,
        "valor": 7500
    },
    {
        "nombre": "Sofa un cuerpo",
        "categoria": "Sofas",
        "descripcion": "Sofa de ratán Largo:80cm Ancho:80cm",
        "foto": "",
        "stock": 20,
        "valor": 10000
    }
];

let Carrito = [];

class Carro{
    constructor(nombre, cantidad, dias, valor){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.dias = dias;
        this.valor = valor;
    }
}

function agregarAlCarrito(){

    //Aqui busco el elemento en el arreglo Productos
    algo = prompt("Que desea Agregar al Carrito: ")
    const found = Productos.find(element => element.nombre === algo);

    //Aqui busco el Indice en el arreglo productos
    const foundIndex = Productos.findIndex(element => element.nombre === algo);
    alert(foundIndex)

    let nombreCapturado = found.nombre;
    alert("Usted puede agregar maxímo: " + Productos[foundIndex].stock )
    let cantidadCapturada = parseInt(prompt("Cuantas unidades quiere arrendar:"));

    Productos[foundIndex].stock = Productos[foundIndex].stock - cantidadCapturada
    alert("Ahora quedan: " + Productos[foundIndex].stock )

    let diasCapturados = parseInt(prompt("Cuantos días quiere arrendar:"));
    let valorCapturado = found.stock * cantidadCapturada * diasCapturados
    let nuevoAlCarrito = new Carro(nombreCapturado, cantidadCapturada, diasCapturados, valorCapturado)



    Carrito.push(nuevoAlCarrito);

    return Carrito
}


class Producto{
    constructor(nombre, categoria, descripcion, foto, stock, valor){
    this.nombre=nombre;
    this.categoria=categoria;
    this.descripcion=descripcion;
    this.foto=foto;
    this.stock=stock;
    this.valor=valor;   
}
}

function agregarProductos(){
    

        let nombreCapturado = prompt("Ingrese nombre del Producto: ")
        let categoriaCapturada = prompt("Ingrese categoría del Producto: ")
        let descripcionCapturada = prompt("Ingrese descripcion del Producto: ")
        let fotocapturada = prompt("Ingrese foto del Producto: ")
        let stockCapturado = parseInt(prompt("Ingrese stock de "+ nombreCapturado + ":"));
        let valorCapturado = parseFloat(prompt("Ingrese valor diario de "+ nombreCapturado + ":"));
        let nuevoProducto = new Producto(nombreCapturado, categoriaCapturada,  descripcionCapturada, fotocapturada, stockCapturado, valorCapturado);

        Productos.push(nuevoProducto); 
    
    return Productos
}

function main(){
    agregarElementos();
    menu();   
   
 }


 
// --Mostramos el arreglo completo en consola --
function mostrar(){
    console.log("-La cantidad de productos ingresados son: " + Productos.length)
    Productos.forEach(i => console.log(i))  
}



// -- Menu de opciones --
function menu(){
    while (opcion <= 5) {
        // Menu //
        console.log("Menu");
        console.log("----");
        console.log("1. Ingresar productos");
        console.log("2. Mostrar productos ingresados");
        console.log("3. Agregar al arriendo");
        console.log("4. Buscar según categoría ingresada")
        console.log("5. Buscar Elemento para agregar a carro")
        console.log("10. Salir");
        opcion = parseInt(prompt("Ingrese Opción: "));
        console.log("Usted ingreso la opcion " + opcion +"...")  
    
        if (opcion == 1){
          let productos = agregarProductos()
          console.log(productos)  
          console.clear;
        }
    
        if (opcion == 2){
            mostrar();
        }
    
          
         if (opcion == 3){
            //let producotAAgregar = prompt("Que Producto desea agregar? ")
            agregarAlCarrito();
            console.log(Carrito);
        }

        if (opcion == 4){
           let categoriaABuscar = prompt("Que categoria desea? ")
           let resultado = Productos.filter((elemento) => elemento.categoria == categoriaABuscar);
           console.log(resultado)
          }

          if (opcion == 5){

            encuentraMiProducto2();
          }

          if (opcion == 10){
            break
          }
    
        if (opcion < 1 || opcion > 10){
          alert("Ingrese opción correcta (1..10)...");
    
       } 
    
      }
}

//Esta funcion nos permite agregar los elementos en modo lista al html.
function agregarElementos(){ 
    var lista=document.getElementById("contenedor-productos"); 
    Productos.forEach(function(data,index){
    var linew= document.createElement("li");
    var contenido = document.createTextNode(data.nombre + " " + data.categoria + " " + data.stock + " " + data.valor);
    lista.appendChild(linew);
    linew.appendChild(contenido);
    
    })
    }
 //Fin funcion agregaElementos()



function encuentraMiProducto2(){
    algo = prompt("Que desea encontrar")
    const found = Productos.find(element => element.nombre === algo);
    console.log(found)
}


main();