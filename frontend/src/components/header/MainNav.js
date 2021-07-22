/** @jsxImportSource theme-ui */

import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import styled from "styled-components";

import Navbar from "./Navbar";

// Logo is imported in this manner to enable use of the logo in this page
// NOTE: Explore using some method where the image directory can be passed in so this component is resuable.
import logo from "../../images/logoipsum.svg";

// Component Styling
const StyledMainNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
`;

const BrandingLink = styled(Link)`
  height: 2em;
`;

// Component: MainNav
function MainNav({ homeDetails, navigationDetails }) {
  const { route, title, alt } = homeDetails;

  const { authUser } = useContext(UserContext);
  console.log(`Auth user: `, authUser);

  // Navigation options will need to vary depending on if the current user is authenticated
  // Not Auth: Login / Register
  // Auth: Logout

  return (
    <StyledMainNav
      sx={{
        width: ["25%", "35%", "50%", "75%"],
      }}
    >
      <BrandingLink to={route}>
        <img src={logo} alt={alt} />
      </BrandingLink>

      <Navbar navigationDetails={navigationDetails} />
    </StyledMainNav>
  );
}

export default MainNav;
