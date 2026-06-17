import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Alert } from 'react-native';

type NavigationProps = { currentPage: string; handleNavigate: (page: string) => () => void; goBack: () => () => void; count: number };
const NavigationContext = createContext<NavigationProps | undefined>(undefined);

export default function NavigationProvider({ children }: PropsWithChildren) {
    const [previousPage, setPreviousPage] = useState<string>();
    const [currentPage, setCurrentPage] = useState("welcome");

    function handleNavigate(Nextpage: string) {
        return () => {
            setPreviousPage(currentPage);
            setCurrentPage(Nextpage);
        };
    }

    function goBack() {
        return () => {
            if(!previousPage){
                return Alert.alert("Unable to Go Back");
            }

            const prev = previousPage;
            
            setPreviousPage(currentPage);
    
            setCurrentPage(prev);
        };
    }

    const contextVariables = { currentPage: currentPage, handleNavigate: handleNavigate, count: 1, goBack: goBack };

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