import RandGif from "./components/RandGif";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-gray-300 items-center pb-10">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold ">
        Randon Gifs Generator
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <RandGif />
        <Tag />
      </div>
    </div>
  );
}
export default App;
