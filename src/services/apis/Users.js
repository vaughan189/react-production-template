// import { authHeader } from '../_helpers';

const login = async (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    requestOptions
  );
  const user = await handleResponse(response);
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem('user', JSON.stringify(user.data));
  localStorage.setItem('token', user.token);
  return user.data;
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader(),
//   };

//   return fetch(`/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
//     handleResponse
//   );
// }

// function register(user) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//   };

//   return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
//     handleResponse
//   );
// }

// function update(user) {
//   const requestOptions = {
//     method: 'PUT',
//     headers: { ...authHeader(), 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//   };

//   return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
//     handleResponse
//   );
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   const requestOptions = {
//     method: 'DELETE',
//     headers: authHeader(),
//   };

//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
//     handleResponse
//   );
// }

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export { login, logout };