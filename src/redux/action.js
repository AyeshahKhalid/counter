import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./constant"

export const counter_increment=()=>{
 return {
    type:COUNTER_INCREMENT
 }
}
export const counter_decrement=()=>{
 return {
    type:COUNTER_DECREMENT
 }
}
