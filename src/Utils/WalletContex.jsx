import { createContext,useState,useMemo } from "react";
export const walletContext = createContext();
export const WalletBalProvider = (props) => {
    const [walletBalance, setWalletBalance]=useState(5000)
    const providerValue = useMemo(() => ({
        walletBalance, setWalletBalance,
    }), [walletBalance]);
    return(
        <walletContext.Provider value={providerValue}>
            {props.children}
        </walletContext.Provider>
    );
}
