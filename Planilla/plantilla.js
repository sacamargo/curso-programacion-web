const datosproductos = [{
        nombre: "Nike Dunk Low Retro",
        descripcion: "La silueta Nike Dunk Low Retro White Black (GS) viene en una combinación de colores blanco y negro y está hecha de materiales de cuero de primera calidad. una suela exterior negra completa el estilo de este zapato Dunk Low Retro.",
        precio: "100 USD",
        cantidad: 1,
        foto: "https://images.stockx.com/360/Nike-Dunk-Low-Retro-White-Black-GS/Images/Nike-Dunk-Low-Retro-White-Black-GS/Lv2/img36.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635187072&h=384&q=57",
    },
    {
        nombre: "Jordan Monogram Duffle Bag",
        descripcion: "La bolsa Jordan Monogram Duffle está hecha de tela jacquard. Su espacioso interior tiene mucho espacio para almacenar su equipo. Tiene una correa larga para la hebilla que se puede usar para transportarla como una bolsa para los hombros.​",
        precio: "$176 USD",
        cantidad: 1,
        foto: "https://images.stockx.com/images/Jordan-Monogram-Duffle-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1677160686&q=57",
    },
    {
        nombre: "Swatch x Omega Bioceramic Moonswatch Mission To Moonshine Gold Pink",
        descripcion: "Swatch y Omega han lanzado una nueva versión de su Moonshine Gold Moonswatch como parte de su MoonSwatches biocerámicos colección. Lo último conserva casi todos los detalles del original — siguiendo los pasos del modelo Mission to the Moon — esta vez, con una actualización bastante rosa.",
        precio: "$491 USD",
        cantidad: 1,
        foto: "https://images.stockx.com/images/Swatch-x-Omega-Bioceramic-Moonswatch-Mission-To-Moonshine-Gold-Pink-SO33M102-105-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1683574331&q=57",
    },
    {
        nombre: "Supreme Mesh Mini Duffle Bag",
        descripcion: "Malla de ojales de poli. Compartimento principal con cremallera con encuadernación con logo impreso. Correa ajustable para el hombro y asas de cincha en la parte superior. Etiqueta de logotipo tejida en la parte delantera. 3L.",
        precio: "$78 USD",
        cantidad: 1,
        foto: "https://images.stockx.com/images/Supreme-Mesh-Mini-Duffle-Bag-Black.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1685031107&q=57",
    },
];
// const f1 = "";
// const p1 = document.getElementById("app").innerHTML = `esto es un texto y una operacion ${3 + 5}`;
function plantilla(datosproductos) {
    return `<div class="ficha-producto">
    <img class="foto" src=${datosproductos.foto}><div><h2 class="nombre">${datosproductos.nombre}</h2><p class="precio">Precio: ${datosproductos.precio}</p>
    <p class="cantidad">Cantidad: ${datosproductos.cantidad}</p><p class="descripcion">${datosproductos.descripcion}</p>
    <button class="btn">Comprar</button>
    </div></div>`;
}
const p1 = (document.getElementById(
    "app"
).innerHTML = `<h1>StockX - (${
  datosproductos.length
}) </h1> ${datosproductos.map(plantilla).join("")} <p class="precio">Son ${
  datosproductos.length
}
    productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`); 