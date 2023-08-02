import CrewList from "../components/CrewList";

function CrewPage() {
  return (
    <div>
      <div className="fixed min-h-screen inset-0 bg-crew bg-cover -z-50" />
      <p className="tracking-widest text-xl mt-10 mb-16 ml-40">
        <span className="text-neutral-500 font-bold pr-4">02</span>
        <span className="uppercase text-white">Meet Your Crew</span>
      </p>
      <CrewList />
    </div>
  );
}

export default CrewPage;
