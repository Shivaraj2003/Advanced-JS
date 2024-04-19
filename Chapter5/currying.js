//Normal functions
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1,2,3));

//currying function
function sumCurry(a){
    return (b)=>{
        return(c) =>{
            return a+b+c;
        }
    }
}

console.log(sumCurry(10)(20)(30));

//Partial function
function sumPartial(a){
    return (b,c)=>{
            return a+b+c;
    }
}

console.log(sumPartial(100)(200,300));

