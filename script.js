class Person {
    constructor(desire){
        this.desire= desire;
    }
        question(){
            if(this.desire > 2)
            {console.log("I would love to talk!")}
            else
            {console.log("I do not want to talk!")}
    }
}

let david = new Person(3);

david.question();

let john = new Person(1);

john.question();

let josh = new Person(1);

josh.question();