function filterReducerFunction (state, action)  {
    switch(action.type){
        case "STATE":
            return{...state,stateSelected:action.payload,citySelected: "city"}
        case "CITY":
            return{...state,citySelected: action.payload}
    }
}
export { filterReducerFunction }