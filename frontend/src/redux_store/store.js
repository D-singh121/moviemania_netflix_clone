
// Import necessary functions from Redux Toolkit
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Import individual reducers for different parts of the state
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchMovieReducer from './searchMovieSlice'

// Import functions for Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
	auth: userReducer,
	movies: moviesReducer,
	searchMovie: searchMovieReducer,
})

// Configure Persist settings
const persistConfig = {
	key: "root", // key name can be anything.
	storage,  // Use default localStorage
	whitelist: ["auth"] // Only persist the "auth" slice of state
};

// Create a persisted reducer using the root reducer and Persist config
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the Redux store using the persisted reducer
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),   // Disable serializability check 
});

// Create the persistor for managing persisted state
const persistor = persistStore(store);

// Export the store and persistor for use in the application
export { store, persistor };