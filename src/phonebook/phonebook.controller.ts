import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { CreatePhonebookDto } from './dto/create-phonebook.dto';
import { uuid, UpdatePhonebookDto } from './dto/update-phonebook.dto';
import { IPhonebook } from './phonebook.model';
import { PaginateDto } from './dto/paginate.dto';
import { PaginatedPhonebookResultDto } from './dto/get-phonebook.dto';

@Controller('phonebook')
export class PhonebookController {
  constructor(private phonebookService: PhonebookService) {}

  @Post()
  create(@Body() createPhonebookDto: CreatePhonebookDto): Promise<IPhonebook> {
    return this.phonebookService.create(createPhonebookDto);
  }

  @Get()
  findAll(@Query() paginationDto?: PaginateDto): Promise<PaginatedPhonebookResultDto> { 
    return this.phonebookService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id) {
    return this.phonebookService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id, @Body() updatePhonebookDto: UpdatePhonebookDto) {
    return this.phonebookService.update(id, updatePhonebookDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id) {
    return this.phonebookService.remove(id);
  }
}
