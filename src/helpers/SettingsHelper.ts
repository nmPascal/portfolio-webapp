import { IRoute, ISettingsHelperProps, ISocialNetwork } from "../interfaces";

import { socialNetworks, strings } from "../utils";

import { About, Contact, Home, MyWorks, Skills } from "../pages";


export const SettingsHelper: ISettingsHelperProps = {
    getRoutes: (): IRoute[] => {
        return [
            { name: "Home", path: "/", page: Home },
            { name: "About", path: "/about", page: About },
            { name: "Skills", path: "/skills", page: Skills },
            { name: "My Works", path: "/my-works", page: MyWorks },
            { name: "Contact", path: "/contact", page: Contact },
        ];
    },
    getString: (key: string): string => {
        return strings[key];
    },
    getSocialNetworks: (): ISocialNetwork[] => {
        return socialNetworks;
    },
};
