import Link from "./Link";

function Sidebar() {
  const pages = [
    { name: "home", link: "/" },
    { name: "destination", link: "/destination" },
    { name: "crew", link: "/crew" },
    { name: "technology", link: "/technology" },
  ];
  const renderedLinks = pages.map((page) => {
    return (
      <div key={page.link}>
        <Link to={page.link}>{page.name}</Link>
      </div>
    );
  });
  return <div>{renderedLinks}</div>;
}

export default Sidebar;
