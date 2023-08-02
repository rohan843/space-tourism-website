import Link from "./Link";

function Sidebar({ setImage }) {
  const pages = [
    { name: "home", link: "/", imageName: "home" },
    { name: "destination", link: "/destination", imageName: "destination" },
    { name: "crew", link: "/crew", imageName: "crew" },
    { name: "technology", link: "/technology", imageName: "technology" },
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
