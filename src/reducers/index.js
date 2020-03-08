import { combineReducers } from 'redux';
import weixin from './weixin';
import login from './login';

export default combineReducers({
  weixin: weixin,
  login: login
});