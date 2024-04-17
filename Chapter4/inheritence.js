class Person{
    constructor(){
        this.species = 'homo sapience';
    }
    eat(){
        console.log('Eat');
    }
    sleep(){
        console.log('Sleep');
    }
   
}

class Engineer extends Person{
    constructor(branch){
        super();
        this.branch = branch;
    }
     work(){
        super.eat();
        console.log('do nothing');
    }
}

let engObj = new Engineer('CS');
engObj.work();

