// utils
import { dataFields, skillsGridColumns, strings } from "../utils";

// interfaces
import { IRoute, ISettingsHelperProps } from "../interfaces";

// pages
import { About, Home, MyWorks, Skills } from "../pages";


export const SettingsHelper: ISettingsHelperProps = {
    getRoutes: (): IRoute[] => {
        return [
            { name: "Home", path: "/", page: Home },
            { name: "About", path: "/about", page: About },
            { name: "Skills", path: "/skills", page: Skills },
            { name: "My Works", path: "/my-works", page: MyWorks },
        ];
    },
    getString: (key: string): string => {
        return strings[key];
    },
    getDataFields: (key: string): string => {
        return dataFields[key];
    },
    getSkillsGridColumns: (): string[] => {
        return skillsGridColumns;
    },
};
