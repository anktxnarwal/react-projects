import Loader from "./Loader";
import useGif from "../hooks/useGif";
function RandGif() {
  const { gif, loading, fetchData } = useGif();
  return (
    <div className="w-1/2 bg-red-400 rounded-lg border border-red-500 flex flex-col items-center gap-y-5">
      <h1 className="text-2xl italic uppercase font-semibold mt-3">
        Random Gif
      </h1>
      {loading ? <Loader /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-green-200 text-lg py-2 rounded-lg my-5"
      >
        Generate Gif
      </button>
    </div>
  );
}

export default RandGif;
