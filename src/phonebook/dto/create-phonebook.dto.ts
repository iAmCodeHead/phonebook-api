import { IsNotEmpty } from "class-validator";

export class CreatePhonebookDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phone_number: string;
    
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    email: string;
}

