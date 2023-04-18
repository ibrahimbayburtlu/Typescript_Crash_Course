class Customer{
    constructor(private _firstName:string ,private _lastName:string){
    }

    // getter /setter

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName = value;
    }

    public get lastName():string{
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }
}

// let's create an instance

let myCustomer = new Customer("Martin","Dixon");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);