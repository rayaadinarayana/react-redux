import { bindActionCreators } from "redux";

const Counter=(state=0,action)=>{
switch(action.type){
    case "INCREMENT": return state+1;
                    break;
    case "DECREMENT":return state-1;
                    break;
}
}
export default Counter