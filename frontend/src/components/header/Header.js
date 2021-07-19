import styled from "styled-components";
import MainNav from "./MainNav";

// Component Styling
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
`;

// Object containing information for home/logo portion of main navigation
const homeDetails = {
  route: "/home",
  title: "Level Up",
  alt: "Level up logo",
};

const navigationDetails = [
  { to: "/register", title: "Register" },
  { to: "/login", title: "Login" },
  { to: "/activities", title: "Activities" },
  { to: "/todos", title: "Todos" },
];

// Component: Header
// =================
function Header() {
  return (
    <StyledHeader>
      <MainNav
        homeDetails={homeDetails}
        navigationDetails={navigationDetails}
      />
    </StyledHeader>
  );
}

export default Header;
