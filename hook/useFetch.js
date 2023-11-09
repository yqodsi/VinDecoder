import { useState } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("useFetch", rapidApiKey, endpoint, query);
  const options = {
    method: "GET",
    url: `https://car-utils.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "car-utils.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log("options", options);
      console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log("options", options);
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const startFetch = () => {
    fetchData();
  };

  return { data, isLoading, error, startFetch };
};

export default useFetch;
