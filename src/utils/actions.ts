export interface TypesState {
    departureCity: string,
    arrivalCity: string,
    departureDate: Date,
    arrivalDate: null | Date,
    departureHours: string[],
}
export enum ActionTypes {
    CHANGE_DEPARTURE_CITY = 'CHANGE_DEPARTURE_CITY',
    CHANGE_ARRIVAL_CITY = 'CHANGE_ARRIVAL_CITY',
    CHANGE_DEPARTURE_DATE = 'CHANGE_DEPARTURE_DATE',
    CHANGE_ARRIVAL_DATE = 'CHANGE_ARRIVAL_DATE',
    CHANGE_DEPARTURE_HOURS = 'CHANGE_DEPARTURE_HOURS',
}
interface ChangeDepartureCityAction {
    type: ActionTypes.CHANGE_DEPARTURE_CITY;
    departureCity: string;
}
interface ChangeArrivalCityAction {
    type: ActionTypes.CHANGE_ARRIVAL_CITY;
    arrivalCity: string;
}
interface ChangeDepartureDateAction {
    type: ActionTypes.CHANGE_DEPARTURE_DATE;
    departureDate: Date;
}
interface ChangeArrivalDateAction {
    type: ActionTypes.CHANGE_ARRIVAL_DATE;
    arrivalDate: null | Date;
}
interface ChangeDepartureHoursAction {
    type: ActionTypes.CHANGE_DEPARTURE_HOURS;
    departureHours: string[];
}
export function changeDepartureCity (departureCity: string) {
    return { type: ActionTypes.CHANGE_DEPARTURE_CITY, departureCity };
}
export function changeArrivalCity(arrivalCity: string) {
    return { type: ActionTypes.CHANGE_ARRIVAL_CITY, arrivalCity };
}
export function changeDepartureDate(departureDate: Date) {
    return { type: ActionTypes.CHANGE_DEPARTURE_DATE, departureDate };
}
export function changeArrivalDate(arrivalDate: Date) {
    return { type: ActionTypes.CHANGE_ARRIVAL_DATE, arrivalDate };
}
export function changeDepartureHours(departureHours: string[]) {
    return { type: ActionTypes.CHANGE_DEPARTURE_HOURS, departureHours };
}

export type Action = ChangeDepartureCityAction |
    ChangeArrivalCityAction |
    ChangeDepartureDateAction |
    ChangeArrivalDateAction |
    ChangeDepartureHoursAction;