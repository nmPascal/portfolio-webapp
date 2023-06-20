import { IRoute, IStrings } from "../interfaces";

import { About, Contact, Home, MyWorks, Skills } from "../pages";

export const strings: IStrings = {
    navbar_logo_url: "https://code.google.com/images/developers.png",
    navbar_title: "Pascal.hector",
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
