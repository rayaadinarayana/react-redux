import Counter from "./Counter"
import { combineReducers } from "redux"

const allReducers=combineReducers({
    Counter:Counter
})
export default allReducers