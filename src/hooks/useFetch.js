import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.error(err.message);
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        });
    }, 500);
    return () => abortCont.abort();
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
