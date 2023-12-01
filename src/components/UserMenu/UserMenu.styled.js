import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const WelcomeMessage = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
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

