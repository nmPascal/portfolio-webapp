import { IRoute, ISettingsHelperProps } from "../interfaces";
import { routes, strings } from "../utils";

export const SettingsHelper: ISettingsHelperProps = {
    getString: (key: string): string => {
        return strings[key];
    },
    getRoutes: (): IRoute[] => {
        return routes
    },
};