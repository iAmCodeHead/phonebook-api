import { PickType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { PhonebookDto } from "./phonebook.dto";

export class CreatePhonebookDto extends PickType(PhonebookDto, [
    'name', 'phone_number', 'address', 'email' as const 
]) {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumberString()
    phone_number: string;
    
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}

