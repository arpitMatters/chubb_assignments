/*Write a function to generate random whole number between 0 to 10;*/

function generate_random()
{
    let x=Math.floor(Math.random()*10);
    console.log(x);
}
generate_random();


/*Write a function which will get two parameters and return a sum of it.*/


function sum_of_two(a,b)
{
    return a+b;
}
let x=sum_of_two(10,20);
console.log(x);


/*Write a program to create a calculator with all arithmetic operations has functions;*/


function calculator(a,b)
{
    let x=prompt("Enter the operation that you want to perform","+");
    switch(x)
    {
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            if(b!=0)
            {
                console.log(a/b);
            }
            else{
                    console.log("can't divide by 0");
            }
            break;
    }
}

calculator(10,20);


/*Do the following.
● Create a function to sum two numbers and return the value.
● Create a function to generate a random number between 0 to 10
● Pass two values to the sum function, But first value should be passed by the user and the
second value should be generated by a random function.*/


function find_sum(a,b)
{
    return a+b;
}

function generate()
{
    return Math.floor(Math.random()*10);
}

let a=prompt("Enter the input","0");
let b=Number(a);
let ans=find_sum(b,generate());

console.log(ans);


/*Write a Program to print a Countdown in console from 10 to 1.. and finally print "Happy Birthday"*/


function print_happy_bithday(st)
{
    console.log(st);
}

function happy_birthday(ab,cb)
{
    for(let i=10;i>0;i--)
    {
        setTimeout(function(){console.log(i);},1000);
    }
    setTimeout(function() {cb(ab);},1000);
    
}

happy_birthday("Happy Birthday",print_happy_bithday);