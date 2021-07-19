import { NavLink } from "react-router-dom";

import styled from "styled-components";

// Component Styling
const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;

  & li {
    margin: 0 0.75em;
    list-style-type: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

function Navbar({ navigationDetails }) {
  // Build link list from navigationDetails prop
  const navigationList = navigationDetails.map(({ to, title }, index) => {
    return (
      <li key={index}>
        <StyledNavLink to={to}>{title}</StyledNavLink>
      </li>
    );
  });

  return <StyledNavbar>{navigationList}</StyledNavbar>;
}

export default Navbar;
