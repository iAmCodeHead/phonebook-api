import { PhonebookDto } from "./phonebook.dto";

export class PaginatedPhonebookResultDto {
    data: PhonebookDto[];
    page: number;
    limit: number;
    totalCount: number;
}