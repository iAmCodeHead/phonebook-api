import { Phonebook } from "../entities/phonebook.entity";

export class PaginatedPhonebookResultDto {
    data: Phonebook[];
    page: number;
    limit: number;
    totalCount: number;
}