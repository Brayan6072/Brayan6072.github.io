const parentDiv = document.getElementsByClassName('form-agregar')[0]; 
const trparent = document.getElementsByClassName('text-white')[0];
let thparent = document.getElementById('showformadd');

function mostrar(){
 
  parentDiv.style.display = 'inline-grid';
  trparent.removeChild(thparent);
}



document.getElementById('formAgregar').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    const materia = document.getElementById('materia').value;
    const diaInput = document.getElementById('dia').value;
    let hora = parseInt(document.getElementById('hora').value); 
    const color = document.getElementById('colorPicker').value;
    const colortxt = document.getElementById('colortext').value;
    const maestro = document.getElementById('maestro').value;
    const nrc = document.getElementById('nrc').value;
    const duracion = document.getElementById('duracion').value;
    let diaIndex = -1; 

    for (var i = 0; i < semana.length; i++) {        
        if (diaInput === semana[i]) {
            diaIndex = i+1; 
            break; 
        }
    }

    
    if (hora < 1 || diaIndex === -1) {
        console.error('Día o hora no válidos.');
        return;
    }

    //const horario = document.querySelector('tbody tr:nth-child(' + hora + ') td:nth-child(' + diaIndex + ')');

    
    //hora es la fila segun la hora, ejemplo 8:00-8:59 cuenta con el id 1 y las 20:00 cuenta con el id 13
    //diaIndex es la columna segun el dia 1-7
    const horario = document.getElementById(""+hora+diaIndex+"");//celda    

    const contentm = document.createElement('p');//parrafo para mostrar el nombre de la materia
    const contentmaestro = document.createElement('p');//parrafo para mostrar el nombre del maestro
    const contentnrc = document.createElement('p');//parrafo para mostrar el nrc
    
    //contentm - variable para materia
    contentm.textContent = materia;//asigna el texto
    contentm.style.color = colortxt;//asigna el color de la letra

    contentmaestro.textContent = maestro;
    contentmaestro.style.color = colortxt;

    contentnrc.textContent = nrc;
    contentnrc.style.color = colortxt;
    
    horario.innerHTML = ''; 
    
    horario.appendChild(contentm);
    horario.appendChild(contentmaestro);
    horario.appendChild(contentnrc);
    
    horario.style.backgroundColor = color;//fondo de la celda
    
    
    const clase = {
        materia: materia,
        maestro: maestro,
        nrc: nrc,
        color: color,
        colortxt: colortxt
    };

    localStorage.setItem('clase_' + hora + diaIndex, JSON.stringify(clase));

    if(duracion == 2){
        const horario2 = document.getElementById(""+hora+diaIndex+"");   
        horario2.style.backgroundColor = color;
        const clase2 = {            
            color: color            
        };
        hora = hora + 1;
        localStorage.setItem('clase_' + hora + diaIndex, JSON.stringify(clase2));
    }else if(duracion == 3){            

        //guardar el color de fondo en un item
        const clase2 = {            
            color: color
        };
        const clase3 = {            
            color: color
        };

        hora++;
        const horario2 = document.getElementById(""+hora+diaIndex+"");        
        horario2.style.backgroundColor = color;
        localStorage.setItem('clase_' + hora + diaIndex, JSON.stringify(clase2));

        hora++;
        const horario3  = document.getElementById(""+hora+diaIndex+"");  
        horario3.style.backgroundColor = color;
        localStorage.setItem('clase_' + hora + diaIndex, JSON.stringify(clase3));
    }else if (duracion < 0|| duracion > 3){
        console.error('Duracion no valida.');
    }





    window.location.href = 'https://brayan6072.github.io/';
});




window.addEventListener('load', function() {
    const semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    
    for (let hora = 1; hora <= 24; hora++) {
        for (let diaIndex = 1; diaIndex <= semana.length; diaIndex++) {
            const claseGuardada = localStorage.getItem('clase_' + hora + diaIndex);

            if (claseGuardada) {
                
                const clase = JSON.parse(claseGuardada);

                const horario = document.getElementById("" + hora + diaIndex);
                const contentm = document.createElement('p');
                const contentmaestro = document.createElement('p');
                const contentnrc = document.createElement('p');
                
                contentm.textContent = clase.materia;
                contentm.style.color = clase.colortxt;
                contentmaestro.textContent = clase.maestro;
                contentmaestro.style.color = clase.colortxt;
                contentnrc.textContent = clase.nrc;
                contentnrc.style.color = clase.colortxt;

                horario.innerHTML = ''; 

                horario.appendChild(contentm);
                horario.appendChild(contentmaestro);
                horario.appendChild(contentnrc);

                horario.style.backgroundColor = clase.color;
            }
        }
    }
});
