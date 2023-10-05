import {
    CHANGE_DEPARTURE_CITY,
    CHANGE_ARRIVAL_CITY,
    CHANGE_DEPARTURE_DATE,
    CHANGE_ARRIVAL_DATE,
    CHANGE_DEPARTURE_HOURS
} from './actions';

const initialDepartureHours = ['09:20', '11:05'];

const initialState = {
    departureCity: 'Москва',
    arrivalCity: 'Казань',
    departureDate: new Date(),
    arrivalDate: null,
    departureHours: initialDepartureHours,
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
        case CHANGE_DEPARTURE_HOURS: {
            return {...state, departureHours: action.departureHours};
        }
        default: {
            return state;
        }
    }
}