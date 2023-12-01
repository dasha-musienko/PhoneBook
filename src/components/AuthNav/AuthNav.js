import { NavWrapper, RegisterLink, LoginLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <NavWrapper>
      <LoginLink to="/login">Log In</LoginLink>
      <RegisterLink to="/register">Sign Up</RegisterLink>
    </NavWrapper>
  );
};
