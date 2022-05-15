import { createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducer/filterReducerFunction"
const FilterContext = createContext();
const FilterContextProvider = ({children}) => {
    const [filterState, filterDispatch] = useReducer(filterReducerFunction, {
        stateSelected: "state",
        citySelected: "city"
      })
      console.log(filterState)
    return <FilterContext.Provider value={{filterDispatch,filterState}}>{children}</FilterContext.Provider>
}
const useFilter = () => useContext(FilterContext);
export { FilterContextProvider, useFilter }