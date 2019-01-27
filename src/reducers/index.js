import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//libraries and selectLibraryId are states
//whcih will be returned by the respective Reducers when the app boot up
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
