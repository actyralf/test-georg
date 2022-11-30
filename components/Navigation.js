import styled from "styled-components";
import {Icon} from "@iconify/react";
import homeRounded from "@iconify/icons-material-symbols/home-rounded";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">
        <Icon icon={homeRounded} color="#572887" width="45px" title="Home" />
      </Link>
      <Link href="/bookmarks">
        <Icon
          icon="mdi:bookmark-multiple"
          color="#572887"
          width="40px"
          title="Bookmarks"
        />
      </Link>
      <Link href="/map">
        <Icon
          icon="mdi:map-marker-multiple"
          color="#572887"
          width="40px"
          title="Map"
        />
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: solid #572887 2px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  margin-top: 5px;
  position: sticky;
  bottom: 0px;
`;
