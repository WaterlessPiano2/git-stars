import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [result, setresult] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((rawRes) => {
        if (rawRes.status === 200) {
          return rawRes.json();
        } else {
          throw new Error("Respose status code: " + rawRes.status);
        }
      })
      .then((res) => {
        setresult(res.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
        setIsLoading(false);
      });
  }, [url]);

  return [result, isLoading, error];
}

export default useFetch;
