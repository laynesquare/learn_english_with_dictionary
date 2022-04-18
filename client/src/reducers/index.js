import { combineReducers } from 'redux';

import { articles } from './articles.js';
import { keyword } from './keyword.js';

export const reducers = combineReducers({ articles, keyword });
