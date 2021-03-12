const tipoInput = document.querySelector('#input-tipo');
const montoInput = document.querySelector('#input-monto');
const guardarBtn = document.querySelector('#btn-guardar');
const gastosList = document.querySelector('#list-gastos');
const totalOutput = document.querySelector('#output-total');


let total = 0;

function clear() {

    tipoInput.value = '';
    montoInput.value = '';

}

guardarBtn.addEventListener('click', () => {

    const tipo = tipoInput.value;
    const monto = montoInput.value;


    if (tipo.trim().length > 0 && monto.trim().length > 0 && monto > 0) {

        console.log('Valores validos');

        const newItem = document.createElement('ion-item');
        newItem.textContent = tipo + ': $' + monto;
        gastosList.appendChild(newItem);

        total += +monto;
        totalOutput.textContent = total;

        clear();
    } 
    
    else {

        alertController.create({

            message: 'Llene los campo corerctamente',
            header: 'Valores invalidos',
            buttons: ['Ok']
        
        }).then(alertElement => {

            alertElement.present();
        
        });

    }

});