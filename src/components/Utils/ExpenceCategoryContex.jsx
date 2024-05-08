import { createContext,useState,useMemo } from "react";
export const MyContext = createContext();
export const MyProvider = (props) => {
    const [expenceCategory,setExpenceCategory]=useState([])
    const providerValue = useMemo(() => ({
        expenceCategory, setExpenceCategory,
    }), [expenceCategory]);
    return(
        <MyContext.Provider value={providerValue}>
            {props.children}
        </MyContext.Provider>
    );
}
