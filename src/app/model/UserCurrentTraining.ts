export class UserCurrentTraining
{ 
    id: number;
    userMailId: string;
    mentorMailId: string;
    courseName: string;
    endTime: string;

    constructor(usermailId,mentorMailId,courseName,endTime)
    {
        this.userMailId = usermailId;
        this.mentorMailId = mentorMailId;
        this.courseName = courseName;
        this.endTime = endTime;
    }
}