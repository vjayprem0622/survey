// reducers/index.js
import { combineReducers } from 'redux';
import login from './login';
import dashboard from './dashboard';
import rationDetails from './rationDetails';
import gender from './gender';
import economicCategories from './economicCategories';
import residentList from './resident';
import relations from './relations';
import qualifications from './qualifications';
import occupations from './occupations';
import formData from './formData';
import religion from './religion'
import social_categories from './SocialCategories';
import district_reducer from './district';
import municipality_reducer from './municipality';
import ward_reducer from './ward';
import familyDetail from './familyDetail';
import familiesList from './familiesList';
import familiesDetail from './familiesDetailApi';

const rootReducer = combineReducers({
  login,
  dashboard,
  rationDetails,
  gender,
  economicCategories,
  residentList,
  relations,
  qualifications,
  occupations,
  formData,
  religion,
  social_categories,
  district_reducer,
  municipality_reducer,
  ward_reducer,
  familyDetail,
  familiesList,
  familiesDetail

});

export default rootReducer;
