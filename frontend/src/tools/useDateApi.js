import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../config/config';

const UseDateApi = (initialUrl, method, initialData = null, headers = null) => {
    const [ data, setData ] = useState(null);
    const [ url, setUrl ] = useState(initialUrl);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                let result;
                switch (method) {
                    case "GET": {
                        result = await axios.get(backendUrl + url, { headers: headers });
                        break;
                    }
                    case "POST": {
                        result = await axios.post(backendUrl + url, initialData, { headers: headers });
                        break;
                    }
                    default: break;
                }
                setData(result.data);

            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setIsError(error.response.data.message);
                } else {
                    setIsError(true);
                }
            }
            setIsLoading(false);
        };
        
        fetch();
    }, [url]);

    return {
        data,
        isLoading,
        isError,
        setUrl
    };
};

export default UseDateApi;