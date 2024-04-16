

function happy()
{
    console.log('I am good');
}
happy()

function add(a,b)
{
    return a+b;
}
console.log(add(10,10));

//Function expression
var msg = function()
            {
                console.log('hii');
            }
msg();

//IIFE
(function(a,b)
{
    console.log("The answer is "+(a+b));
})(10,2)

//call
let animal={
    name:'dog',
    eat(a,b){
        console.log(this.name+' is eating '+a+' '+b);
    }
};
let human= {
    name:'ravi',
    
}
animal.eat(5,'bones');
animal.eat.call(human,2,'chips');

let human_eat = animal.eat.bind(human);
human_eat(3,'apples')
