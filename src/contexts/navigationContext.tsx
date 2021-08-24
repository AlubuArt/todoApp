import React, { useContext, createContext, useState} from 'react';

export interface NavigationContextInterface {
    view: string;
    toggleNavigation: (view: string) => void;
}


export const NavigationContext = createContext<NavigationContextInterface>({
    view: "Todo",
    toggleNavigation: () => {},
});


const NavigationProvider: React.FC = ({children}) => {
    const [view, setView] = useState<string>("Todo");

    const toggleNavigation = (view: string) => {
        setView(view)
    }

    return (
        <NavigationContext.Provider value={{view, toggleNavigation}}>
            {children}
        </NavigationContext.Provider>
    )

}

export default NavigationProvider;