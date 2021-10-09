import { Module } from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { PhonebookController } from './phonebook.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhonebookRepository } from './phonebook.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PhonebookRepository])],
  controllers: [PhonebookController],
  providers: [PhonebookService]
})
export class PhonebookModule {}
