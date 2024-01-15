import sendRequest from './send-request.js';

const BASE_URL = '/api/favorites';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addFav(id, favtext) {
  return sendRequest(`${BASE_URL}/${id}`, 'POST', {id, favtext});
}