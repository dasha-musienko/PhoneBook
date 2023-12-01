import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const ContactsCreateForm = styled(Form)`
  width: 303px;
  flex-shrink: 0;
  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 40px;
  background: #000;
`;

export const InputLabel = styled.label`
  color: #b2b2b2;
  font-size: 12px;
  font-weight: 600;
`;

export const StyledInput = styled(Field)`
  padding: 10px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 500;

  border-bottom: 1px solid #B2B2B2;
  transition: border-bottom 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 1px solid #b2b2b2;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 6px;
  color: red;
  font-size: 12px;
`;

export const ContactsAddBtn = styled.button`
  width: 247px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;

  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #111;
  font-size: 12px;
  font-weight: 600;

  margin-top: 20px;
`;
