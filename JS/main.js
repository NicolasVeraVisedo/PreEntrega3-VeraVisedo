// Selecciono los elementos del DOM necesarios
const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".servicio-agregar");
const numerito = document.querySelector("#numerito");
const mensajeAgregarCarrito = document.querySelector("#mensaje-carrito");
const msjsinServicios = document.querySelector("#msjsinServicios");

// Defino un array de servicios con sus detalles
const servicios = [
  {
    id: "4 noches-internacion",
    titulo: "4 noches / Habitación compartida",
    imagen: "./img/internacion/img1.jpg",
    descripcion:
      "Servicio de Internacion para 4 noches con habitación compartida",
    categoria: {
      nombre: "Internación",
      id: "intern",
    },
    precio: 500,
  },
  {
    id: "5 noches-internacion",
    titulo: "5 noches / Habitación compartida",
    imagen: "./img/internacion/img2.jpg",
    descripcion:
      "Servicio de Internacion para 5 noches con habitación compartida",
    categoria: {
      nombre: "Internación",
      id: "intern",
    },
    precio: 600,
  },
  {
    id: "6 noches-internacion",
    titulo: "6 noches / Habitación privada",
    imagen: "./img/internacion/img3.jpg",
    descripcion: "Servicio de Internacion para 6 noches con habitación privada",
    categoria: {
      nombre: "Internación",
      id: "intern",
    },
    precio: 1000,
  },
  {
    id: "7 noches-internacion",
    titulo: "7 noches / Habitación privada",
    imagen: "./img/internacion/img4.jpg",
    descripcion: "Servicio de Internacion para 7 noches con habitación privada",
    categoria: {
      nombre: "Internación",
      id: "intern",
    },
    precio: 1200,
  },
  {
    id: "8 noches-internacion",
    titulo: "8 noches / Habitación privada",
    imagen: "./img/internacion/img5.jpg",
    descripcion: "Servicio de Internacion para 8 noches con habitación privada",
    categoria: {
      nombre: "Internación",
      id: "intern",
    },
    precio: 1400,
  },
  {
    id: "5 dias cuidados-medicos",
    titulo: "5 dias / Enfermera María Suarez",
    imagen: "./img/cuidadosmedicos/img1.webp",
    descripcion:
      "Servicio de cuidados médicos para 5 días con el cuidado de la Enfermera María Suarez",
    categoria: {
      nombre: "Cuidados médicos",
      id: "cuidmed",
    },
    precio: 650,
  },
  {
    id: "6 dias cuidados-medicos",
    titulo: "6 dias / Enfermera María Suarez",
    imagen: "./img/cuidadosmedicos/img1.webp",
    descripcion:
      "Servicio de cuidados médicos para 6 días con el cuidado de la Enfermera María Suarez",
    categoria: {
      nombre: "Cuidados médicos",
      id: "cuidmed",
    },
    precio: 725,
  },
  {
    id: "7 dias cuidados-medicos",
    titulo: "7 dias / Enfermero Roberto Pérez",
    imagen: "./img/cuidadosmedicos/img2.jpg",
    descripcion:
      "Servicio de cuidados médicos para 7 días con el cuidado del Enfermero Roberto Pérez",
    categoria: {
      nombre: "Cuidados médicos",
      id: "cuidmed",
    },
    precio: 875,
  },
  {
    id: "8 dias cuidados-medicos",
    titulo: "8 dias / Enf. Carla Vega, Enf. Mario Lugano, Enf. Luciana Bustos",
    imagen: "./img/cuidadosmedicos/img3.jpg",
    descripcion:
      "Servicio de cuidados médicos para 8 días con el cuidado de los Enfermeros Carla Vega, Mario Lugano y Luciana Bustos",
    categoria: {
      nombre: "Cuidados médicos",
      id: "cuidmed",
    },
    precio: 1100,
  },
  {
    id: "coche-exclusivo-1",
    titulo: "Coche Exclusivo 1",
    imagen: "./img/transporte/img1.jpg",
    descripcion:
      "Servicio de transporte Coche Exclusivo 1 para traslado al hospital",
    categoria: {
      nombre: "Transporte",
      id: "transp",
    },
    precio: 1500,
  },
  {
    id: "coche-exclusivo-2",
    titulo: "Coche Exclusivo 2",
    imagen: "./img/transporte/img2.jpg",
    descripcion:
      "Servicio de transporte Coche Exclusivo 2 para traslado al hospital",
    categoria: {
      nombre: "Transporte",
      id: "transp",
    },
    precio: 1850,
  },
  {
    id: "transporte-ambulancia",
    titulo: "Ambulancia",
    imagen: "./img/transporte/img3.webp",
    descripcion: "Servicio de transporte Ambulancia para traslado al hospital",
    categoria: {
      nombre: "Transporte",
      id: "transp",
    },
    precio: 900,
  },
  {
    id: "transporte-publico",
    titulo: "Transporte Publico",
    imagen: "./img/transporte/img4.jpg",
    descripcion: "Servicio de transporte Público para traslado al hospital",
    categoria: {
      nombre: "Transporte",
      id: "transp",
    },
    precio: 400,
  },
];

// Función para cargar los servicios en el contenedor del DOM
function cargarServicios(serviciosElegidos) {
  if (serviciosElegidos && serviciosElegidos.length > 0) {
    // Verifica si el array está vacío o tiene servicios
    contenedorServicios.innerHTML = ""; // Vacía el contenedor de servicios
    let html;
    for (const el of serviciosElegidos) {
      // Recorre los servicios y crea una tarjeta para cada uno
      const { imagen, titulo, descripcion, precio, id } = el;

      html = `<div class="card">
                  <img class="servicio-imagen" src="${imagen}" alt="${titulo}">
                  <div class="servicio-detalle">
                      <h3 class="servicio-titulo">${titulo}</h3>
                      <p class="servicio-descripcion">${descripcion}</p>
                      <p class="servicio-precio">$${precio}</p>
                      <button class="servicio-agregar" id="${id}">Agregar</button>
                   </div>
                </div>`;
      //se la agrego al contenedor
      contenedorServicios.innerHTML += html;
    }
  } else {
    msjsinServicios.innerHTML = "No se encontraron servicios disponibles.";
    msjsinServicios.classList.remove("disable");
  }
  actualizarBotonesAgregar(); // Actualiza los botones de agregar al carrito
}

// Función para manejar los eventos de clic en los botones de categorías
//Crea todas las tarjetas, luego al hacer click sobre cada servicio en el assets, los filtra segun su categoria y sino si vuelvo a todos, vuelve a generarlo al hacer click
botonesCategorias.forEach((boton) => {
  cargarServicios(servicios);
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      // Filtra los servicios según la categoría seleccionada o muestra todos
      const servicioCategoria = servicios.find(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = servicioCategoria.categoria.nombre;

      const serviciosBoton = servicios.filter(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );
      cargarServicios(serviciosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los Servicios";
      cargarServicios(servicios);
    }
  });
});

// Función para actualizar los botones de agregar al carrito
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".servicio-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let serviciosEnCarrito;
let serviciosEnCarritoLS = localStorage.getItem("servicios-en-carrito");

if (serviciosEnCarritoLS) {
  serviciosEnCarrito = JSON.parse(serviciosEnCarritoLS);
  actualizarNumerito();
} else {
  serviciosEnCarrito = [];
}

// Función para agregar un servicio al carrito al hacer clic en el botón correspondiente
function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const servicioAgregado = servicios.find(
    (servicio) => servicio.id === idBoton
  );

  // Verificar si el servicio ya está en el carrito
  const categoria = servicioAgregado.categoria.id;
  if (
    serviciosEnCarrito.some((servicio) => servicio.categoria.id === categoria)
  ) {
    // Si el servicio ya está en el carrito, muestra un mensaje indicando que ya está agregado
    mensajeAgregarCarrito.innerHTML = `Ya tienes un servicio de "${servicioAgregado.categoria.nombre}" en el carrito. Si necesitas cambiar, elimina del carrito y vuelve a agregar el servicio deseado`;
    mensajeAgregarCarrito.classList.remove("disable");
    setTimeout(() => {
      mensajeAgregarCarrito.classList.add("disable");
    }, 5000);
  } else {
    // Si el servicio no está en el carrito, lo agrega y muestra un mensaje de éxito
    mensajeAgregarCarrito.innerHTML = `Servicio agregado al carrito con éxito.`;
    mensajeAgregarCarrito.classList.remove("disable");
    setTimeout(() => {
      mensajeAgregarCarrito.classList.add("disable");
    }, 5000);

    // Añadir el servicio al carrito
    servicioAgregado.cantidad = 1;
    serviciosEnCarrito.push(servicioAgregado);
    actualizarNumerito();
    // Guarda los servicios en el carrito en el local storage
    localStorage.setItem(
      "servicios-en-carrito",
      JSON.stringify(serviciosEnCarrito)
    );
  }

  // Si el servicio ya está en el carrito, incrementa su cantidad; de lo contrario, lo añade con cantidad 1
  /* if (serviciosEnCarrito.some((servicio) => servicio.id === idBoton)) {
    const index = serviciosEnCarrito.findIndex(
      (servicio) => servicio.id === idBoton
    );
    serviciosEnCarrito[index].cantidad++;
  } else {
    servicioAgregado.cantidad = 1;
    serviciosEnCarrito.push(servicioAgregado);
  }
  actualizarNumerito();  */ // Actualiza el contador del carrito

  // Guarda los servicios en el carrito en el local storage
  /*   localStorage.setItem(
    "servicios-en-carrito",
    JSON.stringify(serviciosEnCarrito)
  ); */
}

// Función para actualizar el contador del carrito
function actualizarNumerito() {
  // Calcula la cantidad total de servicios en el carrito
  let nuevoNumerito = serviciosEnCarrito.reduce(
    (acc, servicio) => acc + servicio.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito; // Actualiza el texto del contador en el DOM
}
