import { useEffect, useState } from "react";


const usePersistedState = (key, initialValue) => {

    const IsItem = localStorage.getItem(key);
    const [value, setValue] = useState(IsItem ? JSON.parse(IsItem) : initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue];
}

export default usePersistedState;