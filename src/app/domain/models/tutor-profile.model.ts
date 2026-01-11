import { TutorCard } from "../../find-tutor/card/tutor-card/tutor-card";
import { BaseTutor } from "./base-tutor.model";


export interface TutorProfile extends TutorCard{
    aboutMe: string;
    mediaList: string[];

    phoneNumber: string;

  subjects: string[];

}