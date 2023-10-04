import {
    CHANGE_DEPARTURE_CITY,
    CHANGE_ARRIVAL_CITY,
    CHANGE_DEPARTURE_DATE,
    CHANGE_ARRIVAL_DATE
} from './actions';

const initialState = {
    departureCity: '',
    arrivalCity: '',
    departureDate: new Date(),
    arrivalDate: null,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DEPARTURE_CITY: {
            return {...state, departureCity: action.departureCity};
        }
        case CHANGE_ARRIVAL_CITY: {
            return {...state, arrivalCity: action.arrivalCity};
        }
        case CHANGE_DEPARTURE_DATE: {
            return {...state, departureDate: action.departureDate};
        }
        case CHANGE_ARRIVAL_DATE: {
            return {...state, arrivalDate: action.arrivalDate};
        }
        default: {
            return state;
        }
    }
}