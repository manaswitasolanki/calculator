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

