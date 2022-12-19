import { combineReducers } from 'redux';
import { articles } from './articles.js';
import { dictionary } from './dictionary';

export const reducers = combineReducers({ articles, dictionary });
