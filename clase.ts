class Person {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hi, I'm " + this.name + "!");
    }
}

let personA = new Person("Sally");
personA.introduceSelf();

personA.name = "Mindy";

personA.introduceSelf();