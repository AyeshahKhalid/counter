import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constant"

const initialState = 0

export default function counter(state = initialState, action) {

    switch (action.type) {

        case COUNTER_INCREMENT:
            return state + 1

        case COUNTER_DECREMENT:
            return state > 0 ? state - 1 : state;

        default:
            return state
            
    }

}
