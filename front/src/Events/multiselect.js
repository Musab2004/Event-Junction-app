import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
export default function multiselect() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={dogOptions}
    />
  );
}