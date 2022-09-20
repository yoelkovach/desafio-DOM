class procesadores{
    constructor(modelo,core, ghz, precio, imagen){
    this.modelo = modelo
    this.core = core,
    this.ghz = ghz,
    this.precio = precio,
    this.imagen = imagen   
    }
    mostrarData (){
        console.log(`el procesador ${this.modelo} esta compuesto por ${this.core} nucleos e logra llegar a una velocidad media de ${this.ghz} y costa unos ${this.precio}`)
    }
}

const procesador1 = new procesadores("ryzen 3350",4, "3.6 GHz","150€", "ryzen-3.jpg")
const procesador2 = new procesadores("ryzen 5500",6, "4.0 GHZ","200€", "ryzen-5.jpg")
const procesador3 = new procesadores("ryzen 5700g",8, "4,2 GHz","300€", "ryzen-7.jpg")
const procesador4 = new procesadores("ryzen 5900x",16, "4,4","400€","ryzen-9.jpg")

const tienda = []
tienda.push(procesador1, procesador2, procesador3, procesador4)

procesador1.mostrarData()

let divProductos = document.getElementById("productos")
function mostrarCatalogo(array){
    
    divProductos.innerHTML = ""
    array.forEach((procesador)=>{
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML = `<div id="${procesador.modelo}" class="card" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="${procesador.imagen}" alt="${procesador.modelo}">
                                    <div class="card-body">
                                        <h4 class="card-title">${procesador.modelo}</h4>
                                        <p>core: ${procesador.core}</p>
                                        <p>core: ${procesador.ghz}</p>
                                        <p class="">Precio: ${procesador.precio}</p>
                                        <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                    </div></div>`
        divProductos.append(nuevoProducto)
    })





    let btnCompra = document.getElementsByClassName("btnComprar")
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("El producto ha sido comprado")
    })
}
}














let btnMostrarCatalogo = document.getElementById("verCatalogo")
btnMostrarCatalogo.addEventListener("click", ()=>{
    mostrarCatalogo(tienda)
})




