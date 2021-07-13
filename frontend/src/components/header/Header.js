import MainNav from "./MainNav";

function Header() {
  // Object containing information for home/logo portion of main navigation
  const homeDetails = {
    route: "/home",
    title: "Level Up",
    alt: "Level up logo",
  };

  return (
    <header className="header-container">
      <MainNav homeDetails={homeDetails} />
    </header>
  );
}

export default Header;
