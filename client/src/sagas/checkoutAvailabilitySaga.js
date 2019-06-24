import { take, actionChannel, put } from "redux-saga/effects";

import {
    SET_SHIPPING_FETCH_STATUS,
    setCanCheckOut,
    FETCHED,
} from '../actions';

export function* checkoutAvailabilitySaga() {
    const checkoutAvailablitityChannel = yield actionChannel(SET_SHIPPING_FETCH_STATUS);
    while (true) {
        const { status } = yield take(checkoutAvailablitityChannel);
        yield put(setCanCheckOut(status === FETCHED));
    }
}