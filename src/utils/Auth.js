const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const isAuth = () => {
  return localStorage.getItem('token');
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
};

export { isAuth, logout, authHeader };
