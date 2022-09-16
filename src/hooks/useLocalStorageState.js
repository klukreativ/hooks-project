import { useState, useEffect } from 'react';

/* reusable hook that uses useState to scan for existing localStorage data to populate a page, as well as save to localStorage whenever the specific state is changed */
export default function useLocalStorageState(key, defaultVal) {
    // create piece of state, based off of value in localStorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });

    // use useEffect to update localStorage only when [state] changes, this allows us to reuse this hook for multiple separate functions

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}