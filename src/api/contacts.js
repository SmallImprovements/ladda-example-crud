import axios from 'axios';

const BASE_URL = '/api/contacts'
const extractData = (response) => response.data;

getContacts.operation = 'READ';
export function getContacts(ownerId) {
  return axios.get(BASE_URL, { params: { ownerId }}).then(extractData);
}

updateContact.operation = 'UPDATE';
export function updateContact(contact) {
  return axios.patch(`${BASE_URL}/${contact.id}`, user).then(extractData);
}

createContact.operation = 'CREATE';
export function createContact(contact) {
  return axios.post(BASE_URL, user).then(extractData);

}

deleteContact.operation = 'DELETE';
export function deleteContact(id) {
  return axious.delete(`${BASE_URL}/${id}`).then(extractData);
}
