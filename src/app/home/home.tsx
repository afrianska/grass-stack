import "../../app.css";

function Home() {
  return (
    <div className="flex w-full h-screen items-center bg-sky-100">
      <div className="mx-auto w-3/4 bg-sky-950 flex flex-col md:flex-row items-center gap-x-16 py-24 px-28 rounded-3xl">
        <img className="h-40" src="/react.svg" alt="" />
        <div className="flex flex-col gap-y-4 text-white">
          <h1 className="font-bold text-5xl">The Grass Stack 👏</h1>
          <p className="font-light text-white">
            This is a minimal react + vite stack to serve as a starting point
            for demo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
