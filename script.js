//Productos-objetos

//Monitores
const monitorCurvoStock = new Producto("Monitor Led Curvo 24", 50700, 50, "Monitores");
const monitor144HzStock = new Producto("Monitor led 24 144hz", 65953, 25, "Monitores");

//Perifericos
const tecladoKumaraStock = new Producto("Teclado Kumara k552", 6610, 30, "Perifericos");
const tecladoLogitechStock = new Producto("Teclado Logitech k835", 7391, 22, "Perifericos");

//CPU
const pcGamerStock = new Producto("Pc Gamer", 72516, 17, "PC");
const pcEscritorioStock = new Producto("Pc De Escritorio", 22399, 22, "PC");

//Notebooks
const notebookHpStock = new Producto("Notebook HP G8 14", 89000, 25, "Notebooks");
const notebookAcerStock = new Producto("Notebook Acer Nitro 15.6", 228000, 40, "Notebooks");


const productos = [monitorCurvoStock, monitor144HzStock, tecladoKumaraStock, tecladoLogitechStock, pcGamerStock, pcEscritorioStock, notebookHpStock, notebookAcerStock]
menu()

const carritoNombres = []
const carritoPrecios = []

for(const productos of carrito){
    carritoNombres.push(productos.nombre)
    carritoPrecios.push(productos.precio)
}

let texto = (` - Carrito de compras - \n`)
document.write(`${texto}\n\n`)

carritoNombres.join("-")
carritoPrecios.join("-")

document.write(`Productos comprados: ${carritoNombres}`)
document.write(` Precios: ${carritoPrecios}`)




//                                desafio complementario 
//creamos un elemento llamado h1

let h1 = document.createElement("h1");

h1.innerHTML = "<h1>¡Bienvenidos a Minimus!</h1>";
document.body.append(h1);

class Componente {
    constructor(id, nombre, marca, precio,stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const Componente1 = new Componente(1, "Monitor Led Curvo 24", "Monitores", 50700, 50)

const Componente2 = new Componente(2, "Monitor led 24 144hz","Monitores", 65953, 25)

const Componente3 = new Componente(3, "Teclado Kumara k552","Perifericos",6610, 30)

const Componente4 = new Componente(4, "Notebook HP G8 14","Notebooks",89000, 25)

const Componente5 = new Componente(5, "Pc Gamer","PC",72516, 17)

const componentes = [Componente1, Componente2, Componente3, Componente4, Componente5]

const divComponentes = document.getElementById('componentes')

componentes.forEach(componentesArray => {
    divComponentes.innerHTML += `
        <div class="cardComponentes" id="componente${componentesArray.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${componentesArray.nombre}</h5>
                <p class="card-text">Marca: ${componentesArray.marca}</p>
                <p class="card-text">Precio: $${componentesArray.precio}</p>
                <p class="card-text">Stock: ${componentesArray.stock}</p>
        </div>
        </div>
    
    `
})