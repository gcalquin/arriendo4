//Ejemplo del profesor para mostrar producto
Productos.forEach((producto) => {
    let columna = document.createElement("div");
    columna.className = "col-md-4 mt-3";
    //columna.id = "columna" + producto.id;
    columna.nombre = `columna-${producto.nombre}`
    columna.innerHTML = `
    <div class="card">
       <div class="card-body">
           <p class="card-text">Nombre: ${producto.nombre}<b></b> </p>
           <p class="card-text">Categoria: ${producto.categoria}<b></b> </p>
           <p class="card-text">Stock: ${producto.stock}<b></b> </p>
           <p class="card-text">Precio: ${producto.valor}<b></b> </p>
       </div>
    </div>
    `
    contenedorProductos2.append(columna)
})
//

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


function agregarAlCarrito(){

    //Aqui busco el elemento en el arreglo Productos
    algo = prompt("Que desea Agregar al Carrito: ")
    const found = Productos.find(element => element.nombre === algo);

    //Aqui busco el Indice en el arreglo productos
    let foundIndex = Productos.findIndex(element => element.nombre === algo);
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


function encuentraMiProducto2(){
    algo = prompt("Que desea encontrar")
    const found = Productos.find(element => element.nombre === algo);
    console.log(found)
}

// --Mostramos el arreglo completo en consola --
function mostrar(){
    console.log("-La cantidad de productos ingresados son: " + Productos.length)
    Productos.forEach(i => console.log(i))  
}

//Funcion guardar en carrito con un if para no arrendar mas de x cantidades
function guardarEnCarrito(productoId){
  
    let item = Productos.find((producto)=> producto.id === productoId)
    indice = item.id - 1
    alert("Puede arrendar un máximo de " + Productos[indice].stock + " De " + Productos[indice].nombre)
    let cantidadAArrendar = prompt("Cuantas unidades desea arrendar ?")
    let cantidadAArrendarINT = parseInt(cantidadAArrendar)
    if(cantidadAArrendarINT <= Productos[indice].stock) {
      Productos[indice].stock = Productos[indice].stock - cantidadAArrendarINT
      carrito.push(item)
      mostrarMensajeConfirmacion();
    } else {
      alert("no se puede ya que exede el stock");
    }
    
    
    console.log("ahora queda en productos"+ Productos[item.id].stock)
    console.log(Productos)
    
    console.log(carrito)
    actualizarProductosStorage();
    renderCarrito();
    //mostrarProductos();
  
  };