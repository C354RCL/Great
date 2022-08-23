let nombreMeses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let fechaActual=new Date();
let diaActual=fechaActual.getDate();
let mesActual=fechaActual.getMonth();
let añoActual=fechaActual.getFullYear();

const dates=document.getElementById('dates');
const mes=document.getElementById('month');
const año= document.getElementById('year');

const flechaRegresar = document.getElementById('prev-month')
const flechaSiguiente = document.getElementById('next-month')

escribirMeses(mesActual);
mes.textContent=nombreMeses[mesActual];
año.textContent=añoActual.toString();

flechaRegresar.addEventListener('click', ()=>ultimoMes());
flechaSiguiente.addEventListener('click', ()=>SiguienteMes());


function escribirMeses(mes){

    for(let i=diaInicio(); i>0; i-- ){
        dates.innerHTML += `<div class="calendar-date calendar-item calendar-last-days">
        ${totalDias(mesActual-1)-(i-1)}
        </div>`;
    }


    for(let i=1; i<=totalDias(mes); i++){
        if(i===diaActual){
            dates.innerHTML += `<div class="calendar-date calendar-item today">${i}</div>`;
        }else{
            dates.innerHTML += `<div class="calendar-date calendar-item">${i}</div>`;
        }
        
    }
}

function totalDias(mes){
    if(mes===-1) mes=11;

    if(mes==0 || mes ==2 || mes==4 || mes==6 || mes==7 || mes==9 ||mes ==11){
        return 31;
    }else if(mes==3 || mes==5 || mes==8 || mes ==10){
        return 30;
    }else{
        return isBisiesto() ? 29:28;
    }
}

function isBisiesto(){
    return ((añoActual % 100 !==0) && (añoActual % 4 ===0) || (añoActual %400===0));     
}

function diaInicio(){
    let start=new Date(añoActual, mesActual, 1);
    return((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function ultimoMes(){
    if(mesActual !==0){
        mesActual--;
    }else{
        mesActual=11;
        añoActual--;
    }
    establecerNuevaFecha();
}

function SiguienteMes(){
    if(mesActual !==11){
        mesActual++;
    }else{
        mesActual=0;
        añoActual++;
    }
    establecerNuevaFecha();
}

function establecerNuevaFecha(){
    fechaActual.setFullYear(añoActual, mesActual, diaActual);
    mes.textContent=nombreMeses[mesActual];
    año.textContent=añoActual.toString();
    dates.textContent="";
    escribirMeses(mesActual);
}