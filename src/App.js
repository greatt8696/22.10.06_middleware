function App() {
  return (
    <div className="App object-center w-screen h-screen bg-slate-800 grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 p-5">
      <div className="blur-sm rounded-3xl bg-gradient-to-r from-type-one-blue via-type-one-puple to-type-one-yellow"></div>
      <div className=" rounded-3xl bg-gradient-to-r from-type-three-pink via-type-three-blue to-type-three-green"></div>
      <div className="blur-sm rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className=" rounded-3xl bg-gradient-to-r from-pastel-purple to-pastel-blue"></div>
      <div className="hover:animate-bounce-short blur-sm rounded-3xl bg-gradient-to-r from-type-lime-normal to-type-lime-light"></div>
      <div className="hover:animate-wiggle rounded-3xl bg-gradient-to-r from-type-two-blue via-type-two-puple to-type-two-pink"></div>
    </div>
  );
}

export default App;
