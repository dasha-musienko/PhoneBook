import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "./Filter.styled";
import { filteredContacts } from "redux/contacts/filterSlice";
import { selectFilter } from "redux/contacts/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FormInput
      type="text"
      value={filter}
      onChange={(evt) => {
        dispatch(filteredContacts(evt.target.value));
      }}
      placeholder="Filter contacts by name..."
    />
  );
};
