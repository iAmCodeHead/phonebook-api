import { Brackets, EntityRepository, Repository } from "typeorm";
import { CreatePhonebookDto } from "./dto/create-phonebook.dto";
import { PaginatedPhonebookResultDto } from "./dto/get-phonebook.dto";
import { PaginateDto } from "./dto/paginate.dto";
import { UpdatePhonebookDto } from "./dto/update-phonebook.dto";
import { Phonebook } from "./entities/phonebook.entity";

@EntityRepository(Phonebook)
export class PhonebookRepository extends Repository<Phonebook> {
    async createContact(contact: CreatePhonebookDto): Promise<Phonebook> {

        return await this.save(contact);
        
    }

    async updateContact(updatedContact: UpdatePhonebookDto): Promise<Phonebook> {

        return await this.save(updatedContact);
        
    }

    async getAllContacts(paginationDto: PaginateDto): Promise<PaginatedPhonebookResultDto> {
        
        const skippedItems = (paginationDto.page - 1) * paginationDto.limit;
        
        const totalCount = await this.count();
    
        const query =  this.createQueryBuilder('phonebook');

        const search = paginationDto.search;

        const dateFilter = paginationDto.date;

        let data: Phonebook[];

        let modifiedQuery: any;

            if(search && dateFilter){

                modifiedQuery = query.where(`DATE_TRUNC('day',phonebook.created_at) = :date`,
                { date: dateFilter})
                .andWhere(
                    `LOWER(phonebook.name) LIKE LOWER(:search) OR \
                     LOWER(phonebook.email) LIKE LOWER(:search) OR \
                     phonebook.phone_number LIKE :search`,
                    { search: `%${search}%` });


            } else if(search && !dateFilter){

                modifiedQuery = query.where(
                    'LOWER(phonebook.name) LIKE LOWER(:search) OR \
                     LOWER(phonebook.email) LIKE LOWER(:search) OR \
                     phonebook.phone_number LIKE :search',
                    { search: `%${search}%`})

            } else if(!search && dateFilter) {

                modifiedQuery = query.andWhere(`DATE_TRUNC('day',phonebook.created_at) = :date`,
                { date: dateFilter})

            }
        
            data = await modifiedQuery.orderBy('created_at', "DESC")
            .offset(skippedItems)
            .limit(paginationDto.limit).getMany();

        return { totalCount, page: paginationDto.page, limit: paginationDto.limit, data }
    }

}