import axios from "axios";
import { createStore, compose, applyMiddleware } from "redux";
import { withExtraArgument } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from "./root-reducer";
import * as api from '../config'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["theme"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(
        withExtraArgument({
            client: axios,
            api
        })
    )
))

export { store }
export const persister = persistStore(store)