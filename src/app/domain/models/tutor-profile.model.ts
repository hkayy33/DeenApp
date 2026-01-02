import { BaseTutor } from "./base-tutor.model";


export interface TutorProfile extends BaseTutor{
    aboutMe: string;
    mediaList: string[];
    contactInfo: {
    phoneNumber: string;
    email: string;
    };
  subjects: string[];

}