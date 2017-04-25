import axios from 'axios';
import { ROOT } from 'basic/constants/paths';

const BASE_URL = `${ROOT}/api/activities`;
const getData = (response) => response.data;

getActivities.operation = 'READ';
export function getActivities(ownerId) {
  return axios.get(BASE_URL, { params: { ownerId } }).then(getData);
}

