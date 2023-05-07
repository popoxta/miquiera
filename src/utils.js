import {useEffect, useState} from "react";

export default function usePersistedValue(key, defaultValue){
    const [value, setValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        return value ? (JSON.parse(value)) : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
