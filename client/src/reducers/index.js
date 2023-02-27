import { combineReducers } from 'redux';
import { slowLoading } from './slowLoading';
import { dictionary } from './dictionary';
import { articles } from './articles';

export const reducers = combineReducers({ articles, dictionary, slowLoading });
