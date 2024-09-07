import axios from "axios";
import { useState, useEffect } from "react";
const API_KEY = "Nmzduo875daZ9FNCYJFcvZkECj5pnK3M";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");
  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
    setLoading(false);
  }
  useEffect(() => {
    fetchData("cat");
  }, []);

  return {
    gif,
    loading,
    fetchData,
  };
}

export default useGif;
