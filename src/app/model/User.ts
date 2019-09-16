export class User {

    userId: number;
     name: String;
     gender: String;
     email: String;
     password: String;
     address: String;
     contactNumber: String;
     role: String;
 
     constructor(name,gender,email,password,address,contactNumber,role) {
         this.name = name;
         this.gender = gender;
         this.email = email;
         this.password = password;
         this.address = address;
         this.contactNumber = contactNumber;
         this.role = role;
     
        
     }
  }