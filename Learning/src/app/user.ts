export class User {
 
    id: number;
    fname :string;
    lname :string;
    email: string;
    //Both the passwords are in a single object
    password: string;
    address : string;
    state : string;
    city : string;
    pincode :  number;
   
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}