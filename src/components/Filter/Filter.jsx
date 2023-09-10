import { useState } from 'react';
import { Input } from './Filter.styled.js';

function Filter() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = event => {
    const newValue = event.target.value;
    setFilterValue(newValue);
  };

  return (
    <label>
      Find contacts by name
      <Input name="filter" value={filterValue} onChange={handleFilterChange} />
    </label>
  );
}

export default Filter;
