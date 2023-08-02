import Link from "../components/Link";

function HomePage() {
  return (
    <div>
      <div className="fixed min-h-screen inset-0 bg-home bg-cover -z-50" />
      <div className="absolute custom-position-home-text w-1/3">
        <p className="uppercase text-white">So, you want to travel to</p>
        <h1 className="uppercase text-white text-9xl mt-4 mb-12"> SPACE</h1>
        <p className="text-white text-sm tracking-wider leading-6 home-para">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="absolute right-48 bottom-44 explore-shadow">
        <Link to="/destination">
          <button className="text-indigo-950 uppercase bg-white rounded-full w-52 h-52 text-2xl tracking-wide font-serif font-light">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
