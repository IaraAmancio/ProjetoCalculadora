let numero_antigo = false;
let novo_numero;
let resultado;
let operador;

// Seleciona a div com a classe "display"
var display = document.querySelector('.display');

// Modifica o texto dentro da div
display.textContent = "";

function limparTela(){
    display.textContent = "";
    numero_antigo = false;
}

function apagarDigito(){
    let text = display.textContent;
    text = text.slice(0, -1);
    display.textContent = text;

}

let buttons_number = document.querySelectorAll('[id*=number]');

buttons_number.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            if (numero_antigo == display.textContent){
                display.textContent = "";
            }
            let value = event.target.value;
            display.textContent += value;
        })
    
});

let buttons_operador = document.querySelectorAll('[id*=operador]');
buttons_operador.forEach((btn) => {
   
    btn.addEventListener("click", (event)=>{
        
        if(numero_antigo){
            
            novo_numero = display.textContent;
            console.log(novo_numero);
            switch (operador){
                case '+':
                    resultado = parseInt(numero_antigo) + parseInt(novo_numero);
                    break;
                case '-':
                    resultado = parseInt(numero_antigo) - parseInt(novo_numero);
                    break;
                case '*':
                    resultado = parseInt(numero_antigo) * parseInt(novo_numero);
                    break;
                case '/':
                    resultado = parseInt(numero_antigo) / parseInt(novo_numero);
                    break;
                default:
                    limparTela();
            }
            
            display.textContent = resultado;  
            numero_antigo = resultado;  
            
            operador = event.target.value;
            console.log(operador);
                 
        }
        else{
            numero_antigo = display.textContent;
            console.log(numero_antigo);
            operador =event.target.value;
        }
    });
});