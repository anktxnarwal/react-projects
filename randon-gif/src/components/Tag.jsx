import React, { useState } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState();
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="w-1/2 bg-orange-300 rounded-lg border border-orange-400 flex flex-col items-center gap-y-5 mt-3">
      <h1 className="mt-3 text-2xl italic uppercase font-semibold">
        Random {tag} Gif
      </h1>
      {loading ? <Loader /> : <img src={gif} width="450" />}
      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-1 text-center outline-none"
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />
      <button
        className="w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-5 "
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
