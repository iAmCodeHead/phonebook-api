import { PartialType } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { CreatePhonebookDto } from "./create-phonebook.dto";

export class UpdatePhonebookDto extends PartialType(CreatePhonebookDto) {
    name?: string;
    phone_number?: string;
    address?: string;
    email?: string;
}

export class uuid {
    @IsUUID("all")
    id: string
}