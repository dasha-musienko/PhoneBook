import { TiDelete } from "react-icons/ti";

import {
  Contact,
  ContactNumber,
  ContactsListWrapper,
  DeleteBtn,
  ContactName,
  HelperWrapper,
} from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";

import { selectContacts, selectFilter } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ContactsListWrapper>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactName>{name}</ContactName>
          <HelperWrapper>
            <ContactNumber>
              <p>{number}</p>
            </ContactNumber>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              <TiDelete size="30px" />
            </DeleteBtn>
          </HelperWrapper>
        </Contact>
      ))}
    </ContactsListWrapper>
  );
};
