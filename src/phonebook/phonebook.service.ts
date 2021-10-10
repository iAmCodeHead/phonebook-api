import { Injectable, NotFoundException } from '@nestjs/common';
import { ErrorMessages } from 'src/utils/error.message';
import { CreatePhonebookDto } from './dto/create-phonebook.dto';
import { PaginatedPhonebookResultDto } from './dto/get-phonebook.dto';
import { PaginateDto } from './dto/paginate.dto';
import { UpdatePhonebookDto, uuid } from './dto/update-phonebook.dto';
import { IPhonebook } from './phonebook.model';
import { PhonebookRepository } from './phonebook.repository';

@Injectable()
export class PhonebookService {
  

  constructor(private phonebookRepository: PhonebookRepository){}

  async create(createPhonebookDto: CreatePhonebookDto): Promise<IPhonebook> {

    return await this.phonebookRepository.createContact(createPhonebookDto);

  }

  async findAll(paginationDto: PaginateDto): Promise<PaginatedPhonebookResultDto> {

    paginationDto.page = 
    (!paginationDto.page || Number(paginationDto.page) <= 0) 
    ? 1 : 
    Number(paginationDto.page);

    paginationDto.limit = 
    (!paginationDto.limit || paginationDto.limit > Number(process.env.PAGE_LIMIT)) 
    ? Number(process.env.PAGE_LIMIT) : 
    Number(paginationDto.limit);

    return await this.phonebookRepository.getAllContacts(paginationDto);

  }

  async findOne(id: uuid): Promise<IPhonebook> {

    const found = await this.phonebookRepository.findOne(id);

    if(!found) {

        throw new NotFoundException(ErrorMessages.isNotFound('Contact'));

    }

    return found;

  }

  async update(id: uuid, updatePhonebookDto: UpdatePhonebookDto) {

    await this.findOne(id);

    const updatedContact = await this.phonebookRepository.updateContact(updatePhonebookDto);

    return updatedContact;

  }

  async remove(id: uuid): Promise<void> {
    
    const result = await this.phonebookRepository.softDelete(id);
    
    if(result.affected === 0) {

        throw new NotFoundException(ErrorMessages.isNotFound('Contact'));

    }

  }
}
