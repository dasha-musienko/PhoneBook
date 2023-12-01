import styled from "styled-components";

export const ContactsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 754px;
`;

export const Contact = styled.li`
  display: flex;
  flex-direction: row;
  padding: 20px 12px;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  width: 50%;
`;

export const HelperWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactNumber = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 0.3s linear;

  &:hover svg {
    color: #000;
  }
  svg {
    color: #EE0B0B;
  }

  &:focus {
    outline: none;
  }
`;
