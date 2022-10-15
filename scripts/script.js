let opcion = 0;

const listaProductos = [];

const contenedorProductos2 = document.getElementById("contenedor-productos2")

const contenedorProductos3 = document.getElementById("contenedor-productos3")

let btnLimpiarStorage;






function guardarEnCarrito(productoId){
  
  let item = Productos.find((producto)=> producto.id === productoId)

    carrito.push(item)
    mostrarMensajeConfirmacion();
    if (carrito.length != 0){
      mostrarBotonDePago();
    }
    else{
      ocultarBotonDePago();
    }
   


  
  
  console.log("ahora queda en productos"+ Productos[item.id].stock)
  console.log(Productos)
  
  console.log(carrito)
  actualizarProductosStorage();
  renderCarrito();

};

const ContenedorCarrito = document.querySelector('#contenedor')

const renderCarrito = () => {
  ContenedorCarrito.innerHTML = " "
  carrito.forEach((item) => {
    let div = document.createElement('div')
    div.innerHTML = `
     <div class="row">
    <div class="col-md-6">
    <p>Producto: ${item.nombre}, Valor: ${item.valor}</p>  
    </div>
    <div class="col-md-6 d-flex align-items-end">
    <button onclick="eliminarItem(${item.id})">Eliminar del carrito</button> 
    </div>
    </div>
    
    `

    ContenedorCarrito.append(div)

    calculartotal()

  })



}

const eliminarItem = (id) => {
  let borrar = carrito.find((producto) => producto.id === id)
  let indice = carrito.indexOf(borrar)
  carrito.splice(indice , 1)
  renderCarrito()
  calculartotal()

  if (carrito.length != 0){
    mostrarBotonDePago();
  }
  else{
    ocultarBotonDePago();
  }

  actualizarProductosStorage();

  

}

const divPrecio = document.querySelector("#precioTotal")
calculartotal = () => {
  let cont = 0
  carrito.forEach((item) => {
    cont += item.valor
  })

divPrecio.innerHTML = cont

alert(cont)

}


let usuario

let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;
let botonDePago;




let Productos = [];



let carrito = [];

class Carro{
    constructor(nombre, cantidad, dias, valor){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.dias = dias;
        this.valor = valor;
    }
}




class Producto{
    constructor(id, nombre, categoria, descripcion, foto, stock, valor){
    this.id=id;
    this.nombre=nombre;
    this.categoria=categoria;
    this.descripcion=descripcion;
    this.foto=foto;
    this.stock=stock;
    this.valor=valor;   
}
}



function main(){
    
    btnLimpiarStorage=document.getElementById("limpiarStorage")


    btnLimpiarStorage.onclick = eliminarStorage;



    formularioIdentificacion = document.getElementById("formularioIdentificacion")
    inputUsuario = document.getElementById("inputUsuario")
    contenedorIdentificacion = document.getElementById("contenedorIdentificacion")
    contenedorUsuario = document.getElementById("contenedorUsuario")
    textoUsuario = document.getElementById("TextoUsuario")
    botonDePago = document.getElementById("botonDePago")


    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event)

    function identificarUsuario(event){
      event.preventDefault()
      usuario = inputUsuario.value
      formularioIdentificacion.reset()
      actualizarUsuarioStorage()
      mostrarTextoUsuario()
    }



    function eliminarStorage(){
      localStorage.clear();
      noMostrarTextoUsuario()
      carrito = []
      renderCarrito();
      calculartotal();
    }

    mostrarProductos();
    obtenerUsuarioStorage();
    obtenerProductosStorage();
    
   
   
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






//Ejemplo del profesor para mostrar producto pero ahora con boostrap card
function mostrarProductos(){
Productos.forEach((producto) => {
    let columna = document.createElement("div");
    columna.className = "col-md-4 mt-3";
    columna.nombre = `columna-${producto.nombre}`


columna.innerHTML = `

<div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3" style="width: 20rem;">
                <img class="card-img-top" src="${producto.foto}" height="380" alt="Card image cap">
                <div class="product-detail">
                    <h5 class="card-title heading text-center">${producto.nombre}</h5>
                    <span class="subheading">Stock: ${producto.stock}</span>
                    <br>
                    <span class="subheading">${producto.valor}</span>
                    <blockquote>
                   <p>${producto.descripcion}</p>
                    </blockquote>
                    <button onclick="guardarEnCarrito(${producto.id})" class="btn btn-outline-dark">Arrendar</button>
                   </div>
            </div>
        </div>


    </div>

`
    contenedorProductos3.append(columna)

    if (carrito.length != 0){
      mostrarBotonDePago();
    }
    else{
      ocultarBotonDePago();
    }



})



}


function actualizarUsuarioStorage(){
  localStorage.setItem("usuario", usuario)
}

function actualizarProductosStorage(){
  let productosJSON = JSON.stringify(carrito);
  localStorage.setItem("Productos", productosJSON);
}


function obtenerProductosStorage(){
  let productosJSON = localStorage.getItem("Productos")

  if (productosJSON) {
    Productos = JSON.parse(productosJSON)
    //alert("Hay productos en memoria, se ejecutara RendeCarrito")
    carrito = Productos
    renderCarrito();
  }
}

function mostrarTextoUsuario(){
  contenedorIdentificacion.hidden = true
  contenedorUsuario.hidden = false
  let textoUsuario = document.getElementById("textoUsuario")
  textoUsuario.innerHTML += `${usuario} `
}

function mostrarBotonDePago(){
  botonDePago.hidden = false;
}

function ocultarBotonDePago(){
  botonDePago.hidden = true;
}

function noMostrarTextoUsuario(){
  contenedorIdentificacion.hidden = false
  contenedorUsuario.hidden = true
}


function obtenerUsuarioStorage(){
  let usuarioAlmacenado = localStorage.getItem("usuario")
  if(usuarioAlmacenado){
    usuario = usuarioAlmacenado
    mostrarTextoUsuario()
  }
}


function mostrarMensajeConfirmacion(){
  Toastify({
    text: "Se agrego su producto al carrito Exitosamente",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

 //Funcion para consumir desde Api pública
 function consultarProductosServer(){
  fetch("https://633e26d1c235b0e5751fa5aa.mockapi.io/Productos")
  .then((response)=> response.json())
  .then((data)=> {
    Productos = [...data]
    mostrarProductos();
  })
  .catch((error)=> console.log(error));
 }

 //Funcion para consumir desde archivo JSON.
 function consultarProductosJSON(){
  fetch("./Productos2.JSON")
  .then((response)=> response.json())
  .then((data)=> {
    Productos = [...data]
    mostrarProductos();
  })
  .catch((error)=> console.log(error));
 }



function JSalert(){
	swal("Gracias por Preferirnos", "Usted será redirigido a la plataforma de Pago!", "success");
}




main();
consultarProductosJSON();

