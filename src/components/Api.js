class Api {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  _sendRequest(method, route, body) {
    return fetch(this._baseUrl + route, {
      method: method,
      headers: {
        'Authorization': this._authToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return this._sendRequest('GET', '/users/me');
  }

  setUserInfo(name, about) {
    return this._sendRequest('PATCH', '/users/me', { name, about });
  }

  getInitialCards() {
    return this._sendRequest('GET', '/cards');
  }

  createCard(name, link) {
    return this._sendRequest('POST', '/cards', { name, link });
  }

  deleteCard(cardId) {
    return this._sendRequest('DELETE', `/cards/${cardId}`);
  }

  likeCard(cardId) {
    return this._sendRequest('PUT', `/cards/likes/${cardId}`);
  }

  unlikeCard(cardId) {
    return this._sendRequest('DELETE', `/cards/likes/${cardId}`);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
  authToken: '4ae18a0d-219b-4b69-acec-20d1c5775e6d',
});

export default api
