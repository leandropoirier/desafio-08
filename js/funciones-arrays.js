let op, opcion, numProducto=0, productoAEliminar, montoTotal=0, formaPago=0, formaDePago, fecha

const carrito = []


// Función para eliminar producto del carrito
function eliminarProductoCarrito(productoAEliminar){

    /*
    for (let i=0; i < carrito.length ; i++){
        if (carrito[i].nombre == productoAEliminar){
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(i, 1)
        }
    }
    */
    /*
    for (const producto of carrito){
        if(producto.nombre == productoAEliminar){
            let indice = carrito.indexOf(productoAEliminar)
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(indice, 1)
            
            break
        }   
    }
    */

    carrito.forEach((producto) => {
        if(producto.nombre == productoAEliminar){
            let indice = carrito.indexOf(productoAEliminar)
            alert(`Se eliminará el producto del carrito de compras.`)
            carrito.splice(indice, 1)
        }
    })
}

// Función para mostrar el catálogo
function mostrarCatalogo(){

    alert(`
    - Monitores \n
    ${monitorCurvoStock.nombre}   Precio: $${monitorCurvoStock.precio}\n
    ${monitor144HzStock.nombre}   Precio: $${monitor144HzStock.precio}\n
    - Perifericos \n
    ${tecladoKumaraStock.nombre}   Precio: $${tecladoKumaraStock.precio}\n
    ${tecladoLogitechStock.nombre}   Precio: $${tecladoLogitechStock.precio}\n
    - CPU \n
    ${pcGamerStock.nombre}   Precio: $${pcGamerStock.precio}\n
    ${pcEscritorioStock.nombre}   Precio: $${pcEscritorioStock.precio}\n
    -Notebooks \n
    ${notebookHpStock.nombre}   Precio: $${notebookHpStock.precio}\n
    ${notebookAcerStock.nombre}   Precio: $${notebookAcerStock.precio}\n
    `)

    alert(`
    -OFERTAS DE ÉSTE MES \n
    Llevando más de un producto -> 10% de descuento!! \n
    SALE en Monitores -> 5% de descuento en todos los productos!! \n
    SALE en Notebooks -> 10% de descuento en todos los productos \n
    `)

}

/*
// Función para crear objetos y agregar al array carrito
function crearProductos(nombre, precio){
    const nuevoProducto = new ProductoComprado(nombre,precio)
    carrito.push(nuevoProducto)
}
*/

// Función para realizar compra + agregar producto al array Carrito[] con método .push()
function comprarProducto(numProducto){

    switch(numProducto){

        case 1:

            /*
            crearProductos("heladera", heladeraStock.precio)
            */

            const MonitorLedCurvo24 = new ProductoComprado("Monitor Led Curvo 24", monitorCurvoStock.precio)
            carrito.push(MonitorLedCurvo24)
            
            MonitorLedCurvo24.ofertaPrecio(0.05)

            monitorCurvoStock.disminuirStock(1)

            alert(`Este producto tiene 5% de descuento`)

        break

        case 2:

            const Monitorled144hz = new ProductoComprado("Monitor led 24 144hz", monitor144HzStock.precio)

            Monitorled144hz.ofertaPrecio(0.05)

            monitor144HzStock.disminuirStock(1)

            carrito.push(Monitorled144hz)

            alert(`Este producto tiene 5% de descuento`)

        break

        case 3:

            const TecladoKumarak552 = new ProductoComprado("Teclado Kumara k552", tecladoKumaraStock.precio)
            TecladoKumarak552.ofertaPrecio(0.10)

            tecladoKumaraStock.disminuirStock(1)
            
            carrito.push(TecladoKumarak552)

            alert(`Este producto tiene 10% de descuento`)

        break

        case 4:

            const TecladoLogitechk835 = new ProductoComprado("Teclado Logitech k835", tecladoLogitechStock.precio)
            TecladoLogitechk835.ofertaPrecio(0.10)

            tecladoLogitechStock.disminuirStock(1)

            carrito.push(TecladoLogitechk835)

            alert(`Este producto tiene 10% de descuento`)

        break

        case 5:
            
            const PcGamer = new ProductoComprado("Pc Gamer", pcGamerStock.precio)

            pcGamerStock.disminuirStock(1)

            carrito.push(PcGamer)

        break

        case 6:
            
            const PcDeEscritorio = new ProductoComprado("Pc De Escritorio", pcEscritorioStock.precio)
            pcEscritorioStock.disminuirStock(1)

            carrito.push(PcDeEscritorio)

        break

        case 7:

            const NotebookHPG814 = new ProductoComprado("Notebook HP G8 14", notebookHpStock.precio)

            notebookHpStock.disminuirStock(1)

            carrito.push(NotebookHPG814)

        break

        case 8:

            const NotebookAcerNitro15 = new ProductoComprado("Notebook Acer Nitro 15.6", notebookAcerStock.precio)
            notebookAcerStock.disminuirStock(1)

            carrito.push(NotebookAcerNitro15)

        break
    }
}

// Funcón para validar ingreso de dato numérico entero
// Pide como parámetros el mensaje a mostrar, el número minimo válido y el número máximo válido
function validarNumero(mensaje,min,max){

    opcion = parseInt(prompt(`${mensaje}`))

    while(isNaN(opcion) || opcion<min || opcion>max){
        alert(`Dato no válido. Intente de nuevo... \n`)
        opcion = parseInt(prompt(`${mensaje}`))
    }

    return opcion
}

// Función que busca por secciones con filter() e includes()
function mostrarSeccion(){

    let seccion = prompt(`Secciones: Monitores - Perifericos - CPU - Notebooks`).toLowerCase()

    while(seccion != "Monitores" && seccion != "Perifericos" && seccion != "CPU" && seccion != "Notebooks"){
        alert(`DATO NO VÁLIDO. Ingresó una sección que NO existe ó ingresó la sección con acentos. Intente de nuevo (sin acentos por favor)`)
        seccion = prompt(`Secciones: Monitores - Perifericos - CPU - Notebooks`).toLowerCase()
    }

    const resultado = productos.filter((producto) => producto.tipo.includes(seccion))
    resultado.forEach((producto) => alert(`producto: ${producto.nombre} precio: $${producto.precio}`))
}

// Función principal para llamar a las demás funciones según la opción que eliga el usuario, se hizo con if, if else y no con swich por una cuestion de preferencia
function menu(){

    alert(`Bienvenido a la tienda de -Minimus-`)

    while(op!=7){
        
        op = validarNumero(`
        1. Ver Catálogo \n
        2. Agregar producto al carrito \n
        3. Mostrar Carrito \n
        4. Eliminar producto del carrito \n
        5. Mostrar productos por secciones \n
        6. Ir a Pagar\n
        7. Salir de la tienda \n
        Ingrese el número de la opción elegida: 
        `,1,7)
        

        if(op==1){

            mostrarCatalogo()

        } else if(op==2){

            numProducto = validarNumero(`
                1. Monitor Led Curvo 24 \n
                2. Monitor led 24 144hz \n
                3. Teclado Kumara k552 \n
                4. Teclado Logitech k835 \n
                5. Pc Gamer \n
                6. Pc De Escritorio \n
                7. Notebook HP G8 14 \n
                8. Notebook Acer Nitro 15.6 \n
                9. Volver al menu \n
            
                Ingrese el número del producto que quiere agregar al carrito: `,1,9)
            
            comprarProducto(numProducto)

        } else if(op==3){

            if(carrito.length > 0){

                // Mostramos productos que están en el carrito
                alert(` - Productos que agregó al carrito - `)

                // Aplicación del método .forEach()
                carrito.forEach(producto => {alert(`producto: ${producto.nombre} precio: $${producto.precio}`)})

            } else{alert(`No se agregaron productos al carrito`)}

        } else if(op==4){

            productoAEliminar = prompt(`Ingrese el producto que quiere eliminar del carrito: `).toLowerCase()
            eliminarProductoCarrito(productoAEliminar)

            montoTotal=0

            montoTotal = carrito.reduce((acum, producto) => acum + producto.precio, 0)

        } else if(op == 5){
            mostrarSeccion()
        } else if(op==6){

            //Método sort() para ordenar carrito de menor a mayor según el precio
            carrito.sort((a,b) => a.precio - b.precio)

            console.log(` - Ticket - \n\n`)
            fecha = new Date()
            console.log(` - Fecha: ${fecha.toLocaleDateString()} - \n\n`)
            console.log(``)
            console.log(`Los productos se mostrarán en orden de menor a mayor según el precio...\n\n`)
            console.log(``)

            montoTotal=0

            // Cálculo del monto total
            montoTotal = carrito.reduce((acum, producto) => acum + producto.precio, 0)
            montoTotal.toFixed(2)

            
            formaPago = parseInt(prompt(`
            -FORMAS DE PAGO \n
            
            1. Efectivo -> 10% de descuento.
            2. Débito -> Mismo precio.
            3. Crédito -> 10% Recargo.
            
            Ingrese el número de la opción que eligió:
            
            `))
            
            //Opciones de forma de pago
            switch(formaPago){
                
                case 1:
                    
                    formaDePago = "EFECTIVO"
                    alert(`El descuento por abonar en efectivo es $ ${(montoTotal.toFixed(2)*0.1)}`)
                    montoTotal -= (montoTotal*0.1)
                    montoTotal.toFixed(2)
                    
                    break
                    
                    case 2:
                        formaDePago = "DÉBITO"
                        break
                        
                        case 3:
                            
                            formaDePago = "CRÉDITO"
                            
                            alert(`El recargo por abonar con crédito es $ ${(montoTotal.toFixed(2)*0.1)}`)
                            montoTotal += (montoTotal*0.1)
                            montoTotal.toFixed(2)
                            break
                        }
                        
                        alert(`El monto total a pagar, con descuentos incluidos es: $ ${montoTotal}\n - El ticket se mostrará por consola - ¡Gracias por su compra!`)

                        // Impresión del ticket por consola
                        
                        carrito.forEach((producto) => console.log(`\t\t${producto.nombre} precio: $ ${producto.precio}\n\n`))
                        
                        if(formaDePago == "EFECTIVO"){
                            console.log(``)
                            console.log(`Abona en efectivo. Tiene 10% de descuento\n\n`)
                        } else if(formaDePago == "DÉBITO"){
                            console.log(``)
                            console.log(`Abona con DÉBITO. El precio final queda igual\n\n`)
                        } else{
                            console.log(``)
                            console.log(`Abona con CRÉDITO. Tiene 10% de recargo\n\n`)
                        }
                        
                        // llevando más de un producto se aplica 10% de descuento
                        if (carrito.length >= 2){
                            montoTotal -= (montoTotal*0.1)
                            montoTotal.toFixed(2)
                            
                            console.log(``)
                            console.log(`Tiene 10% de descuento en el monto total de la compra por llevar más de 1 de nuestros productos!\n\n`)
                            console.log(``)
                        }

                        console.log(``)
                        console.log(`El precio final a abonar es: $ ${montoTotal.toFixed(2)}\n`)
                        console.log(``)
                        console.log(`Gracias por su compra. ¡Vuelva pronto!`)
                        
                        op = 7 //Cortamos el ciclo while
                        
                    } else if (op == 7){
                        alert(` -El ticket se mostrará por consola-\nHasta luego!`)
        }

    }
}