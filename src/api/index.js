import { build } from 'ladda-cache';
import * as contacs from './contacts';

const config = {
    contacts: {
        api: contacts
    }
};

export default build(config);
