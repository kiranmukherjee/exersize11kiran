// let steve= {
//     desire: "Wants to talk"
// }
// let john= {
//     desire: "Does not want to talk"
// }
// let james= {
//     desire: "Does not want to talk"
// }



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