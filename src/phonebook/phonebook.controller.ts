import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { CreatePhonebookDto } from './dto/create-phonebook.dto';
import { uuid, UpdatePhonebookDto } from './dto/update-phonebook.dto';
import { IPhonebook } from './phonebook.model';
import { PaginateDto } from './dto/paginate.dto';
import { PaginatedPhonebookResultDto } from './dto/get-phonebook.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PhonebookDto } from './dto/phonebook.dto';

@ApiTags()
@Controller('phonebook')
export class PhonebookController {
  constructor(private phonebookService: PhonebookService) {}

  @Post()
  create(@Body() createPhonebookDto: CreatePhonebookDto): Promise<IPhonebook> {
    return this.phonebookService.create(createPhonebookDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'All Contacts successfully found.',
    type: PaginatedPhonebookResultDto,
  })
  findAll(@Query() paginationDto?: PaginateDto): Promise<PaginatedPhonebookResultDto> { 
    return this.phonebookService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Contact successfully found.',
    type: PhonebookDto,
  })
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
