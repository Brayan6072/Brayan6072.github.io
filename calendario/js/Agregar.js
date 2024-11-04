const parentDiv = document.getElementsByClassName('form-agregar')[0]; // Selecciona el primer elemento con clase 'table-responsive'

function mostrar(){
 
  parentDiv.style.display = 'inline-grid';
  
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
    
});




