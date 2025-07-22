const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function equalsTo(){
    try{
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}