
class ListComponent {
    // Adding a property is as simpleas adding its name and type
    //   at the top of the class.
    things : Array<ListItem>; // Or -- things : ListItem[];
    constructor () {
        this.things = []; 
    }
}

class ListItem {
    name : string;
    constructor (name) {
        this.name = name;
    }
}

interface User {
    name : string;
    email : string;
    avatar? : Object;
}

class RegisteredUser implements User {

    constructor (public name : string, public email : string) { }

}

class ImageUser implements User {

    constructor (public name : string,
        public email : string,
        public avatar : Object) { }

}

interface Mover {  
    move(): void;  
    getStatus(): { speed: number; };  
}

interface Shaker {  
    shake(): void;  
    getStatus(): { frequency: number; };  
}

// extends Mover and Shaker
// because mover and shaker have the same getStatus property,
//  it must be declared in the subtype 

interface MoverShaker extends Mover, Shaker {  
    getStatus(): { speed: number; frequency: number; };  
}

