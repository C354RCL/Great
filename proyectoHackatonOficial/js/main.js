
const miStorage = window.localStorage;

//Variable boton
const btnEnviar = document.querySelector('#enviar');
//Variables inputs
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const password = document.querySelector('#contraseña');
const confirmacion = document.querySelector('#confirmacion');
//Accesos
let accseso1 = false;
let accseso2 = false;
//link acceso
const main = 'pregunta1.html'
// base de datos
const dataBase = {
    users : []
};


//Eventos
eventListeners();
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    telefono.addEventListener('blur', validarFormulario);
    password.addEventListener('blur', validarFormulario);
    confirmacion.addEventListener('blur',validarFormulario);

    //Cuando se valida el formulario
    btnEnviar.addEventListener('click', () => {
        window.location.replace(main);
    })
}

//Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('disable');

    //Limpiar los campos al refrescar la pagina
    nombre.value = '';
    email.value = '';
    telefono.value = '';
    password.value = '';
    confirmacion.value = '';
}

function validarFormulario(e){
    if(e.target.value.length > 0){

        e.target.classList.remove('border-red');
        e.target.classList.add('border-green');

        console.log('relleno')
        if((password.value === confirmacion.value) & (password.value.length > 0) & (confirmacion.value.length > 0)){
            console.log('las contraseñas son iguales');

            e.target.classList.remove('border-red');
            e.target.classList.add('border-green');
            
            accseso1 = true;
        }else{
            console.log('contraseñas no coinciden');
            e.target.classList.remove('border-green');
            e.target.classList.add('border-red')

            
        }
    }else{
        e.target.classList.remove('border-green');
        e.target.classList.add('border-red')

    }
    if(e.target.type = 'email'){
        const er = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

         if(er.test( e.target.value )){

             e.target.classList.remove('border-red');
             e.target.classList.add('border-green');

             accseso2 = true;
         }else{
             e.target.classList.remove('border-green');
             e.target.classList.add('border-red')

             console.log('correo incorecto');

         } 
     }

    if(accseso1){
        let users = localStorage.getItem('users');
        console.log({ users });

        if(users){
            const usuario = JSON.stringify({users});
            users = JSON.parse(usuario);
        }
        if(!users){
            users = {};
        }
        const user = {
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            password: password.value,
        };
        localStorage.setItem('users', ({ user, ...users }));
        // localStorage.setItem("users", JSON.stringify({ users }));

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disable');
    }
}