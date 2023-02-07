import React, { useEffect, useState } from 'react';

const useLocalStrage = (key, defaultvalue) => {
    const [value, setValue] = useState(() => {
        const jsonvalue = window.localStorage.getItem(key);
        if(jsonvalue !== null) return JSON.parse(jsonvalue);

        return defaultvalue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue]);

    return [value, setValue];
};

export default useLocalStrage;