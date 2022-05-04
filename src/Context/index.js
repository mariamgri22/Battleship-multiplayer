import { createContext, useContext,useReducer } from "react";
import { reducer,defaultState } from "../state/state";

const Context=createContext(defaultState);
const useGameContext=()=>useContext(Context);

const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)
    return <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
}
export {Provider,useGameContext};