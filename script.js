const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro',
        src: "assets/img/apartamentocentro.jpeg", 
        descripcion: 'Apartamento céntrico cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio moderno',
        src: 'assets/images/imagen2.jpg',
        descripcion: 'Condominio moderno en una zona tranquila.',
        ubicacion: '456 Elm Street, Anytown, CA 91234',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
];


function cargarPropiedades() {
    const listaVenta = document.getElementById('lista-venta');
    const listaAlquiler = document.getElementById('lista-alquiler');


    propiedades_venta.slice(0, 3).forEach(propiedad => {
        listaVenta.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños || 0} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });


    propiedades_alquiler.slice(0, 3).forEach(propiedad => {
        listaAlquiler.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                            <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}


window.onload = cargarPropiedades;
