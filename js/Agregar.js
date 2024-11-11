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
    const modalidad = document.getElementById('modalidad').value;
    const diaInput = document.getElementById('dia').value;
    const hora = parseInt(document.getElementById('hora').value); // Convertir a número
    const color = document.getElementById('colorPicker').value;
    const colortxt = document.getElementById('colortext').value;
    let diaIndex = -1; 

    for (var i = 0; i < semana.length; i++) {        
        if (diaInput === semana[i]) {
            diaIndex = i+1; 
            break; 
        }
    }

    // Asegúrate de que hora y diaIndex son válidos
    if (hora < 1 || diaIndex === -1) {
        console.error('Día o hora no válidos.');
        return;
    }

    //const horario = document.querySelector('tbody tr:nth-child(' + hora + ') td:nth-child(' + diaIndex + ')');

    

    const horario = document.getElementById(""+hora+diaIndex+"");

    const contentm = document.createElement('p');
    const contentmd = document.createElement('p');
    
    contentm.textContent = materia;
    contentm.style.color = colortxt;
    contentmd.textContent = modalidad;
    contentmd.style.color = colortxt;

    
    horario.innerHTML = ''; 

    horario.appendChild(contentm);
    horario.appendChild(contentmd);
    
    horario.style.backgroundColor = color;
    
    
    const clase = {
        materia: materia,
        modalidad: modalidad,
        color: color,
        colortxt: colortxt
    };

    localStorage.setItem('clase_' + hora + diaIndex, JSON.stringify(clase));
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
                const contentmd = document.createElement('p');
                
                contentm.textContent = clase.materia;
                contentm.style.color = clase.colortxt;
                contentmd.textContent = clase.modalidad;
                contentmd.style.color = clase.colortxt;

                horario.innerHTML = ''; 

                horario.appendChild(contentm);
                horario.appendChild(contentmd);

                horario.style.backgroundColor = clase.color;
            }
        }
    }
});
