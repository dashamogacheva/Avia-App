export const CHANGE_DEPARTURE_CITY = 'CHANGE_DEPARTURE_CITY';
export const CHANGE_ARRIVAL_CITY = 'CHANGE_ARRIVAL_CITY';
export const CHANGE_DEPARTURE_DATE = 'CHANGE_DEPARTURE_DATE';
export const CHANGE_ARRIVAL_DATE = 'CHANGE_ARRIVAL_DATE';

export function changeDepartureCity(departureCity) {
    return { type: CHANGE_DEPARTURE_CITY, departureCity };
}
export function changeArrivalCity(arrivalCity) {
    return { type: CHANGE_ARRIVAL_CITY, arrivalCity };
}
export function changeDepartureDate(departureDate) {
    return { type: CHANGE_DEPARTURE_DATE, departureDate };
}
export function changeArrivalDate(arrivalDate) {
    return { type: CHANGE_ARRIVAL_DATE, arrivalDate };
}