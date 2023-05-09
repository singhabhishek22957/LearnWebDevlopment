/**
 * Create a class called Car with three properties: company, model, and year. The class should have a method 
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an 
instance of the Car class and call the getDescription method
 */


class CarCollection{
    company;
    model;
    year;

    constructor(y,c,m){
        this.year=y
        this.company=c
        this.model=m
    }


    getDiscription(){
        const dis =`This is a ${this.year} ${this.company} ${this.model} `
        return dis;
    }
}

const myCar= new CarCollection(2022,"Tata Motars","Safari")

console.log(myCar.getDiscription());  //  This is a 2022  Tata Motars Safari 