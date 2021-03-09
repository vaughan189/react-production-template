import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../utils/Auth';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuth() ? <Redirect to={`/home`} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
