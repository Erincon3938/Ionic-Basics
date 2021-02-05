const typeInput = document.getElementById('input-type');
const mountInput = document.getElementById('input-mount');
const saveBtn = document.getElementById('btn-save');
const spendingList = document.getElementById('list-spending');
const totalOutput = document.getElementById('output-total');

let total = 0;

const clearElements = () => {
    typeInput.value = '';
    mountInput.value = '';
}

saveBtn.addEventListener('click', (event) => {
    const type =  typeInput.value,
        mount = mountInput.value;

    if(type.trim().length > 0 && mount.trim().length > 0){
        const newItem = document.createElement('ion-item');
        newItem.textContent = type + ': $' + mount;
        spendingList.appendChild(newItem);
        total += +mount;
        totalOutput.textContent = total;
        clearElements();
    }else{
        alertController.create({
            message: 'Complete los campos requeridos',
            header: 'Valores invalidos !!',
            buttons: ['Ok']
        }).then(alertElement => {
            alertElement.present();
        });
    }
});