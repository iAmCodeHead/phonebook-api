import { ApiProperty } from "@nestjs/swagger";

export class PhonebookDto {
    @ApiProperty({
        description: 'This is the ID of the contact',
        default: 'This is a fake ID'
    })
    id: string;

    @ApiProperty({
        description: 'This should be the contact name',
        default: 'Samson Akande'
    })
    name: string;

    @ApiProperty({
        description: 'This should be the contact phone number',
        default: '08148404629'
    })
    phone_number: string;
    
    @ApiProperty({
        description: 'This should be the contact address',
        default: 'Abuja'
    })
    address: string;
    
    @ApiProperty({
        description: 'This should be the contact email address',
        default: 'akandesamson12@gmail.com'
    })
    email: string;
}
