export class UserPayment
{
paymentId: number;
trainingId: number;
userMailId: string;
mentorMailId: string;
courseName: String;
amount: number;

constructor(trainingId,userMailId,mentorMailId,courseName,amount)
{
    this.trainingId = trainingId;
    this.userMailId = userMailId;
    this.mentorMailId = mentorMailId;
    this.courseName = courseName;
    this.amount = amount;
}

}