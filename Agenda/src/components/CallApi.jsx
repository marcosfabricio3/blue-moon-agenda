import React, { useState, useEffect } from 'react'

const URL = 'http://localhost:3000/fichas';

function CallApi(URL) {
const [data, setData] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return { data };
};

export default CallApi;