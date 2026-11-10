// ======================================================
// BIBLIOTECH ESCOLAR - SISTEMA DE BIBLIOTECA DIGITAL
// JAVASCRIPT CORREGIDO
// ======================================================


// 1. BASE DE DATOS DE LIBROS

const libros = [
    { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "Literatura", emoji: "🌹", color: "linear-gradient(135deg,#f9d976,#f39f86)", disponible: true, lecturas: 95, descripcion: "Una historia sobre la amistad, el amor y el verdadero significado de la vida." },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", categoria: "Literatura", emoji: "⚔️", color: "linear-gradient(135deg,#b7c9e8,#687da8)", disponible: true, lecturas: 88, descripcion: "Una de las obras más importantes de la literatura española." },
    { id: 3, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", categoria: "Literatura", emoji: "🌳", color: "linear-gradient(135deg,#b9e6c9,#4d967c)", disponible: false, lecturas: 80, descripcion: "Una novela que narra la historia de varias generaciones de la familia Buendía." },
    { id: 4, titulo: "El origen de las especies", autor: "Charles Darwin", categoria: "Ciencia", emoji: "🧬", color: "linear-gradient(135deg,#b4e7e4,#399b9b)", disponible: true, lecturas: 75, descripcion: "Una obra fundamental para comprender la teoría de la evolución." },
    { id: 5, titulo: "El universo", autor: "Stephen Hawking", categoria: "Ciencia", emoji: "🌌", color: "linear-gradient(135deg,#7779d9,#282c63)", disponible: true, lecturas: 98, descripcion: "Una introducción al universo, sus misterios y sus principales descubrimientos." },
    { id: 6, titulo: "Breve historia del tiempo", autor: "Stephen Hawking", categoria: "Ciencia", emoji: "🪐", color: "linear-gradient(135deg,#b4b7f5,#5654a8)", disponible: true, lecturas: 70, descripcion: "Explica conceptos relacionados con el tiempo, el espacio y el origen del universo." },
    { id: 7, titulo: "Historia del Perú", autor: "Jorge Basadre", categoria: "Historia", emoji: "🏛️", color: "linear-gradient(135deg,#f1c7a2,#b66e4b)", disponible: true, lecturas: 99, descripcion: "Un recorrido por los principales acontecimientos de la historia peruana." },
    { id: 8, titulo: "Los incas", autor: "María Rostworowski", categoria: "Historia", emoji: "☀️", color: "linear-gradient(135deg,#f6dc91,#d69c3d)", disponible: false, lecturas: 85, descripcion: "Una investigación sobre la organización y cultura del mundo incaico." },
    { id: 9, titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", categoria: "Literatura", emoji: "📖", color: "linear-gradient(135deg,#c5b6e8,#8067b5)", disponible: true, lecturas: 91, descripcion: "Novela ambientada en un colegio militar de Lima." },
    { id: 10, titulo: "El mundo de Sofía", autor: "Jostein Gaarder", categoria: "Filosofía", emoji: "💭", color: "linear-gradient(135deg,#f5b7d2,#b65b91)", disponible: true, lecturas: 89, descripcion: "Una novela que introduce al lector en la historia de la filosofía." },
    { id: 11, titulo: "Cosmos", autor: "Carl Sagan", categoria: "Ciencia", emoji: "🔭", color: "linear-gradient(135deg,#8bc6ec,#4776a8)", disponible: true, lecturas: 96, descripcion: "Una exploración de la ciencia, el espacio y nuestro lugar en el universo." },
    { id: 12, titulo: "Sapiens", autor: "Yuval Noah Harari", categoria: "Historia", emoji: "🧠", color: "linear-gradient(135deg,#e8cda7,#a87952)", disponible: true, lecturas: 93, descripcion: "Un recorrido por la historia de la humanidad." },
    { id: 13, titulo: "La vuelta al mundo en 80 días", autor: "Julio Verne", categoria: "Literatura", emoji: "🌍", color: "linear-gradient(135deg,#9bd7c4,#478c81)", disponible: true, lecturas: 84, descripcion: "Una aventura alrededor del mundo llena de desafíos y descubrimientos." },
    { id: 14, titulo: "El diario de Ana Frank", autor: "Ana Frank", categoria: "Historia", emoji: "📔", color: "linear-gradient(135deg,#edc5b4,#b77b68)", disponible: false, lecturas: 90, descripcion: "Un testimonio histórico escrito durante la Segunda Guerra Mundial." },
    { id: 15, titulo: "Viaje al centro de la Tierra", autor: "Julio Verne", categoria: "Ciencia", emoji: "🌋", color: "linear-gradient(135deg,#f2b880,#c56c46)", disponible: true, lecturas: 82, descripcion: "Una aventura científica hacia las profundidades de nuestro planeta." },
    { id: 16, titulo: "Tradiciones peruanas", autor: "Ricardo Palma", categoria: "Literatura", emoji: "🇵🇪", color: "linear-gradient(135deg,#f2c1c1,#bd7777)", disponible: true, lecturas: 87, descripcion: "Colección de relatos inspirados en las costumbres y la historia del Perú." },
    { id: 17, titulo: "Historia de los animales", autor: "Aristóteles", categoria: "Ciencia", emoji: "🐾", color: "linear-gradient(135deg,#c5e4a8,#729c59)", disponible: true, lecturas: 68, descripcion: "Una obra antigua dedicada a la observación y clasificación de los animales." },
    { id: 18, titulo: "La independencia del Perú", autor: "Jorge Basadre", categoria: "Historia", emoji: "🏅", color: "linear-gradient(135deg,#f7d794,#d99b46)", disponible: true, lecturas: 79, descripcion: "Información sobre el proceso de independencia del Perú." },
    { id: 19, titulo: "Ética para Amador", autor: "Fernando Savater", categoria: "Filosofía", emoji: "⚖️", color: "linear-gradient(135deg,#a9c9e8,#637fa7)", disponible: true, lecturas: 86, descripcion: "Una introducción a la reflexión sobre las decisiones y la ética." },
    { id: 20, titulo: "El arte de la guerra", autor: "Sun Tzu", categoria: "Filosofía", emoji: "📜", color: "linear-gradient(135deg,#d6c4a8,#967b59)", disponible: true, lecturas: 72, descripcion: "Un texto clásico sobre estrategia y pensamiento." }
];


// 2. ELEMENTOS HTML

const obtenerElemento = id => document.getElementById(id);

const contenedor = obtenerElemento("contenedor-libros");
const busqueda = obtenerElemento("busqueda");
const botonBuscar = obtenerElemento("btnBuscar");
const sinResultados = obtenerElemento("sin-resultados");
const listaPopulares = obtenerElemento("lista-populares");

const modal = obtenerElemento("modal");
const modalContenido = obtenerElemento("modalContenido");
const botonCerrarModal = obtenerElemento("cerrarModal");

const botonesFiltro = document.querySelectorAll(".filtro");

let categoriaActual = "Todos";
let ordenActual = "predeterminado";
let favoritos = cargarFavoritos();


// 3. NOTIFICACIONES

function notificar(mensaje, tipo = "info") {
    let notificacion = obtenerElemento("notificacion");

    if (!notificacion) {
        notificacion = document.createElement("div");
        notificacion.id = "notificacion";
        notificacion.className = "notificacion";
        document.body.appendChild(notificacion);
    }

    notificacion.textContent = mensaje;
    notificacion.dataset.tipo = tipo;
    notificacion.hidden = false;
    notificacion.classList.add("mostrar");

    clearTimeout(notificacion.temporizador);

    notificacion.temporizador = setTimeout(() => {
        notificacion.classList.remove("mostrar");
        notificacion.hidden = true;
    }, 3000);
}


// 4. NORMALIZAR TEXTO

function normalizarTexto(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


// 5. MOSTRAR LIBROS

function mostrarLibros(lista) {
    if (!contenedor) {
        console.warn("No se encontró el contenedor de libros.");
        return;
    }

    contenedor.innerHTML = "";

    if (sinResultados) {
        sinResultados.hidden = lista.length > 0;
    }

    if (lista.length === 0) return;

    lista.forEach(libro => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "libro-card";
        tarjeta.dataset.id = libro.id;

        const portada = document.createElement("div");
        portada.className = "portada";
        portada.style.background = libro.color;
        portada.textContent = libro.emoji;
        portada.setAttribute("aria-label", "Portada de " + libro.titulo);

        const titulo = document.createElement("h3");
        titulo.textContent = libro.titulo;

        const autor = document.createElement("p");
        autor.className = "autor";
        autor.textContent = "Autor: " + libro.autor;

        const categoria = document.createElement("span");
        categoria.className = "categoria";
        categoria.textContent = libro.categoria;

        const descripcion = document.createElement("p");
        descripcion.className = "descripcion-libro";
        descripcion.textContent = libro.descripcion;

        const estado = document.createElement("p");
        estado.className = libro.disponible ? "estado" : "estado agotado";
        estado.textContent = libro.disponible
            ? "● Disponible"
            : "● No disponible";

        const acciones = document.createElement("div");
        acciones.className = "acciones-libro";

        const boton = document.createElement("button");
        boton.className = "btn-prestamo";
        boton.textContent = libro.disponible
            ? "Consultar préstamo"
            : "No disponible";
        boton.disabled = !libro.disponible;

        boton.addEventListener("click", () => {
            consultarPrestamo(libro.id);
        });

        const botonFavorito = document.createElement("button");
        botonFavorito.className = "btn-favorito";

        const esFavorito = favoritos.includes(libro.id);

        botonFavorito.textContent = esFavorito
            ? "❤️ Favorito"
            : "♡ Favorito";

        botonFavorito.setAttribute("aria-pressed", String(esFavorito));

        botonFavorito.addEventListener("click", () => {
            cambiarFavorito(libro.id);
        });

        const botonDetalles = document.createElement("button");
        botonDetalles.className = "btn-detalles";
        botonDetalles.textContent = "Ver detalles";

        botonDetalles.addEventListener("click", () => {
            mostrarDetalles(libro.id);
        });

        acciones.append(boton, botonFavorito, botonDetalles);

        tarjeta.append(
            portada,
            titulo,
            autor,
            categoria,
            descripcion,
            estado,
            acciones
        );

        contenedor.appendChild(tarjeta);
    });
}


// 6. BUSCADOR Y FILTROS

function buscarLibros() {
    const texto = busqueda
        ? normalizarTexto(busqueda.value)
        : "";

    let resultados = libros.filter(libro => {
        const coincideTexto =
            normalizarTexto(libro.titulo).includes(texto) ||
            normalizarTexto(libro.autor).includes(texto) ||
            normalizarTexto(libro.categoria).includes(texto) ||
            normalizarTexto(libro.descripcion).includes(texto);

        const coincideFiltro =
            categoriaActual === "Todos" ||
            libro.categoria === categoriaActual;

        return coincideTexto && coincideFiltro;
    });

    if (ordenActual === "titulo") {
        resultados.sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        );
    } else if (ordenActual === "autor") {
        resultados.sort((a, b) =>
            a.autor.localeCompare(b.autor)
        );
    } else if (ordenActual === "lecturas") {
        resultados.sort((a, b) =>
            b.lecturas - a.lecturas
        );
    } else if (ordenActual === "disponibles") {
        resultados.sort((a, b) =>
            Number(b.disponible) - Number(a.disponible)
        );
    } else if (ordenActual === "favoritos") {
        resultados = resultados.filter(libro =>
            favoritos.includes(libro.id)
        );
    }

    mostrarLibros(resultados);
    actualizarContadorResultados(resultados.length);
}


// Evitar que el formulario recargue la página al buscar.

const formularioBusqueda = obtenerElemento("formBusqueda");

if (formularioBusqueda) {
    formularioBusqueda.addEventListener("submit", evento => {
        evento.preventDefault();
        buscarLibros();
    });
} else if (botonBuscar) {
    botonBuscar.addEventListener("click", evento => {
        evento.preventDefault();
        buscarLibros();
    });
}

if (busqueda) {
    busqueda.addEventListener("input", buscarLibros);
}

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(elemento => {
            elemento.classList.remove("activo");
        });

        boton.classList.add("activo");
        categoriaActual = boton.dataset.categoria || "Todos";

        buscarLibros();
    });
});

const selectorOrden = obtenerElemento("ordenLibros");

if (selectorOrden) {
    selectorOrden.addEventListener("change", () => {
        ordenActual = selectorOrden.value;
        buscarLibros();
    });
}


// 7. LIBROS POPULARES

function mostrarPopulares() {
    if (!listaPopulares) return;

    listaPopulares.innerHTML = "";

    const populares = [...libros]
        .sort((a, b) => b.lecturas - a.lecturas)
        .slice(0, 5);

    populares.forEach((libro, posicion) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "popular-card";

        const numero = document.createElement("span");
        numero.className = "numero-popular";
        numero.textContent = "#" + (posicion + 1);

        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.textContent = libro.emoji;

        const titulo = document.createElement("h3");
        titulo.textContent = libro.titulo;

        const autor = document.createElement("p");
        autor.textContent = libro.autor;

        const lecturas = document.createElement("p");
        lecturas.className = "lecturas";
        lecturas.textContent = "⭐ " + libro.lecturas + " lecturas";

        tarjeta.append(numero, emoji, titulo, autor, lecturas);
        listaPopulares.appendChild(tarjeta);
    });
}


// 8. ESTADÍSTICAS

function actualizarEstadisticas() {
    const total = libros.length;

    const disponibles = libros.filter(
        libro => libro.disponible
    ).length;

    const noDisponibles = total - disponibles;

    const categorias = new Set(
        libros.map(libro => libro.categoria)
    ).size;

    const elementoTotal = obtenerElemento("totalLibros");
    const elementoDisponibles = obtenerElemento("totalDisponibles");

    const elementoNoDisponibles =
        obtenerElemento("totalPrestados") ||
        obtenerElemento("totalNoDisponibles");

    const elementoCategorias = obtenerElemento("totalCategorias");

    if (elementoTotal) elementoTotal.textContent = total;
    if (elementoDisponibles) elementoDisponibles.textContent = disponibles;

    if (elementoNoDisponibles) {
        elementoNoDisponibles.textContent = noDisponibles;
    }

    if (elementoCategorias) {
        elementoCategorias.textContent = categorias;
    }
}


// 9. FAVORITOS

function cargarFavoritos() {
    try {
        const guardados = JSON.parse(
            localStorage.getItem("bibliotech_favoritos")
        );

        return Array.isArray(guardados)
            ? guardados.filter(id =>
                libros.some(libro => libro.id === id)
            )
            : [];
    } catch (error) {
        console.warn("No se pudieron cargar los favoritos.");
        return [];
    }
}

function guardarFavoritos() {
    try {
        localStorage.setItem(
            "bibliotech_favoritos",
            JSON.stringify(favoritos)
        );
    } catch (error) {
        console.warn("No se pudieron guardar los favoritos.");
    }
}

function cambiarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(
            favorito => favorito !== id
        );

        notificar("Libro eliminado de favoritos.", "info");
    } else {
        favoritos.push(id);
        notificar("❤️ Libro agregado a favoritos.", "success");
    }

    guardarFavoritos();
    buscarLibros();
    mostrarFavoritos();
}

function mostrarFavoritos() {
    const contenedorFavoritos = obtenerElemento("lista-favoritos");

    if (!contenedorFavoritos) return;

    contenedorFavoritos.innerHTML = "";

    const librosFavoritos = libros.filter(libro =>
        favoritos.includes(libro.id)
    );

    if (librosFavoritos.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Todavía no tienes libros favoritos.";
        contenedorFavoritos.appendChild(mensaje);
        return;
    }

    librosFavoritos.forEach(libro => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "favorito-card";
        tarjeta.textContent = libro.emoji + " " + libro.titulo;

        contenedorFavoritos.appendChild(tarjeta);
    });
}


// 10. DETALLES DE LIBROS

function mostrarDetalles(id) {
    const libro = libros.find(
        elemento => elemento.id === id
    );

    if (!libro) {
        notificar("No se encontró el libro.", "error");
        return;
    }

    if (!modal || !modalContenido) {
        notificar(libro.titulo + " — " + libro.descripcion);
        return;
    }

    modalContenido.innerHTML = "";

    const portada = document.createElement("div");
    portada.className = "portada-modal";
    portada.style.background = libro.color;
    portada.textContent = libro.emoji;

    const titulo = document.createElement("h3");
    titulo.textContent = libro.titulo;

    const autor = document.createElement("p");
    autor.textContent = "Autor: " + libro.autor;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + libro.categoria;

    const descripcion = document.createElement("p");
    descripcion.textContent = libro.descripcion;

    const lecturas = document.createElement("p");
    lecturas.textContent = "⭐ " + libro.lecturas + " lecturas";

    const estado = document.createElement("p");
    estado.textContent = libro.disponible
        ? "Estado: Disponible"
        : "Estado: No disponible";

    modalContenido.append(
        portada,
        titulo,
        autor,
        categoria,
        descripcion,
        lecturas,
        estado
    );

    abrirModal();
}


// 11. CONSULTAR PRÉSTAMO

function consultarPrestamo(id) {
    const libro = libros.find(
        elemento => elemento.id === id
    );

    if (!libro) {
        notificar("El libro solicitado no existe.", "error");
        return;
    }

    if (!libro.disponible) {
        notificar("Este libro no está disponible actualmente.", "error");
        return;
    }

    if (!modal || !modalContenido) {
        notificar("El libro está disponible para consulta.");
        return;
    }

    modalContenido.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = "📚 ¡Excelente elección!";

    const nombre = document.createElement("p");
    nombre.textContent = "Libro: " + libro.titulo;

    const autor = document.createElement("p");
    autor.textContent = "Autor: " + libro.autor;

    const informacion = document.createElement("p");
    informacion.textContent =
        "Este libro se encuentra disponible para préstamo.";

    const instrucciones = document.createElement("p");
    instrucciones.textContent =
        "Acércate al encargado de la biblioteca escolar para solicitar el préstamo físico.";

    const botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Entendido";
    botonConfirmar.className = "btn-confirmar";
    botonConfirmar.addEventListener("click", cerrarModal);

    modalContenido.append(
        titulo,
        nombre,
        autor,
        informacion,
        instrucciones,
        botonConfirmar
    );

    abrirModal();
}


// 12. MODAL

function abrirModal() {
    if (!modal) return;

    modal.hidden = false;
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-abierto");
}

function cerrarModal() {
    if (!modal) return;

    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    modal.hidden = true;
    document.body.classList.remove("modal-abierto");
}

if (botonCerrarModal) {
    botonCerrarModal.addEventListener("click", cerrarModal);
}

if (modal) {
    modal.addEventListener("click", evento => {
        if (evento.target === modal) {
            cerrarModal();
        }
    });
}

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        cerrarModal();
    }
});


// 13. FORMULARIO DE PRÉSTAMO

const formularioPrestamo = obtenerElemento("formPrestamo");

if (formularioPrestamo) {
    formularioPrestamo.addEventListener("submit", evento => {
        evento.preventDefault();

        const nombre = obtenerElemento("nombreEstudiante");
        const grado = obtenerElemento("gradoEstudiante");
        const libroSolicitado = obtenerElemento("libroSolicitado");
        const fechaSolicitud = obtenerElemento("fechaSolicitud");
        const mensaje = obtenerElemento("mensajeSolicitud");

        if (!nombre || !grado || !libroSolicitado) {
            notificar(
                "No se encontraron todos los campos del formulario.",
                "error"
            );
            return;
        }

        const nombreValor = nombre.value.trim();
        const gradoValor = grado.value.trim();
        const idLibro = Number(libroSolicitado.value);

        const libro = libros.find(
            elemento => elemento.id === idLibro
        );

        if (nombreValor.length < 3) {
            notificar("Escribe tu nombre completo.", "error");
            nombre.focus();
            return;
        }

        if (gradoValor.length < 2) {
            notificar("Ingresa tu grado y sección.", "error");
            grado.focus();
            return;
        }

        if (!libro || !libro.disponible) {
            notificar("Selecciona un libro disponible.", "error");
            libroSolicitado.focus();
            return;
        }

        if (fechaSolicitud && fechaSolicitud.value) {
            const fechaElegida = new Date(
                fechaSolicitud.value + "T00:00:00"
            );

            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            if (fechaElegida < hoy) {
                notificar(
                    "La fecha no puede ser anterior a hoy.",
                    "error"
                );

                fechaSolicitud.focus();
                return;
            }
        }

        if (mensaje) {
            mensaje.textContent =
                "Solicitud de demostración registrada para " +
                nombreValor + " (" + gradoValor + "). Libro: " +
                libro.titulo +
                ". Acércate a biblioteca para confirmar el préstamo.";
        }

        notificar("¡Solicitud registrada correctamente!", "success");

        formularioPrestamo.reset();
        cargarSelectorLibros();
    });
}


// 14. CARGAR LIBROS EN EL SELECTOR

function cargarSelectorLibros() {
    const selector = obtenerElemento("libroSolicitado");

    if (!selector) return;

    selector.innerHTML = "";

    const opcionInicial = document.createElement("option");
    opcionInicial.value = "";
    opcionInicial.textContent = "Selecciona un libro";

    selector.appendChild(opcionInicial);

    libros
        .filter(libro => libro.disponible)
        .forEach(libro => {
            const opcion = document.createElement("option");

            opcion.value = libro.id;
            opcion.textContent = libro.titulo;

            selector.appendChild(opcion);
        });
}


// 15. MENÚ DE NAVEGACIÓN

const botonMenu = obtenerElemento("menuToggle");
const menuNavegacion = obtenerElemento("menuNavegacion");

if (botonMenu && menuNavegacion) {
    botonMenu.addEventListener("click", () => {
        const abierto = menuNavegacion.classList.toggle("abierto");

        botonMenu.setAttribute(
            "aria-expanded",
            String(abierto)
        );
    });

    menuNavegacion.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            menuNavegacion.classList.remove("abierto");
            botonMenu.setAttribute("aria-expanded", "false");
        });
    });
}


// 16. BOTÓN PARA SUBIR AL INICIO

const botonArriba =
    obtenerElemento("btnSubir") ||
    obtenerElemento("btnArriba");

if (botonArriba) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            botonArriba.classList.add("visible");
        } else {
            botonArriba.classList.remove("visible");
        }
    });

    botonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// 17. AÑO AUTOMÁTICO

const anioActual = obtenerElemento("anioActual");

if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
}


// 18. CONTADOR DE RESULTADOS

function actualizarContadorResultados(cantidad) {
    const contador = obtenerElemento("contadorResultados");

    if (!contador) return;

    contador.textContent = cantidad === 1
        ? "Se encontró 1 libro"
        : "Se encontraron " + cantidad + " libros";
}


// 19. INICIAR BIBLIOTECA

function iniciarBiblioteca() {
    console.log("==================================");
    console.log("📚 BIBLIOTECH ESCOLAR");
    console.log("Sistema iniciado correctamente.");
    console.log("Total de libros:", libros.length);
    console.log("==================================");

    mostrarLibros(libros);
    mostrarPopulares();
    actualizarEstadisticas();
    mostrarFavoritos();
    cargarSelectorLibros();
    actualizarContadorResultados(libros.length);
}


// 20. EJECUCIÓN DEL SISTEMA

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        iniciarBiblioteca
    );
} else {
    iniciarBiblioteca();
}