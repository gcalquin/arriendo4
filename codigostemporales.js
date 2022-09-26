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