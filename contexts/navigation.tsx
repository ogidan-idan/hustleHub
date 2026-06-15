import { createContext, PropsWithChildren, useContext, useState } from 'react';

type NavigationProps = { currentPage: string; handleNavigate: (page: string) => () => void; count: number};
const NavigationContext = createContext<NavigationProps | undefined>(undefined);

export default function NavigationProvider({ children }: PropsWithChildren) {
    const [currentPage, setCurrentPage] = useState("welcome");
    function handleNavigate(page: string) {
        return () => setCurrentPage(page);
    }

    const contextVariables = { currentPage: currentPage, handleNavigate: handleNavigate, count: 1 };

    return (<NavigationContext.Provider value={contextVariables}>
        {children}
    </NavigationContext.Provider>);
}

export function useNavigation() {
    const context = useContext(NavigationContext);

    // Throw an explicit runtime error if the hook is used outside the provider
    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }

    return context;
}