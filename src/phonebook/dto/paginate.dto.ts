import { IsDateString, IsNumberString, IsOptional, IsString } from "class-validator";

export class PaginateDto {

    @IsOptional()
    @IsNumberString()
    page?: number;

    @IsOptional()
    @IsNumberString()
    limit?: number;

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsDateString()
    date?: Date;

}