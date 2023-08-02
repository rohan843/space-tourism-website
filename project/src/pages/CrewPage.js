import CrewList from "../components/CrewList";

function CrewPage() {
  return (
    <div>
      <div
        className="fixed min-h-screen inset-0 bg-crew bg-cover -z-50"
      />
      <p>02 - Meet Your Crew</p>
      <CrewList />
    </div>
  );
}

export default CrewPage;
