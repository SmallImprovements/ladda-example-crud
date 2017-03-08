import { build } from 'ladda-cache';
import * as contacts from './contacts';

const config = {
    contacts: {
        api: contacts
    }
};

export default build(config);
