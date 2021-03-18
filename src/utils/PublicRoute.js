import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../utils/Auth';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Redirect to={`/home`} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
