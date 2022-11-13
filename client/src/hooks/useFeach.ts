import { useState, useEffect } from "react";
import { Data } from "../components/Reserve";

const useFetch = (URI: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(URI);
        let resParser = await res.json();

        setData(resParser.body);
      } catch (error) {
        console.log(error);
        setError(error);
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
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
