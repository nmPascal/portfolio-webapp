export interface ISettingsHelperProps {
    getRoutes: () => IRoute[];
    getString: (key: string) => string;
}

export interface IStrings {
    [key: string]: string;
}

export interface IRoute {
    name: string;
    path: string;
}