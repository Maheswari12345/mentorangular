export class Mentor {
    mentorId: number;
    name: String;
    email: string;
    password: string;
    address: String;
    slotTime: String;
    technology: String;
    experience: String;
    selfRating: String;
    contactNumber: String;
    regDateTime: String;
   
    role: String;
    status: String;
 
    
    constructor(name,email,password,address,slotTime,technology,experience,selfRating,contactNumber,regDateTime,role,status) {
       

        this.name = name;
       this.email = email;
       this.password = password;
       this.address = address;
       this.slotTime = slotTime;
       this.technology = technology;
       this.experience = experience;
       this.selfRating = selfRating;
       this.contactNumber = contactNumber;
       this.regDateTime = regDateTime;
       this.status = status;
       
       this.role = role;
   
      
   }
 }