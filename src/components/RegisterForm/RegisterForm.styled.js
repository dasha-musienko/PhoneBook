import styled from "styled-components";
import img from "../../img/background.png";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  width: 499px;
  flex-shrink: 0;
  margin-top: 30px;

  border-radius: 29px;
  background: #fff;
  box-shadow: 0px 4px 21.3px 0px rgba(0, 0, 0, 0.25);
  padding: 32px 46px;
`;

export const FormTitle = styled.h3`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputLabel = styled.p`
  color: #b2b2b2;
  font-size: 12px;
  font-weight: 600;
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  color: #000;
  font-size: 18px;
  font-weight: 500;

  border-bottom: 1px solid #b2b2b2;
  transition: border-bottom 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s linear;

  border-radius: 31px;
  background-color: #000;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledDiv = styled.div`
  width: 437px;
  height: 109px;
  flex-shrink: 0;
  border-radius: 25px;
  background-image: url(${img});
  background-size: cover;
`;
