import sendRequest from './send-request.js';

const BASE_URL = '/api/products';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}