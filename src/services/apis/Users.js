import { logout, authHeader } from '../../utils/Auth';

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

const getAllUsers = async () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`/users`, requestOptions).then(handleResponse);
};

const getUserById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/users/${id}`,
    requestOptions
  ).then(handleResponse);
};

const registerUser = async (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/register`,
    requestOptions
  );
  return handleResponse(response);
};

const updateUser = async (user) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${user.id}`,
    requestOptions
  );
  return handleResponse(response);
};

const deleteUserById = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${id}`,
    requestOptions
  );
  return handleResponse(response);
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export {
  login,
  logout,
  getAllUsers,
  getUserById,
  registerUser,
  updateUser,
  deleteUserById,
};
