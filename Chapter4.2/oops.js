class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    getName = () =>{
        return this.name;
    };
     getAge = () =>{
        return this.age;
    };
}

let Person1 = new Person('Shivaraj',21);
console.log(Person1.age);


//abstraction
console.log('Abstraction example');
class Triangle
 {
    constructor(aVal, bVal, cVal)
    {
        this.a = aVal;
        this.b = bVal;
        this.c = cVal;
    }

    calcArea()
    {
        // Get triangles side:
        let a = this.a;
        let b = this.b;
        let c = this.c;

        // Calculate Area
        let p = (a + b + c) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        return area;
    }
}

let triangle = new Triangle(3, 4, 5);
console.log("Area = " + triangle.calcArea());