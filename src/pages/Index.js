import React from 'react';
import SelectOption from '../components/SelectOption';
import { useDataContext } from '../context/DataContext';

const Index = () => {
  const { allData, daerahData } = useDataContext();
  console.log(daerahData); // Logging daerahData for debugging

  return (
    <div className='my-10'>
      <SelectOption data={daerahData} /> {/* Passing daerahData as a prop */}
      {/* <SelectOption /> */}
    </div>
  );
};

export default Index;
