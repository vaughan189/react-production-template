import { combineReducers } from 'redux';
// import lang from "../Lang/LangReducer";
// import loader from "../Loader/LoaderReducer";
import Snackbar from './SnackBar/Reducer';
import Login from './Login/Reducer';
import Home from './Home/Reducer';

export default combineReducers({ Login, Snackbar, Home });
