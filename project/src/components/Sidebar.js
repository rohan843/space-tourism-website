import Link from "./Link";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Sidebar() {
  const { currentPath } = useNavigation();
  const pages = [
    { name: "home", link: "/", imageName: "home", index: "00" },
    {
      name: "destination",
      link: "/destination",
      imageName: "destination",
      index: "01",
    },
    { name: "crew", link: "/crew", imageName: "crew", index: "02" },
    {
      name: "technology",
      link: "/technology",
      imageName: "technology",
      index: "03",
    },
  ];
  const renderedLinks = pages.map((page) => {
    const active = page.link === currentPath;
    return (
      <Link key={page.link} to={page.link} className="text-white">
        <div
          className={classNames("h-full flex flex-row items-center px-4", {
            "border-b-2": active,
            "hover:border-b-2 border-b-neutral-400": !active,
          })}
        >
          <span className="font-bold pr-2">{page.index}</span>
          <span className="uppercase">{page.name}</span>
        </div>
      </Link>
    );
  });
  return (
    <div className="flex flex-row justify-between items-center w-screen pl-10 mt-5">
      <div>
        <img src="assets/shared/logo.svg" alt="logo" />
      </div>
      <div className="relative left-20 z-10 h-px w-2/5 bg-slate-600"></div>
      <div className="h-20 w-3/5 pl-44 flex flex-row bg-white/5 backdrop-blur-xl">
        {renderedLinks}
      </div>
    </div>
  );
}

export default Sidebar;
