import {
    ADD_CAR_FAILURE,
    ADD_CATEGORY_FAILURE,
    ADD_MANUFACTURER_FAILURE,
    BOOK_CAR_FAILURE,
    FETCH_BOOKINGS_FAILURE,
    FETCH_CARS_FAILURE,
    FETCH_CATEGORIES_FAILURE,
    FETCH_MANUFACTURERS_FAILURE,
    SIGNUP_FAILURE,
    LOGIN_FAILURE,
} from '../actions/types';

const errorsReducer = (state = {}, action) => {
    switch (actoin.type) {
        case ADD_CAR_FAILURE:
            return {
                addCarError: action.payload,
            };
        case ADD_CATEGORY_FAILURE:
            return {
                addCategoryError: action.payload,
            };
        case ADD_MANUFACTURER_FAILURE:
            return {
                addManufacturerError: action.payload,
            };
        case BOOK_CAR_FAILURE:
            return {
                bookingError: action.payload,
            };
        case ADD_MANUFACTURER_FAILURE:
            return {
                addManufacturerError: action.payload,
            };
        case ADD_CATEGORY_FAILURE:
            return {
                addCategoryError: action.payload,
            };
        case ADD_MANUFACTURER_FAILURE:
            return {
                addManufacturerError: action.payload,
            };
        default:
            return state;

    }
}