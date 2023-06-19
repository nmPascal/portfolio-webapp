/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
    ReactNode,
    RefObject,
    createContext,
    useContext,
    useRef,
} from "react";
import { IAppContextProviderProps } from "../interfaces/IAppContextProviderProps";
import { IRoute } from "../interfaces";

type Props = {
    children: ReactNode;
};

const AppContext = createContext<IAppContextProviderProps>({
    sections: [],
    scrollToRef: () => [],
});

export const useAppContextProvider = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
    const sections: IRoute[] = [
        { name: "Home", ref: useRef<HTMLDivElement>(null) },
        { name: "About", ref: useRef<HTMLDivElement>(null) },
        { name: "Skills", ref: useRef<HTMLDivElement>(null) },
        { name: "Projects", ref: useRef<HTMLDivElement>(null) },
        { name: "Contact", ref: useRef<HTMLDivElement>(null) },
    ];

    const scrollToRef = (ref: RefObject<HTMLDivElement>): void => {
        if (!ref.current) return;
        console.log('~> ', ref); //DELETE
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const propsValues = {
        sections,
        scrollToRef,
    };

    return (
        <AppContext.Provider value={propsValues}>
            {children}
        </AppContext.Provider>
    );
};
