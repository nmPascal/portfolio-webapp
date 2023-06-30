/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// helpers
import { retrieveJoke } from "../helpers";

// interfaces
import { IJokeApiHookProps } from "../interfaces";

export const useJokeApi = (): IJokeApiHookProps => {
    const [joke, setJoke] = useState<string>("");

    const getJoke = () => {
        retrieveJoke().then((res) => {
            // console.log('~> getJoke > retrieveJoke > RES: ', res);
            setJoke(res);
        });
    };

    useEffect(() => {
        getJoke();
    }, []);

    const props = { joke, getJoke };
    return props;
};