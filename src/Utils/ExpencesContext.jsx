import { createContext,useState,useMemo } from "react";
export const ExpenceContext = createContext();
export const ExpenceBalProvider = (props) => {
    const [expence, setExpence]=useState(0)
    const providerValue = useMemo(() => ({
        expence, setExpence,
    }), [expence]);
    return(
        <ExpenceContext.Provider value={providerValue}>
            {props.children}
        </ExpenceContext.Provider>
    );
}
