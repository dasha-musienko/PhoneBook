import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import {
  InputLabel,
  FormContainer,
  FormTitle,
  StyledInput,
  FormButton,
  InputWrapper,
  StyledDiv,
} from "./RegisterForm.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <FormTitle>Register your account</FormTitle>
        <InputWrapper>
          <InputLabel>Username</InputLabel>
          <StyledInput type="text" name="name" />
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Email</InputLabel>
          <StyledInput type="email" name="email" />
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Password</InputLabel>
          <StyledInput type="password" name="password" />
        </InputWrapper>
        <FormButton type="submit">Sign Up</FormButton>
        <StyledDiv></StyledDiv>
      </FormContainer>
    </div>
  );
};
