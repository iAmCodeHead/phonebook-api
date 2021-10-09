import { IsUUID } from "class-validator";

export class UpdatePhonebookDto {
    name?: string;
    phone_number?: string;
    address?: string;
    email?: string;
}

export class uuid {
    @IsUUID("all")
    id: string
}