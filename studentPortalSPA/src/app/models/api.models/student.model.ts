import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student{
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    mobile: number;
    profileImageUrl?: any;
    genderId: string;
    gender: Gender;
    address: Address;
}