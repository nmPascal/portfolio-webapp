import { useEffect } from "react";

// helpers
import { retrieveJoke } from "../helpers";

export const useJokeApi = () => {

    const getJoke = () => {
        retrieveJoke().then((res) => {
            console.log(res);
        });
    };

    useEffect(() => {
        getJoke();
    }, []);

    const props = {
        getJoke,
    };
    return props;
};