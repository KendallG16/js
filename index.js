var buttons = document.querySelectorAll('button');
var display = document.getElementById('display');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if(this.textContent !== '='){
            if(this.textContent === 'X'){
                display.textContent += '*';
            }
            else if(this.textContent === 'C'){
                display.textContent = '';
            }
            else{
                display.textContent += this.textContent;
            }
        }
        else if(this.textContent === '='){
           display.textContent = eval(display.textContent);
        }
    });
});