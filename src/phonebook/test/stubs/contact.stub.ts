import { IPhonebook } from 'src/phonebook/phonebook.model';
import { v4 as uuid } from 'uuid';

const id = uuid();

const sampleContact = {
    id,
    name: 'Test name',
    phone_number: '08148404629',
    address: '43, Aliyu modibo street. Abuja',
    email: "akandesamson12@gmail.com"
};

export const contactStub = (): IPhonebook => {
    return sampleContact;
}

export const paginatedContactStub = () => {
    return {
        data: [sampleContact]
    }
}