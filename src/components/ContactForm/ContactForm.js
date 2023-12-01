import { Formik } from "formik";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import * as Yup from "yup";
import {
  ContactsAddBtn,
  InputLabel,
  ContactsCreateForm,
  StyledInput,
  StyledErrorMessage,
} from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { InputWrapper } from "components/RegisterForm/RegisterForm.styled";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").required("Required"),
  number: Yup.number().min(6, "Too Short!").required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    const isContactDublicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactDublicate) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <ContactsCreateForm>
          <InputWrapper>
            <InputLabel>Name</InputLabel>
            <StyledInput
              name="name"
              type="text"
              placeholder="Enter contact name"
            />
            <StyledErrorMessage component="div" name="name" />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Number</InputLabel>
            <StyledInput
              name="number"
              type="tel"
              placeholder="Enter contact phone"
            />
            <StyledErrorMessage component="div" name="number" />
          </InputWrapper>

          <ContactsAddBtn type="submit">Create contact</ContactsAddBtn>
        </ContactsCreateForm>
      </Formik>
    </div>
  );
};
