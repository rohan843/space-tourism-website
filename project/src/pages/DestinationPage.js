import DestinationList from "../components/DestinationList";

function DestinationPage() {
  return (
    <div className="text-white">
      <div className="fixed min-h-screen inset-0 bg-destination bg-cover -z-50" />
      <p className="tracking-widest text-xl mt-10 mb-16 ml-40">
        <span className="text-neutral-500 font-bold pr-4">01</span>
        <span className="uppercase">Pick Your Destination</span>
      </p>
      <DestinationList />
    </div>
  );
}

export default DestinationPage;
