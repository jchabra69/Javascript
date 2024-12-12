import { crearEmpresa, obtenerEmpresas, eliminarEmpresa, buscarEmpresa } from './empresaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');

    // Función para renderizar la tabla
    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        console.log(empresas);

        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                 <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);
        });
    };

    //Creo que haría falta delegación de eventos, usando el contenedor que es tabla-empresas
    const contenedorBotones = document.querySelector("#tabla-empresas");

    contenedorBotones.addEventListener("click", (e) => {

        //Si el eelemento que activa click en el contenedor-tabla contiene la clase editar
        if (e.target && e.target.classList.contains("editar")) {
            
            //HAY QUE CAMBIAR EL BOTON ANTES DE TODO PARA QUE DIGA EDITAR


            const empresaId = e.target.dataset.id;
            // Lógica para editar la empresa
            alert(`Editar empresa con ID: ${empresaId}`);
            // Aquí puedes cargar los datos en un formulario para editar

            //Claro, ahora falta que ya teniendo el id, meta los datos en el input nombre y direccion
            //Ademas de activar que el boton cambie entre Crear y Editar
            let inputNombre = document.querySelector("#nombre");
            let inputDireccion = document.querySelector("#direccion");

            const empresaAEditar = buscarEmpresa(empresaId);

            //DEPURACION
            console.log('Nombre de la empresa: ' +empresaAEditar.nombre);

            inputNombre.value = empresaAEditar.nombre;
           inputDireccion.value = empresaAEditar.direccion;

           //AY SOLO ME FALTA QUE CAMBIE EL BOTON


        }

        //Si el elemento que activa click en el contenedor-tabla contiene la clase eliminar
        if (e.target && e.target.classList.contains("eliminar")) {
            const empresaId = e.target.dataset.id;
            alert(`Eliminar empresa con ID: ${empresaId}`);
            eliminarEmpresa(empresaId);
            renderTablaEmpresas(); // Recargar la tabla después de eliminar
        }
    });

    /*
    // Asignar eventos a los botones de editar y eliminar
    document.querySelectorAll('.editar').forEach(btn => {
        alert(`Editar empresa`);
        btn.addEventListener('click', (e) => {
            const empresaId = e.target.dataset.id;
            // Lógica para editar la empresa
            alert(`Editar empresa con ID: ${empresaId}`);
            // Aquí puedes cargar los datos en un formulario para editar
            
        });
    }); */


/*
    document.querySelectorAll('.eliminar').forEach(btn => {
        alert(`Editar empresa`);
        btn.addEventListener('click', (e) => {
            const empresaId = e.target.dataset.id;
            alert(`Eliminar empresa con ID: ${empresaId}`);
            eliminarEmpresa(empresaId);
            renderTablaEmpresas(); // Recargar la tabla después de eliminar
        });
    });
*/

// Manejo del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = form.nombre.value;
    const direccion = form.direccion.value;

    crearEmpresa(nombre, direccion);
    renderTablaEmpresas();

    // Limpiar el formulario
    form.reset();
});

// Cargar la tabla inicialmente
renderTablaEmpresas();
});


