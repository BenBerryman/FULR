
function stepUp(inputField) {
    inputField.value++;
}

function stepDown(inputField) {
    if (inputField.value > 1) {
        inputField.value--;
    }
    else if (inputField.value == 1) {
        inputField.value = null;
    }
}

var numberIncrementField = document.querySelector(".number-incrementer")
document.querySelector(".increment-down")
    .addEventListener('click', (event) => {
        stepDown(numberIncrementField.querySelector('input[type=number]'));
        event.preventDefault();
    })

document.querySelector(".increment-up")
    .addEventListener('click', (event) => {
        stepUp(numberIncrementField.querySelector('input[type=number]'));
        event.preventDefault();
    })

var today = new Date();
var max = new Date();
var min = new Date();
min.setMonth(today.getMonth()-2);
max.setDate(max.getDate()+121);
$('#date').datepicker({
    dateFormat: "mm/dd/yy",
    minDate: today,
    maxDate: max,
    altFormat: "yy-mm-dd",
    altField: "#alt-date"

});