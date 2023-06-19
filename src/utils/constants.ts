
import { IRoute, IStrings } from "../interfaces";export const strings: IStrings = {
    navbar_logo: "Pascal Hector",
};

export const routes: IRoute[] = [
    {
        name: "Home",
        path: "/#home",
    },
    {
        name: "About",
        path: "/#about",
        
    },
    {
        name: "Skills",
        path: "/#skills",
    },
    {
        name: "My Works",
        path: "/#my-works",
    },
    {
        name: "Contact",
        path: "/#contact",
    }
];
