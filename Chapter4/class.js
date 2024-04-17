class ToyotaCar {
    constructor(brand,mileage){
        console.log('Creating new object');
        this.brand  = brand;
        this.mileage = mileage;
    }

    start(){
        console.log('Start');
    }

    stop(){
        console.log('Stop');
    }
}

let fortuner = new ToyotaCar('fortuner', 10);
console.log(fortuner);

//Inheritence
