class Hamster {
    constructor(owner, name, price){
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
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
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
    console.log(`{this.age}`)
    return this.age;
}
getWeight(){
    console.log(`{this.weight}`)
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
//1.Instantiate a new Person named Timmy
const tim = new Person('Timmy'); 

//2. Age Timmy 5 years
for (let i = 1; i <= 5; i++){
    tim.ageUP();
    console.log(tim)
}

console.log(tim)
//3. Have him eat 5 times
tim.eat();
tim.eat();
tim.eat();
tim.eat();
tim.eat();
console.log(tim)

//4.  Have him exercise 5 times
tim.exercise();
tim.exercise();
tim.exercise();
tim.exercise();
tim.exercise();
console.log(tim);

//5. Age Timmy 9 years

for (let i = 6; i <= 9; i++){
    tim.ageUP();
    console.log(tim)
}
//6.  Create a hampster names "Gus"
const Gus = new Hamster('Timmy', 'Gus');
console.log(Gus.price)
console.log(Gus.owner)
console.log(Gus.name)
Gus.wheelRun()
Gus.eatFood()
Gus.getPrice()


//7.  Set Gus's owner to the string "Timmy"
// see #6 above.

//8. have Timmy 'buy' Gus

tim.buyHamster(Gus)
console.log(tim)


//9.  Age Timmy 15 years

for (i = 10; i <=15; i++){
    tim.ageUP();
    console.log(tim);
}

//10. Have Timmy eat twice
tim.eat();
tim.eat();
console.log(tim)

//11. Have Timmy exercise twice
tim.exercise();
tim.exercise();
console.log(tim)

// Chef make dinners - chef is a factory of dinner

const dinnerFactory = (appetizer, entree, dessert) => {
    return {
        appetizer: appetizer,
        entree: entree,
        dessert: dessert,
        cook() {
            console.log(appetizer, entree, dessert );
        }
    };
        
    };
                 
const chef =  dinnerFactory('satay', 'shrimp fried rice', 'strawberry ice cream');
console.log(chef)                                                                       
chef.cook(); 

// class Chef {
//     constructor(restaurant){
//         this.restaurant = restaurant;
//         this.dinners = [];
//     }
//     cookDinner() {
//         const newDinner = new Dinner(this.restaurant, this.dinners.length);
//         this.dinners.push(newDinner);
//     }
// }
// const appetizer = new Chef('satay');

// appetizer.cookDinner();
// console.log(appetizer)



