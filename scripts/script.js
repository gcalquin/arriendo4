let opcion = 0;

const listaProductos = [];

const contenedorProductos2 = document.getElementById("contenedor-productos2")

const contenedorProductos3 = document.getElementById("contenedor-productos3")

let btnLimpiarStorage;






function guardarEnCarrito(productoId){
  
  let item = Productos.find((producto)=> producto.id === productoId)



    carrito.push(item)
    mostrarMensajeConfirmacion();

  
  
  console.log("ahora queda en productos"+ Productos[item.id].stock)
  console.log(Productos)
  
  console.log(carrito)
  actualizarProductosStorage();
  renderCarrito();
  //mostrarProductos();

};

const ContenedorCarrito = document.querySelector('#contenedor')

const renderCarrito = () => {
  ContenedorCarrito.innerHTML = " "
  carrito.forEach((item) => {
    let div = document.createElement('div')
    div.innerHTML = `
    <p>Producto: ${item.nombre}, Valor: ${item.valor}, Id: ${item.id}</p>  
    <button onclick="eliminarItem(${item.id})">Eliminar del carrito</button> 
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
  actualizarProductosStorage();
  

}

const divPrecio = document.querySelector("#precioTotal")
calculartotal = () => {
  let cont = 0
  carrito.forEach((item) => {
    cont += item.valor
  })

divPrecio.innerHTML = cont

}


let usuario

let formularioIdentificacion
let contenedorIdentificacion
let contenedorUsuario
let textoUsuario



let Productos = [
    {
      "id": 1,
      "nombre": "Silla Simple",
      "categoria": "Sillas",
      "descripcion": "Silla de plastico",
      "foto": "https://sodimac.scene7.com/is/image/SodimacCL/2910144_01",
      "stock": 100,
      "valor": 5000
    },
    {
        "id": 2,
        "nombre": "Silla con funda",
        "categoria": "Sillas",
        "descripcion": "Silla de madera con funda color a elección",
        "foto": "https://dojiw2m9tvv09.cloudfront.net/33039/product/0157-11288.jpg",
        "stock": 75,
        "valor": 7500
    },
    {
      "id": 3,
        "nombre": "Sofa un cuerpo",
        "categoria": "Sofas",
        "descripcion": "Sofa de ratán Largo:80cm Ancho:80cm",
        "foto": "https://falabella.scene7.com/is/image/Falabella/14519803_1?wid=800&hei=800&qlt=70",
        "stock": 20,
        "valor": 10000
    },

    {
      "id": 4,
        "nombre": "Sofa dos cuerpos",
        "categoria": "Sofas",
        "descripcion": "Sofa de ratán Largo:120cm Ancho:80cm",
        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug9vkGvZZYmQrTwGzm_RdU2_D-ooy0u1DIWAAJsVFi2wD16AQ1bGPVMJKyVEa6FSmzgY&usqp=CAU",
        "stock": 20,
        "valor": 10000
    },

    {
      "id": 5,
        "nombre": "Sofa tres cuerpos",
        "categoria": "Sofas",
        "descripcion": "Sofa de ratán Largo:180cm Ancho:80cm",
        "foto": "data:image/jpeg;base64,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",
        "stock": 20,
        "valor": 30000
    }, 

    {
      "id": 6,
        "nombre": "Sofa Tipo L",
        "categoria": "Sofas",
        "descripcion": "Sofa Tipo L Largo:120cm Ancho:80cm",
        "foto": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHEBURExMVExATEBUWFhcXERcVFhISFRUWFxUSFxUYHSogGBolGxUVITEhJykrLi4uFx8zODksNygtLisBCgoKDg0OFRAQGCsZFR0rKystLS0tLS0tNy0rNy0rKzctLS0rLS0rKysrNy0rKy03LTc3Kys3LSsrKysrLSsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABHEAACAQICBAkIBQsDBQAAAAAAAQIDEQQFBhIhMQcTQVFhcYGRoRQiMkJSscHRIzOCkqIVQ1NicoPCw9Lh8ERjsggkk6Oz/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAARARITAjH/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1WxMKHpzjHrkl7wLoNdUzuhDdJy/Zi342t4mLU0g9mk3+1JR92sS4RuwcrUz6vOTSVOC2bk5Oz6XZcj5DErY+rV31Zvqep/wALE6WOylVjDe0utpBVov1l3oi7NcPCKi1GK2tPYtt9t3z7n3mCox5l3E7WJiTuCIFqrkRchPV3Nrqkx2cpbBFUMXOO6c1+8l8y9DMay3Van/ll8yehyk8EZ1s6xFCN1VnfWitsm98lff0GQs5xE/zs/vW9w9MOUiAj6OcYhfnZ95djnWI/Sy7o/IemHLvAcKs+xH6V/dh8iv8AL+JXr/gj8h6Yc67cHFrSHEL1ov7CKlpJiF7D+w/mX0w512QOSWkta26n91/1HsdJ63sQ/EviO8OddYDRZfpA8VNQdO1+VS3djRvTWbm/ibkAAVAwczzehlavVmot7o75S6oraZxG/Clg3h6tLEL0Zri5dE43ce9a33SauOnqaRzn6FF255zS/Cr+8x6mbYip60Yfsw+MrmnyrF+V0oSv6u3rRkSkS6rIqVp1fSqVJdGu0vuxsizGMYbkl2FtyPNYguuoUOdyk8bApnvv0W+XxKZyLWKxtPD21pxi29l5JX6uw11XNuM+ri5dL82Pe9r7EyC/mfnU30NPua/uapSK8RVqYhWlLVT5Ir+J/JGL5Pb15fh+RFZKkVJmJxM+Sa7YX9zRWoVFyxfevmQZakVJmIlVXqx7Jv4xRVGdReo++PzJFZGMd4pf7kfDb8C9B2NfWrSlq3hPZO7tG9lqvm6bF7ypLkkuuEl70SDOUitSNesZT9pd5kQxEZ7mn2iDJTK4u5jOr7iuNa3+dH9yRWQykt8b8D1TuUXFKxVGVy1xh5rOW5EV0ORUvpE3uOu3kXQzWeD15KV3DzaceR1pvUguna/BknUocVFR5kl3Kx2+Pxz+lYANshA/DPneNo5msHx1sLUp0p04akbKUtaLk3a7etF8uy5PBCP/AFFZe1UweJjvtUp3/WjKE6a8Z9wGj0cxmZZZK0YxrQ3uOsuTmvax1MdKa0Ferga8VzwSq+FPWNBlOLr4GUZyo3uvOjrJ71tSfKbuOZVq3owjTX60tZrsXzMqvw00wbaU5ypN8lSDg+57TOjn+FmrqtB9u3u3mqnSeIX0s5TXs7Ix7lt8TmdLcJRwPFVKVOFN60k3GKWtsUo3tv8ARfeMHczzSdT6um+ufmLu3+Bi1VVr+nVaXs01q/ifnd1gq/G7Vyq/eXqeGnV3IisWGEpU3dQTfO1rSfW3tK2tbkXcbGGXqG2cuxFar08Psil18ohWFSy2VXa1Zc72HmOwkMLG+s27pdG0s5zpJRy+OtUqKK5Nu19CS2vsOZzHM8Zms8PSpUXRp4qsoUqleMoRqSvH0Uk2o+dHzrPfuESugU485XGafKYGJ0UzvBf6anWXPRxMPdU1WafFYjH5c/pcBi4LlaoynH70U14iLXVKS50XIq5w0dMKMXqzcoSvulFpmzw+kFKt6NSL+0r9xIV1CLiZoaOaKXKZEMw27+UkWtvc8lRhPfCL64pmvWPui7HGp94gyfI6XsRXUre48eBpvkkv3k18SjypFcMUmIV48CuSc19pP3plHkUluqS7VF+5IvRrqXKXoVY7yRaxFhqy9eL64P8AqGJlWw1Kc7R82EpXTatZO2yxsOMSMLSfEqngaz3N6sF0uUldfd1n2F5K5vRSc8yxuFoyk5R8oVS2z82ta75/Rl3k9EM8EuXvEY5VnbVpYeTXPrTdl4Sl4EzG/nGPoABpAjjh8y/yzKHUW+hiKdTslek+z6W/YSOaTTbL/wAq5biqC2ueGqKP7ai3H8SQEL5NnEMVSg1JNuEbrWTtKyumuR3NrGrGXMa7g24OcBpplsa8p1qWKhVqU5ypzTTaalG8JJ282cd1jNx3A9meX7cLjoVUt0ailTfV66fegtZClHnff8zQaaq+HTvfVqxfepR+Ji4/L89yS/H4Kc4r1qcXUXW5UnKy60jn8x0oWYUpUZQlGbattTScZJ2fKtwiJZ0brUpYSjUteUqUG7+1qq/ii9jM4jTW9f4iOskzyo6FLDUqdStXs1qU4OT9N2bst1mjscn4Mswzq08bW8kpv81SanVa5nLbGPj1EGtzPSyFOWom5TbsoRWtJtvYrIz8m0SzbSK0p2wNB8tRa1aS2bqfq8vpWJN0b0PwOjS/7ejGM7baj86pLnvN7V1KyN8IOS0c4PMBkbVTUdfEfpaz4yV+eKeyPYr9JpeF76GtlVX2c1pR+9KLfhFkjnHcJmjtfSKlhY0FFzo5hRrS1paqVOMZqUumzlHYUdiAAMfFYGljFapThUX68Iy96Ocx/BtlGP8ASwVKPTT1qL/9bR1YAjbF8C+Xz20q2KodEKylH8cW/E1GJ4H8XQ+ozK/RVo/xKT9xMAJBBWJ0Cz7BeisPiEvZqasn2TUEu819bCZvl/1uXV/3ceN/+WsfQoExa+cHpHLC7K1GtRf69Jx8HZl6hpTh5+vyey/kfREoqWxq6NXjdG8Dj/rcLQnf2qEG++xOSoYw2dUqm6pF7PaRn0ccnuZ3uM4Mcpxf+lUH/t1KkPCMreBqMRwOYJu9KviaXQpwlHxhfxJytaajitbZfkMHTvE8XgqcOWeI1utQg0/GaNtV4JMRR20cwfVOk/epv3HG6WZHi8vxVDBYitCrOerxbjdqKrVOL2ppbW4+Ai1InA9htSFefsulT+2oa8/CpTX2SRjT6L6Pw0boujCcqmtVnUlKdtZym7u+qkuRLsNwbYAAAPGrnoAjLgZyLFaOzx9CrRnTw3lb4iUtnGKLnCUop7XFxjTadrMk0AAc/plo/h86wldTo051Xh6qhN04udOepLVnGTV007M6A8a1tgEZ8ANSFXLZ2jFTjipxlKy1pJwp1I3e9212l1EmkScAk/JnmGE/QYmP8yn/ACkS2AAAAAAAAAAAAAAAAAAAAAACHs7X5V0so096o8Vfo4unKv8A8pImE5PAaEU8HmlTM+OnKdRTvTcY6sXJQimpLbsjG3aB1gAAAAAAAAAAAAC3Rw8KGtqxjHWlrStFLWk98nbe9i2lwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=",
        "stock": 20,
        "valor": 40000
    }

    
];

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


    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event)

    function identificarUsuario(event){
      event.preventDefault()
      usuario = inputUsuario.value
      formularioIdentificacion.reset()
      actualizarUsuarioStorage()
      mostrarTextoUsuario()
    }

    function mostrarTextoUsuario(){
      contenedorIdentificacion.hidden = true
      contenedorUsuario.hidden = false
      textoUsuario.innerHTML += `${usuario}`
    }

    function eliminarStorage(){
      localStorage.clear();
      carrito = []
      renderCarrito();
      calculartotal();
    }

    mostrarProductos();
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
    //columna.id = "columna" + producto.id;
    columna.nombre = `columna-${producto.nombre}`
    //columna.innerHTML = `
    //<div class="card" style="width: 18rem;">
    //<img class="card-img-top" src="${producto.foto}" alt="Card image cap">
    //<div class="card-body">
    //  <h5 class="card-title">${producto.nombre}</h5>
    //  <p class="card-text">ID: ${producto.id}</p>
    //  <p class="card-text">Categoria: ${producto.categoria}</p>
    //  <p class="card-text">Stock: ${producto.stock}</p>
    //  <p class="card-text">Valor: ${producto.valor}</p>
    //  <button onclick="guardarEnCarrito(${producto.id})" class="btn btn-primary">Añadir</button>
//
//    </div>
//  </div>
//    `


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


    //function guardarEnCarrito(productoId){
    //  alert("toy")
    //  let item = Productos.find((producto)=> producto.id === productoId)
    //  console.log("Antes")
    //  console.log(carrito)
    //  carrito.push(item)
    //  console.log("Despues del push")
    //  console.log(carrito)
    //  actualizarProductosStorage();
    
    //  };





})



}


function actualizarUsuarioStorage(){
  localStorage.setItem("usuario", usuario)
}

function actualizarProductosStorage(){
  let productosJSON = JSON.stringify(Productos);
  localStorage.setItem("Productos", productosJSON);
}


function obtenerProductosStorage(){
  let productosJSON = localStorage.getItem("Productos")

  if (productosJSON) {
    Productos = JSON.parse(productosJSON)
    alert("Hay productos en memoria, se ejecutara RendeCarrito")
    renderCarrito();
  }
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

main();
