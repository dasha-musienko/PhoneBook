import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import {
  WelcomeContainer,
  WelcomeMessage,
  LogoutButton,
} from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WelcomeContainer>
      <WelcomeMessage>Welcome to Phonedook, {user.name}!</WelcomeMessage>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogoutButton>
    </WelcomeContainer>
  );
};
