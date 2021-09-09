# AereoNaves

Este proyecto se realizo como prueba tenica para el cargo de desarrollador Angular

### proyecto desplegado  en: [areonaves.netlify.app](https://areonaves.netlify.app/auth/login)

## Inicialización del proyecto



## npm install

## ng serve -o

## Metodos usados

## Repositorio del backend

* ## https://github.com/JuanHoyosC/areonaves-backend

 
## Metodos trabajados

* Pipes: Se creo un pipe personalizado para que no puede haber textos de más de 15 palabras
* Interceptors: Se encarga de enviar el token midiante los headers en cada una de las peticions y de mostrar los errores
* Lazy loading
* Input: Se trabajo con componentes que reciben data que será mostrada en tablas
* Output: Se trabajo para notificar al componente padre cuando un elemento fue actualizado
* JWT: Para la autenticación se trabajo con JWT
* PWA: La aplicación puede ser instalada en los dispositivos moviles gracias a los services workers
* Responsive: La aplicación es 100% responsive
* Modulos: Los componentes se trabajaron en un componente apartrado al module principal

## Funcionamiento de la aplicación

# USUARIO ADMINISTRADOR DE PRUEBA

## Usuario: admin@gmail.com
## Contraseña: admin@1234567

La aplicaicón tiene como finalidad el alquiler de aereonaves, cuenta con un login y un registro, por defecto se registrará con el role de piloto y este solo podra alquilar una aeronave.

* Pagina aereonaves: cuenta con formulario para alquilar las aeronaves que se encuentren disponibles, si no hay aereonaves disponibles saldra un mensaje, abajo de este formulario o mensaje se mostrará el historico de aeronaves alquiladas y a su vez si tiene aereonaves ocupadas el piloto podrá liberarlas
* Pagina dashboard: En este pagina solo los administradores pueden ingresarlas, en ella pueden ver los usuarios registrados y cambiar su información, ya sea el usuario, role o correo, tambien tiene un CRUD para la creación, lectura, actualización y eliminación de aereronaves.
