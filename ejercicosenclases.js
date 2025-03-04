// Ej1 Dado el siguiente array de objetos que representan estudiantes:

// Usa map para crear un nuevo array donde cada estudiante tenga su promedio de calificaciones agregado al objeto (promedio).
// Usa filter para obtener solo los estudiantes con un promedio mayor o igual a 80.
// Usa reduce para calcular el promedio total de todas las calificaciones de todos los estudiantes.

const estudiantes = [
    { nombre: "Juan", edad: 20, calificaciones: [80, 90, 70] },
    { nombre: "María", edad: 22, calificaciones: [95, 85, 88] },
    { nombre: "Carlos", edad: 19, calificaciones: [60, 75, 70] },
    { nombre: "Ana", edad: 21, calificaciones: [90, 92, 85] }
];
const estudiantesConPromedio = estudiantes.map(estudiante => {
    const sumaCalificaciones = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
    const promedio = sumaCalificaciones / estudiante.calificaciones.length;
    return { ...estudiante, promedio };
});

//console.log(estudiantesConPromedio);


const estudiantesDestacados = estudiantesConPromedio.filter(estudiante => estudiante.promedio >= 80);

//console.log(estudiantesDestacados);


const promedioTotal = estudiantesConPromedio.reduce((acc, estudiante) => acc + estudiante.promedio, 0) / estudiantesConPromedio.length;
//console.log(promedioTotal);


// Ej2 Supongamos que tenemos una tienda con una lista de productos y un carrito de compras.

// Usa find para buscar el producto con id 3 (Mouse) y agrégalo al carrito.
// Agrega al carrito el producto con id 1 (Laptop) sin repetir productos.
// Crea un Map llamado preciosCarrito donde la clave sea el nombre del producto y el valor su precio.
// Usa reduce para calcular el precio total del carrito.

const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Teclado", precio: 50 },
    { id: 3, nombre: "Mouse", precio: 30 },
    { id: 4, nombre: "Monitor", precio: 300 }
];

let carrito = new Set();

const Laptop = productos.find(producto => producto.id === 1);
carrito.add(Laptop);

const Mouse = productos.find(producto => producto.id === 3);
carrito.add(Mouse);


//console.log(carrito);

const preciosCarrito = Array.from(carrito).map(producto => [producto.nombre, producto.precio]);

//console.log(preciosCarrito);

const precioTotal = preciosCarrito.reduce((acc, [nombre, precio]) => acc + precio, 0);

//console.log(precioTotal);


// Ej3 Dado el siguiente array de pedidos en una tienda:
// Usa forEach para imprimir cada pedido en formato:
// "Pedido #1 - Cliente: Juan - Total: $1030"
// Usa map para obtener un array solo con los nombres de los clientes.
// Usa some para verificar si hay algún pedido con un total mayor a $1000.
// Usa filter para obtener solo los pedidos que contengan "Laptop" en su lista de productos.


const pedidos = [
    { id: 1, cliente: "Juan", productos: ["Laptop", "Mouse"], total: 1030 },
    { id: 2, cliente: "María", productos: ["Monitor"], total: 300 },
    { id: 3, cliente: "Carlos", productos: ["Teclado", "Mouse"], total: 80 },
    { id: 4, cliente: "Ana", productos: ["Laptop", "Monitor", "Teclado"], total: 1350 }
];

pedidos.forEach((pedido, index) => {
    //console.log(`Pedido #${index + 1} - Cliente: ${pedido.cliente} - Total: $${pedido.total}`);
});

const clientes = pedidos.map(pedido => pedido.cliente);

//console.log(clientes);

const hayPedidoGrande = pedidos.some(pedido => pedido.total > 1000);

//console.log(hayPedidoGrande);

const pedidosConLaptop = pedidos.filter(pedido => pedido.productos.includes("Laptop"));

console.log(pedidosConLaptop);


// Ej5 Análisis de Transacciones Bancarias (Desestructuración, map, filter, reduce, find)

// Usa map para convertir los montos en dólares a euros (1 dólar = 0.85 euros).
// Usa filter para obtener solo las transacciones de tipo "gasto".
// Usa reduce para calcular el saldo final de cada usuario sumando ingresos y restando gastos.
// Usa find para encontrar la primera transacción de "Juan".

const transacciones = [
    { id: 1, usuario: "Juan", tipo: "ingreso", monto: 1000 },
    { id: 2, usuario: "María", tipo: "gasto", monto: 200 },
    { id: 3, usuario: "Carlos", tipo: "ingreso", monto: 500 },
    { id: 4, usuario: "Ana", tipo: "gasto", monto: 100 },
    { id: 5, usuario: "Juan", tipo: "gasto", monto: 300 }
];

const transaccionesEnDolares = transacciones.map(transaccion => ({...transaccion, monto: transaccion.monto * 0.85 }));
















