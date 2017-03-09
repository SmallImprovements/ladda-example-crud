import axios from 'axios';
import { ROOT } from 'constants/paths';

const BASE_URL = `${ROOT}/api/contacts`;
const getData = (response) => response.data;

getContacts.operation = 'READ';
export function getContacts(ownerId) {
  return axios.get(BASE_URL, { params: { ownerId } }).then(getData);
}

getContact.operation = 'READ';
getContact.byId = true;
export function getContact(id) {
  return axios.get(`${BASE_URL}/${id}`).then(getData);
}

updateContact.operation = 'UPDATE';
export function updateContact(contact) {
  return axios.patch(`${BASE_URL}/${contact.id}`, contact).then(getData);
}

createContact.operation = 'CREATE';
createContact.invalidates = ['getContacts'];
export function createContact(contact) {
  return axios.post(BASE_URL, contact).then(getData);
}

deleteContact.operation = 'DELETE';
export function deleteContact(id) {
  return axios.delete(`${BASE_URL}/${id}`).then(getData);
}
