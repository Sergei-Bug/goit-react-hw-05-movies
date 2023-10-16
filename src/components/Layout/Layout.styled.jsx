import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:focus {
    color: red;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
`;
export const Header = styled.header`
  //   background-color: rgb(206, 187, 218);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;
