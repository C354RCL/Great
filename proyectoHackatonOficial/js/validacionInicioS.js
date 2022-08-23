//VAriable boton
const btnIniciarSesion = document.querySelector('#iniciaSesion');
//Varibale inputs
const email = document.querySelector('#email');
const contraseña = document.querySelector('#contraseña');
//Accesos
let acceso1 = false;
let acceso2 = false;
//link acceso
const main = 'main.html';


//Eventos
eventListeners();
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    contraseña.addEventListener('blur', validarFormulario);

    //Cuando se valida el formulario
    btnEnviar.addEventListener('click', () => {
        window.location.replace(main);
    })
}

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('disable');

    //Limpiar los campos al refrescar la pagina
    email.value = '';
    contraseña.value = '';
}
function validarFormulario(e){
    if(e.target.value.length > 0){

        e.target.classList.remove('border-red');
        e.target.classList.add('border-green');

        console.log('relleno')
        if((contraseña.value === confirmacion.value) & (contraseña.value.length > 0) & (confirmacion.value.length > 0)){
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
    if(accseso1  && accseso2 ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disable');

    }
}


