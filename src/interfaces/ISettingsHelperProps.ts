import { FC } from "react";

export interface ISettingsHelperProps {
    getRoutes: () => IRoute[];
    getString: (key: string) => string;
    getDataFields: (key: string) => string;
    getSkillsGridColumns: () => string[];
}

export interface IRoute {
    name: string;
    path: string;
    page: FC;
}

export interface IStrings {
    [key: string]: string;
}