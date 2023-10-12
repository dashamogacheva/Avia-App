import {
    TypesState, ActionTypes, Action
} from './actions';

const initialState: TypesState = {
    departureCity: 'Москва',
    arrivalCity: 'Казань',
    departureDate: new Date(),
    arrivalDate: null,
    departureHours: ['09:20', '11:05'],
};

export const reducer = (state = initialState, action: Action) : TypesState => {
    switch (action.type) {
        case ActionTypes.CHANGE_DEPARTURE_CITY: {
            return {...state, departureCity: action.departureCity};
        }
        case ActionTypes.CHANGE_ARRIVAL_CITY: {
            return {...state, arrivalCity: action.arrivalCity};
        }
        case ActionTypes.CHANGE_DEPARTURE_DATE: {
            return {...state, departureDate: action.departureDate};
        }
        case ActionTypes.CHANGE_ARRIVAL_DATE: {
            return {...state, arrivalDate: action.arrivalDate};
        }
        case ActionTypes.CHANGE_DEPARTURE_HOURS: {
            return {...state, departureHours: action.departureHours};
        }
        default: {
            return state;
        }
    }
}

export type RootState = ReturnType<typeof reducer>;