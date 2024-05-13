import { createStore, combineReducers, applyMiddleware } from "redux";
import { compositeWithDevTools } from " redux-devtools-extension";
import thunk from "redux-thunk";

// Your reducers will go into combineReducers
const rootReducer = combineReducers({});

// Define the type for your state
type RootState = ReturnType<typeof rootReducer>;

// Define middleware
// const middleware: Middleware<{}, RootState> = applyMiddleware(
//     thunk as ThunkMiddleware<RootState>
// );

// Set an initial state if needed
const initialState: RootState = {};

// Create the store
const store = createStore(rootReducer, initialState);

export default store;
