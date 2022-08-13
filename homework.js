class Hamster {
    constructor(owner, name){
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }

wheelRun() {
    console.log('squeak squeak');
}

eatFood() {
    console.log('nibble nibble');
}

getPrice(hamster){
    console.log(`${this.price}`);
    return this.price;
}
}
class Person  {
    constructor(name){
;
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

getName(){
    console.log(`${this.name}`);
    return this.name;
}
getAge(){
    console.log(`${this.age}`)
    return this.age;
}
getWeight(){
    console.log(`${this.weight}`)
    return this.weight;
}
greet (){
    console.log(`${this.name}!`);
}

eat(){
    this.weight++;
    this.mood += 1;
}

exercise(){
    this.weight--;
}
ageUP(){
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
}

buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();  
}
}

//Creating Timmy's story

const tim = new Person('Timmy');   //1.Instantiate a new Person named Timmy

for (let i = 1; i <= 5; i++){     //2. Age Timmy 5 years
    tim.ageUP();
    
}

console.log(tim)

tim.eat();                          //3. Have him eat 5 times
tim.eat();
tim.eat();
tim.eat();
tim.eat();
console.log(tim)

tim.exercise();                     //4.  Have him exercise 5 times
tim.exercise();
tim.exercise();
tim.exercise();
tim.exercise();
console.log(tim);

for (let i = 6; i <= 9; i++){       //5. age Timmy 9 years
    tim.ageUP();
    console.log(tim)
}

const Gus = new Hamster('Tommy', 'Gus')  //6. create a hamster names "Gus"
console.log(Gus.price)
console.log(Gus.owner)
console.log(Gus.name)
Gus.wheelRun()
Gus.eatFood()
Gus.getPrice()


Gus.owner = 'Timmy'                 //7.  Set Gus's owner to the string "Timmy"

tim.buyHamster(Gus)                 //8. have Timmy 'buy' Gus
console.log(tim)


for (i = 10; i <=15; i++){          //9.  Age Timmy 15 years
    tim.ageUP();
    console.log(tim);
}

tim.eat();                          //10. Have Timmy eat twice
tim.eat();
console.log(tim)


tim.exercise();                     //11. Have Timmy exercise twice
tim.exercise();
console.log(tim)

// Chef make dinners - chef should be a factory of dinner

class Dinner {
    constructor (appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}


class Chef {
    constructor (name) {
        this.name = name;
        this.dinners = [];
    }
    makeDinner(appetizer, entree, dessert){
        const newDinner = new Dinner (appetizer, entree, dessert)
        this.dinners.push(newDinner)
    }
}

const dew = new Chef ('Dew')        //Instantiate a new Chef named Dew
console.log(dew)

dew.makeDinner('chicken satay', 'green curry and rice', 'vanilla ice cream')
console.log(dew)




