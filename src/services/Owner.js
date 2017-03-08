import shortid from 'shortid';
import axios from 'axios';

import { ROOT } from 'constants/paths';

const KEY = 'ladda-example-crud-owner-id-v1';

function getStorage() {
  return window.localStorage; // eslint-disable-line no-undef
}

export function getId() {
  const storage = getStorage();
  if (!storage) {
      return null;
  }
  return storage.getItem(KEY);
}

export function setup() {
  const id = createId();
  return createSampleContent(id);
}

function createId() {
  const storage = getStorage();
  const id = shortid.generate();
  if (storage) {
      storage.setItem(KEY, id);
  }
  return id;
}

function createSampleContent(id) {
  return axios.post(`${ROOT}/api/contacts/createSample/${id}`);
}
