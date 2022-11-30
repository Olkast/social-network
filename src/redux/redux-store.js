import { combineReducers, legacy_createStore} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBarReducer";

const reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
})

const store = legacy_createStore(reducers);


export default store;