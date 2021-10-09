import { Test, TestingModule } from '@nestjs/testing';
import { CreatePhonebookDto } from '../dto/create-phonebook.dto';
import { UpdatePhonebookDto } from '../dto/update-phonebook.dto';
import { PhonebookController } from '../phonebook.controller';
import { IPhonebook } from '../phonebook.model';
import { PhonebookService } from '../phonebook.service';
import { contactStub, paginatedContactStub } from './stubs/contact.stub';

jest.mock('../phonebook.service');

describe('PhonebookController', () => {
  let controller: PhonebookController;
  let service: PhonebookService;


  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [PhonebookController],
      providers: [PhonebookService],
    }).compile();

    controller = module.get<PhonebookController>(PhonebookController);
    service = module.get<PhonebookService>(PhonebookService);
    jest.clearAllMocks();

  });

  describe('getContact', () => {
    describe('when findOne is called', () => {

      let contact: IPhonebook;

      beforeEach(async () => {
        contact = await controller.findOne(contactStub().id)
      })

      test('then it should call the phonebook service', () => {
        expect(service.findOne).toBeCalledWith(contactStub().id);
      })

      test('then it should return a contact', () => {
        expect(contact).toEqual(contactStub());
      })
    })
  });

  describe('getContacts', () => {
    describe('when findAll is called', () => {

      let phonebook;

      beforeEach(async () => {
        phonebook = await controller.findAll()
      })

      test('then it should call the phonebook service', () => {
        expect(service.findAll).toHaveBeenCalled();
      })

      test('then it should return contacts', () => {        
        expect(phonebook).toEqual(paginatedContactStub());
      })
    })
  });

  describe('createContact', () => {
    describe('when create is called', () => {

      let newContact: IPhonebook;

      let createContact: CreatePhonebookDto;

      beforeEach(async () => {
        createContact = {
          name: contactStub().name,
          phone_number: contactStub().phone_number,
          address: contactStub().address,
          email: contactStub().email
        };
       
        newContact = await controller.create(contactStub())
        
      })

      test('then it should call the phonebook service', () => {
        expect(service.create).toHaveBeenCalled();
      })

      test('then it should return a contact', () => {        
        expect(newContact).toEqual(contactStub());
      })
    })
  });

  describe('updateContact', () => {
    describe('when update is called', () => {
      let newUpdate: IPhonebook;

      let updateContact: UpdatePhonebookDto;

      beforeEach(async () => {
        updateContact = {
          name: "Cole Carla",
          email: "mailer@domain.com",
          address: "Golden Pearls Estate, 16 Kayode Oni Animashaun St, Eti-Osa 101233, Sangotedo"
        };

        newUpdate = await controller.update(contactStub().id, updateContact)

      })

      test('then it should call the phonebook service', () => {
        expect(service.update).toHaveBeenCalledWith(contactStub().id, updateContact);
      })

      test('then it should return updated contact', () => {
        expect(newUpdate).toEqual(contactStub());
      })

    })
  })

  describe('deleteContact', () => {
    describe('when delete is called', () => {

      let deleteContact: void;

      beforeEach(async () => {
        deleteContact = await controller.remove(contactStub().id)
      })

      test('then it should call the phonebook service', () => {
        expect(service.remove).toBeCalledWith(contactStub().id);
      })

    })
  })
  
});
