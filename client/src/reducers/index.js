import { combineReducers } from 'redux';
import { dictionary } from './dictionary';
import { articles } from './articles.js';

export const reducers = combineReducers({ articles, dictionary });
