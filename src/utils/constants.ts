import { IRoute, IStrings } from "../interfaces";

import { About, Contact, Home, MyWorks, Skills } from "../pages";

export const strings: IStrings = {
    navbar_logo: "Pascal Hector",
};

export const routes: IRoute[] = [
    {
        name: "Home",
        path: "/",
        page: Home,
    },
    {
        name: "About",
        path: "/about",
        page: About,
        
    },
    {
        name: "Skills",
        path: "/skills",
        page: Skills,
    },
    {
        name: "My Works",
        path: "/my-works",
        page: MyWorks
    },
    {
        name: "Contact",
        path: "/contact",
        page: Contact,
    }
];
