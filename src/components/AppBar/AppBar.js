import { Navigation } from "../Navigation/Navigation";
import { useAuth } from "hooks";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { NavBar } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};
