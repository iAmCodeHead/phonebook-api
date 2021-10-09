import { contactStub } from "../test/stubs/contact.stub";

export const PhonebookService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(contactStub()),
    findAll: jest.fn().mockResolvedValue({data : [contactStub()]}),
    findOne: jest.fn().mockResolvedValue(contactStub()),
    update: jest.fn().mockResolvedValue(contactStub()),
    remove: jest.fn().mockResolvedValue(contactStub())
})