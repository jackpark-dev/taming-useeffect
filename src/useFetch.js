import { useEffect, useState, useRef, useLayoutEffect } from 'react';

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  const savedOnSuccess = useRef(options.onSuccess);

  useLayoutEffect(() => {
    savedOnSuccess.current = options.onSuccess;
  }, [options.onSuccess]);

  useEffect(() => {
    console.log('useFetch useEffect');
    if (options.url) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          savedOnSuccess.current?.(json);
          setData(json);
        });
    }
  }, [options.url]);

  return {
    data,
  };
};
