import { build } from 'ladda-cache';
import * as contacts from './contacts';

const config = {
  contacts: {
    api: contacts,
    ttl: 300
  }
};

export default build(config);
