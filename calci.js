//Function to add 

function add(a,b)
{
    return a+b;
}

//function to subtract

function subtract(a,b)
{
    return a-b;
}

//function to multiply

function multiply(a,b)
{
    return a*b;
}

//function to divide

function divide(a,b)
{
    return a/b;
}

//function to operate two numbers with a chosen operator 

function operate(oper,num1,num2)
{
    let res;
    switch (oper)
    {
        case '+' : res=add(num1,num2);
        return res;
        break;

        case '-' : res=subtract(num1,num2);
        return res;
        break;

        case '*' : res=multiply(num1,num2);
        return res;
        break;

        case '/' : res=divide(num1,num2);
        return res;
        break;

        default: res='INVALID OPERATOR';
    }
}

// fucntion to type in display

function type(){

    let dis= document.querySelector('.display');
    dis.innerText='';

document.querySelector('.one').addEventListener('click', ()=>{
    let num1=dis.textComtent+'1';
    dis.innerText=dis.textContent+'1';
})

document.querySelector('.two').addEventListener('click', ()=>{
    let num1=dis.textContent+'2';
    dis.innerText=dis.textContent+'2';
})

document.querySelector('.three').addEventListener('click', ()=>{
    let num1=dis.textComtent+'3';
    dis.innerText=dis.textContent+'3';
})
document.querySelector('.four').addEventListener('click', ()=>{
    let num1=dis.textComtent+'4';
    dis.innerText=dis.textContent+'4';
})

document.querySelector('.five').addEventListener('click', ()=>{
    let num1=dis.textContent+'5';
    dis.innerText=dis.textContent+'5';
})

document.querySelector('.six').addEventListener('click', ()=>{
    let num1=dis.textContent+'6';
    dis.innerText=dis.textContent+'6';
})

document.querySelector('.seven').addEventListener('click', ()=>{
    let num1=dis.textContent+'7';
    dis.innerText=dis.textContent+'7';
})

document.querySelector('.eight').addEventListener('click', ()=>{
    let num1=dis.textContent+'8';
    dis.innerText=dis.textContent+'8';
})

document.querySelector('.nine').addEventListener('click', ()=>{
    let num1=dis.textContent+'9';
    dis.innerText=dis.textContent+'9';
})

document.querySelector('.zero').addEventListener('click', ()=>{
    let num1=dis.textContent+'0';
    dis.innerText=dis.textContent+'0';
})



}

type();