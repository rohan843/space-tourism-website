import DestinationList from "../components/DestinationList";

function DestinationPage() {
  return (
    <div>
      <div
        className="fixed min-h-screen inset-0 bg-destination bg-cover -z-50"
      />
      <p>01 - Pick Your Destination</p>
      <DestinationList />
    </div>
  );
}

export default DestinationPage;
