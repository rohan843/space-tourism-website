import TechList from "../components/TechList";

function TechPage() {
  return (
    <div>
      <div
        className="fixed min-h-screen inset-0 bg-tech bg-cover -z-50"
      />
      <p className="tracking-widest text-xl mt-10 mb-16 ml-40">
        <span className="text-neutral-500 font-bold pr-4">03</span>
        <span className="uppercase text-white">Space Launch 101</span>
      </p>
      <TechList />
    </div>
  );
}

export default TechPage;
