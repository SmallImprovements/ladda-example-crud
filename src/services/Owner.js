import shortid from 'shortid';

const KEY = 'ladda-example-crud-owner-id';

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

export function createId() {
  const storage = getStorage();
  const id = shortid.generate();
  if (storage) {
      storage.setItem(KEY, id);
  }
  return id;
}
