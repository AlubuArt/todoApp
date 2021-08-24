import React, {useContext} from "react";
import { NavigationContext } from "../contexts/navigationContext";



const Navigation = () => {

    const {toggleNavigation} = useContext(NavigationContext);


    return (

        <div>
            <button onClick={() => toggleNavigation("Todo")}>Todo</button>
            <button onClick={() => toggleNavigation("Doing")}>Doing</button>
            <button onClick={() => toggleNavigation("Done")}>DOne</button>
        </div>
    )
}


export default Navigation;

