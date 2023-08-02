import TechList from "../components/TechList";

function TechPage() {
  return (
    <div>
      <div
        className="fixed min-h-screen inset-0 bg-tech bg-cover -z-50"
      />
      <p>03 - Space Launch 101</p>
      <TechList />
    </div>
  );
}

export default TechPage;
