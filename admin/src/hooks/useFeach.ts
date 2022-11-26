import { useState, useEffect } from "react";

const useFetch = (URI: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(URI);
        let resParser = await res.json();

        setData(resParser.body);
      } catch (e) {
        
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [URI]);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await fetch(URI);
      let resParser = await res.json();

      setData(resParser.body);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
