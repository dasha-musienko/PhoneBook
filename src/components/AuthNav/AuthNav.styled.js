import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const RegisterLink = styled(NavLink)`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  background-color: #000;
  box-shadow: 0px 4px 17px -4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

export const LoginLink = styled(NavLink)`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  background: #fff;
  box-shadow: 0px 4px 17px -4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 500;

  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: 1px solid #000;
  }
`;
