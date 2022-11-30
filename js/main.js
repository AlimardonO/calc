//Получаем container
const btn = document.querySelector('#container');
//Получаем экран калькулятора
const result = document.querySelector('.scr');
//
let a = '';
let b = '';
//знак операции
let element = '';
let oper = '';
let finish;
function clear(){
    a = '';
    b = '';
    element = '';
    oper='';
    finish = 0;
    result.innerHTML = '0';
}
document.querySelector('.red').onclick = clear;
const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const element2 = ['C','%','/','<','x','-','+','+/-'];
btn.addEventListener('click',calc);
function calc(event){
    if(!event.target.classList.contains('sbtn')) return;
    if(event.target.innerText=='C') return;
    let value = event.target.innerText;
    if(value=='x'){value='*';}
    if(value!='=' && value!='+/-'){
        oper+=value;
    }
    else if(value=='='){
        finish = eval(oper);
        result.innerHTML = finish;
    }
    if(numbers.includes(value)){
            if(b==='' && element===''){
                a+=value;
                result.innerHTML = a;
            }else{
                b+=value;
                result.innerHTML = b;
            }
    }
    if(element2.includes(value) || value=='*'){
        element = value;
        result.innerHTML = element;
        b='';
        a='';
        return;
    }
    // console.log(`a: ${a}, b: ${b}, value: ${value}, oper: ${oper}, finish: ${finish}`);
}