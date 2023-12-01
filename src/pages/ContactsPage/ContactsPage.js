import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import {
  ContactsPageWrapper,
  ContactsWrapper,
  ContactsTitle,
  UpdatingContactsBar,
} from "./ContactsPage.styled";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContactsPageWrapper>
        <ContactForm />
        <ContactsWrapper>
          <ContactsTitle>Contacts List</ContactsTitle>
          <div>
            {isLoading && (
              <UpdatingContactsBar>Updating contacts...</UpdatingContactsBar>
            )}
          </div>

          <Filter />
          <ContactList />
        </ContactsWrapper>
      </ContactsPageWrapper>
    </>
  );
}
