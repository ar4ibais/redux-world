import { SET_LOADING, SET_COUNTRIES, SET_ERROR } from './countries-actions'

const initialState = {
    status: 'idle',
    error: null,
    list: []
}

export const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_COUNTRIES:
            return {
                ...state,
                status: 'recieved',
                list: payload
            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        default:
            return state
    }
}