const reasonInput = document.querySelector('#input_reason'); 
const timeInput = document.querySelector('#input_time'); 
const cancelBtn = document.querySelector('#btn_cancel'); 
const confirmBtn = document.querySelector('#btn_add'); 
const taskMaster = document.querySelector('#todo_list'); 

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value; 
    const enteredAmount = timeInput.value;

    if(
        enteredReason.trim().length <= 0  || 
        timeInput <= 0 || 
        timeInput.length <= 0 )
    {
        return; 
    }
    const timeToCompletion = document.createElement('ion-item'); 
    timeToCompletion = enteredReason + enteredAmount + ' hours';

    taskMaster.appendChild(timeToCompletion); 
});