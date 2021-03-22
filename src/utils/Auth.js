const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const isAuth = () => {
  return localStorage.getItem('token');
};

const authHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Auth: token };
  } else {
    return {};
  }
};

export { isAuth, logout, authHeader };
