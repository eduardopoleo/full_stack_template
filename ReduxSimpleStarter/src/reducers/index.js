import { combineReducers } from 'redux';
import ArticlesReducer from './articles_reducer';

const rootReducer = combineReducers({
  articles: ArticlesReducer
});

export default rootReducer;
