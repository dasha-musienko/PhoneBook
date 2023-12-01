import {
  InputLabel,
  FormContainer,
  FormTitle,
  StyledInput,
  FormButton,
  InputWrapper,
  StyledDiv,
} from "components/RegisterForm/RegisterForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Log in to your account</FormTitle>

      <InputWrapper>
        <InputLabel>Email</InputLabel>
        <StyledInput type="email" name="email" />
      </InputWrapper>

      <InputWrapper>
        <InputLabel>Password</InputLabel>
        <StyledInput type="password" name="password" />
      </InputWrapper>
      <FormButton type="submit">Log In</FormButton>
      <StyledDiv></StyledDiv>
    </FormContainer>
  );
};
