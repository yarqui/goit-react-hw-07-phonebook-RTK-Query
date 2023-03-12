import { useDispatch } from 'react-redux';
import { FilterWrap } from './Filter.styled';
import {
  InputLabel,
  InputField,
} from 'components/ContactForm/ContactForm.styled';
import { filterInitialState, setContactFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    value
      ? dispatch(setContactFilter(value.trim().toLowerCase()))
      : dispatch(setContactFilter(filterInitialState));
  };

  return (
    <FilterWrap>
      <InputLabel htmlFor="filter">Find your contacts by name</InputLabel>
      <InputField
        type="text"
        name="filter"
        id="filter"
        autoComplete="off"
        title="Find your contacts by name"
        onChange={handleChange}
      />
    </FilterWrap>
  );
};

export default Filter;
