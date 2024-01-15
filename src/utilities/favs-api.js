import sendRequest from './send-request.js';

const BASE_URL = '/api/favorites';

export function getFavorites() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addFav(id, favtext) {
  return sendRequest(`${BASE_URL}/${id}`, 'POST', {id, favtext});
}

export function updateFavorite(id, favtext) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', {id, favtext});
}

export function deleteFavorite(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE', {id});
}