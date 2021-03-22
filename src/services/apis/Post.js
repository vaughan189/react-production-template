import { authHeader, logout } from '../../utils/Auth';
import History from '../../routes/History';

const getAll = async () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${process.env.REACT_APP_API_URL}/post`, requestOptions).then(
    handleResponse
  );
};

const getById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/post/${id}`,
    requestOptions
  ).then(handleResponse);
};

const create = async (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(`${process.env.REACT_APP_API_URL}/post`, requestOptions).then(
    handleResponse
  );
};

const updateById = async (user) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/post/${user.id}`,
    requestOptions
  ).then(handleResponse);
};

const deleteById = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/post/${id}`,
    requestOptions
  ).then(handleResponse);
};

const handleResponse = async (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        History.push('/login');
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

export { getAll, getById, create, updateById, deleteById };
