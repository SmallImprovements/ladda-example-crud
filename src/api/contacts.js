import axios from 'axios';
import { ROOT } from 'constants/paths';

const BASE_URL = `${ROOT}/api/contacts`;
const extractData = (response) => response.data;

getContacts.operation = 'READ';
export function getContacts(ownerId) {
  return axios.get(BASE_URL, { params: { ownerId } }).then(extractData);
}

getContact.operation = 'READ';
export function getContact(id) {
  return axios.get(`${BASE_URL}/${id}`).then(extractData);
}

updateContact.operation = 'UPDATE';
export function updateContact(contact) {
  return axios.patch(`${BASE_URL}/${contact.id}`, contact).then(extractData);
}

createContact.operation = 'CREATE';
export function createContact(contact) {
  return axios.post(BASE_URL, contact).then(extractData);
}

deleteContact.operation = 'DELETE';
export function deleteContact(contact) {
  return axios.delete(`${BASE_URL}/${contact.id}`).then(extractData);
}
