import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const  [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [queries, setQueries] = useState({});
    const [range, setRange] = useState([10, 100]);
    const [output, setOutput] = useState({});

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        loading,
        setLoading,
        queries,
        setQueries,
        range,
        setRange,
        output,
        setOutput
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}